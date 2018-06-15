import { Component, OnInit } from '@angular/core';
import { MyHero } from '../myhero';
import { MyheroService } from '../myhero.service';

@Component({
  selector: 'app-myheroes',
  templateUrl: './myheroes.component.html',
  styleUrls: ['./myheroes.component.css']
})

export class MyheroesComponent implements OnInit {

  selectedHero : MyHero;
  heroes: MyHero[];

  constructor(private myheroService: MyheroService) { 
  }

  ngOnInit() {
    this.myheroService.getHeroesAsync().subscribe(value => this.heroes = value);
    //this.heroes = this.myheroService.getHeroesAsync();
    //this.selectedHero = this.heroes[1];
  }
  onSelect(hero: MyHero): void {
    this.selectedHero = hero;
  }

}
