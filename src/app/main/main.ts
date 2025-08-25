import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [  FormsModule], 
  templateUrl: './main.html',
  styleUrls: ['./main.css']
})
export class Main {
  pokemon: any;
  searchTerm: string = '';

  constructor(private http: HttpClient) {}

  searchPokemon() {
    if (!this.searchTerm) return;
    const url = `https://pokeapi.co/api/v2/pokemon/${this.searchTerm.toLowerCase()}`;
    this.http.get(url).subscribe(
      data => {
        this.pokemon = data;
        console.log(this.pokemon);
      },
      error => {
        this.pokemon = null;
        console.error('Pokémon not found');
      }
    );
  }
}
