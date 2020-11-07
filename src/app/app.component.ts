import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'blog';

  ngOnInit(): void {
    document.body.classList.toggle(
      'dark',
      localStorage.getItem('dark-mode') === 'true'
    );
  }
}
