import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  cocktails = [
    {
      name: 'Margarita',
      price: '5€',
      img: 'https://zupimages.net/up/19/15/oaei.jpg',
    },
    {
      name: 'Mojito',
      price: '6€',
      img: 'https://zupimages.net/up/19/15/4j3c.jpeg',
    },
    {
      name: 'Jaggerbomb',
      price: '4€',
      img: 'https://zupimages.net/up/19/15/jkv4.jpg'
    }
  ];

  constructor() { }

  getCocktails() {
    return this.cocktails;
  }
}
