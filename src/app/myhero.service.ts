import { Injectable } from '@angular/core';
import { MyHero } from './myhero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MymessageService } from './mymessage.service';

@Injectable({
  providedIn: 'root'
})
export class MyheroService {

  getHeroesAsyncCounter: number = 0;
  constructor(private messageService: MymessageService) { }
  /*getHeroes(): MyHero[] {
    return HEROES;
  }*/
  getHeroesAsync(): Observable<MyHero[]> {
    this.getHeroesAsyncCounter++;
    this.messageService.add('> getHeroesAsync, call count: ' + this.getHeroesAsyncCounter);
    return of(HEROES);
  }
}
