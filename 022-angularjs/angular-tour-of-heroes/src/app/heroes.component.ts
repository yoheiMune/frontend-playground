import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  // templateUrl: './heroes.component.html',
  template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  hero: Hero = { id: 1, name: 'Windstorm' };
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {}
  ngOnInit(): void {
    this.getHeroes()
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}

