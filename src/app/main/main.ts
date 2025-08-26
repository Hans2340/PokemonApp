import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-main',
  imports: [FormsModule, TitleCasePipe, CommonModule],
  templateUrl: './main.html',
  styleUrls: ['./main.css']
})
export class Main implements OnInit {
  pokemon: any;
  featuredPokemon: any;
  searchTerm: string = '';
  randomNumbers: number[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRandomNumbers(); // Trigger on page load
    this.getFeaturedPokemon();


    document.body.className = "selector";



  }


  // Function to search for a Pokémon by name or ID
  searchPokemon() {
    if (!this.searchTerm) {
      console.log('Search for pokemon');
      return;
    }
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

  // Function to generate and log a random number between 1 and 1025
  getRandomNumbers() {
    this.randomNumbers = [];
    for (let i = 0; i < 5; i++) {
      const randomNumber = Math.floor(Math.random() * 1025) + 1;
      this.randomNumbers.push(randomNumber);
    }
    // console.log(this.randomNumbers);
  }

  //Function to fetch featured Pokémon based on random numbers
  getFeaturedPokemon() {
    if (this.randomNumbers.length === 0) {
      console.error('Random numbers not generated yet.');
      return;
    }

    const requests = this.randomNumbers.map(id =>
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    );

    forkJoin(requests).subscribe({
      next: results => {
        this.featuredPokemon = results;
        console.log(this.featuredPokemon);
      },
      error: error => {
        console.error('Error fetching featured Pokémon:', error);
      }
    });
  }
}
