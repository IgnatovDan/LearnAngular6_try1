import { Injectable } from '@angular/core';
import { MyHero } from './myhero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyheroService {

  constructor() { }
  /*getHeroes(): MyHero[] {
    return HEROES;
  }*/
  getHeroesAsync(): Observable<MyHero[]> {
    return of(HEROES);
  }
}
