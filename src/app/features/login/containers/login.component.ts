import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../../../services/articles/article.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  showLoadingOverlay: boolean = false;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
  }

  submitForm(): void {
    this.error = null;
    if (this.loginForm.valid) {
      this.showLoadingOverlay = true;
      this.articleService.getUsers().subscribe(response => {
        console.log(response);
        this.showLoadingOverlay = false;
        const user = response.filter(f => f.username === this.loginForm.value.username && f.email === this.loginForm.value.email);
        if (response.filter(f => f.username === this.loginForm.value.username && f.email === this.loginForm.value.email).length > 0) {
          localStorage.setItem('userToken', JSON.stringify(user[0]));
          this.router.navigate(['/home']);
          console.log('/home');
        } else {
          this.error = 'Invalid user!';
        }
      });
    }
  }

}
