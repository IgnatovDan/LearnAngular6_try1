import { Component, OnInit, Input } from '@angular/core';
import { MyHero } from '../myhero';
import { ActivatedRoute } from '@angular/router';
import { MyheroService } from '../myhero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-myhero-detail',
  templateUrl: './myhero-detail.component.html',
  styleUrls: ['./myhero-detail.component.css']
})
export class MyheroDetailComponent implements OnInit {

  hero: MyHero;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: MyheroService,
    private location: Location
  ) {
  }

  ngOnInit() {
    const heroId : number = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    
    this.heroService.getHeroAsync(heroId)
      .subscribe(hero => this.hero = hero);
  }

  navigateBack() {
    this.location.back();
  }
}
