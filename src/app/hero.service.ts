import { Injectable } from '@angular/core';
import { Hero } from './interface/hero.interface';
import { HEROES } from './mock-heroes';
import { MessagesService } from './messages.service';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HerService: Fetched Heroes');
    return of (HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of (HEROES.find(hero => hero.id === id)!);
  }
}
