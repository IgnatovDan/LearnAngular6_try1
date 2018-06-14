import { Component, OnInit } from '@angular/core';
import { MyHero } from '../myhero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-myheroes',
  templateUrl: './myheroes.component.html',
  styleUrls: ['./myheroes.component.css']
})

export class MyheroesComponent implements OnInit {

  selectedHero : MyHero;
  heroes = HEROES;

  constructor() { 
    this.selectedHero = this.heroes[1];
  }

  ngOnInit() {
  }
  onSelect(hero: MyHero) {
    this.selectedHero = hero;
  }

}
