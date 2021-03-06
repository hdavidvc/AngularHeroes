import { Component, OnInit} from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  constructor( private location: Location, private heroservices: HeroService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id');
    this.heroservices.getHero(id)
      .subscribe(hero => {this.hero = hero; console.log(hero); });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
  this.heroservices.updateHero(this.hero)
    .subscribe(() => this.goBack());
}
}
