import { Component, OnInit, Output } from '@angular/core';
import { Hero } from '../model/hero.model';
import { HeroesService } from '../services/heroes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  
  constructor(private heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
    this.heroesService.refreshNeeded.subscribe(()=>{
      this.getHeroes();  
    })
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getHeroes()
      .subscribe(response => this.heroes = <Hero[]>(response),
        error => console.log(error));
  }

  editHero(event) {
    this.heroesService.updateHero(event)
    this.router.navigate(['/new']);

  }

  deleteHero(event) {
    this.heroesService.deleteHero(event._id).subscribe();
    this.router.navigate(['/heroes']);
  }

}
