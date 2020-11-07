import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-the-app-bar',
  templateUrl: './the-app-bar.component.html',
  styleUrls: ['./the-app-bar.component.scss'],
})
export class TheAppBarComponent implements OnInit {
  isDarkMode: boolean = localStorage.getItem('dark-mode') === 'true';

  constructor(public router: Router) {}

  ngOnInit(): void {}

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('dark-mode', this.isDarkMode.toString());
    document.body.classList.toggle('theme-transition', true);
    document.body.classList.toggle('dark', this.isDarkMode);
  }

  goBack(): void {
    this.router.navigate(['/posts']);
  }
}
