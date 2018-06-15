import { Injectable } from '@angular/core';
import { MyHero } from './myhero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MymessageService } from './mymessage.service';

@Injectable({
  providedIn: 'root'
})
export class MyheroService {

  constructor(private messageService: MymessageService) { }
  /*getHeroes(): MyHero[] {
    return HEROES;
  }*/
  getHeroesAsync(): Observable<MyHero[]> {
    this.messageService.add('> getHeroesAsync');
    return of(HEROES);
  }
}
