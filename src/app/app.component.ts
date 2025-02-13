import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthapiService } from './shared/authapi.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vizsgamunka';
  loggedIn = false;
  selectedLang = 'HU'; // nyelvválasztó dropdown menü alapértelmezett állása

  constructor(private authapi: AuthapiService){}

  ngOnInit(){
    this.loggedIn = this.authapi.isLoggedIn()
  }

  changeWord(lang: string){
    this.selectedLang = lang;
  }
}
