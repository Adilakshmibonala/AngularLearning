import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Adilakshmi", "Adilakshmi Recipe", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/1/03/fnk_football_cheese_ball_and_charcuterie_board_s4x3.jpg.rend.hgtvcom.406.271.suffix/1672860421438.jpeg")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
