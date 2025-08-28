import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Header } from './header/header';
import { Main } from './main/main';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
            Header, 
            Main, 
            HttpClientModule, 
            FormsModule, 
            Footer, 
            RouterLink, 
            RouterLinkActive], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Test';
}

export class AppComponent {
    title = 'route';
}
