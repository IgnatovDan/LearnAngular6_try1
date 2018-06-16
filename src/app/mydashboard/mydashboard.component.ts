import { Component, OnInit } from '@angular/core';
import { MyheroService } from '../myhero.service';
import { MyHero } from '../myhero';

@Component({
  selector: 'app-mydashboard',
  templateUrl: './mydashboard.component.html',
  styleUrls: ['./mydashboard.component.css']
})
export class MydashboardComponent implements OnInit {

  heroes: MyHero[];

  constructor(private myHeroService : MyheroService) { }

  ngOnInit() {
    //reduces the number of heroes displayed to four (2nd, 3rd, 4th, and 5th).
    this.myHeroService.getHeroesAsync().subscribe(result => this.heroes = result.slice(1, 5));
  }

}
