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
  getHeroAsycCounter: number = 0;
  constructor(private messageService: MymessageService) { }
  /*getHeroes(): MyHero[] {
    return HEROES;
  }*/
  getHeroesAsync(): Observable<MyHero[]> {
    this.getHeroesAsyncCounter++;
    this.messageService.add(`> getHeroesAsync, call count: ${this.getHeroesAsyncCounter}`);
    const result = of(HEROES);
    result.subscribe(() => this.messageService.add(`< getHeroesAsync, call count: ${this.getHeroesAsyncCounter}`));
    return result;
  }
  // getHero(id: number) {
  //   return HEROES.find(item => item.id === id);
  // }
  getHeroAsync(id: number) {
    this.getHeroAsycCounter++;
    this.messageService.add(`> getHeroAsync, id: ${id}, call count: ${this.getHeroAsycCounter}`);
    return of(HEROES.find(item => item.id === id));
  }
}
