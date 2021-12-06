import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkTheme: boolean = false;

  title = 'Amazing-solutions';

  constructor(private router: Router,
              @Inject(PLATFORM_ID) private platformId: Object) {

  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('theme')) {
        this.darkTheme = Boolean(Number(localStorage.getItem('theme')));
      } else {
        this.onChangeDarkMode();
      }
    }
  }
  onChangeDarkMode() {
    if (this.darkTheme) {
      localStorage.setItem('theme', '1')
    } else {
      localStorage.setItem('theme', '0')
    }
  }
}
