import { Component } from '@angular/core';
import { Header } from '../header/header'; 
import { Main } from '../main/main';
import { Footer } from '../footer/footer';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [ Header, Main, Footer, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
