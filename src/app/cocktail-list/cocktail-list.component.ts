import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  cocktails = [];

  constructor(
    private cocktailsService: CocktailService
  ) { }

  ngOnInit() {
    this.cocktails = this.cocktailsService.getCocktails();
  }

}
