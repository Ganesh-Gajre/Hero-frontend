import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { HeroesService } from "../services/heroes.service";
import { Router } from "@angular/router"
import { Hero } from "../model/hero.model";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.scss"]
})
export class NewComponent implements OnInit {

  heroes: Hero[] = [];
  data = null;

  constructor(private heroesService: HeroesService, private router: Router) { }

  heroesForm = new FormGroup({
    "heroName": new FormControl(null),
    "heroHeight": new FormControl(null),
    "heroType": new FormControl(null),
    "canFly": new FormControl(null),
    "superPowers": new FormControl(null),
    "fanFollowing": new FormControl(null),
    "fightsWon": new FormControl(null)
  })


  ngOnInit() {
    this.data = this.heroesService.getData()
    if (this.data != null) {
      this.updateHero(this.data)
    }
    this.heroesService.setData()
  }



  onSubmit() {

    if (this.data == null) {
      this.heroesService.addHeroes(this.heroesForm.value).subscribe()
    }
    else {
      this.heroesService.updateHeroes(this.heroesForm.value, this.data._id).subscribe()
    }


    // this.heroesService.addHeroes(this.heroesForm.value).subscribe()
    this.router.navigate(["/heroes"]);
  }


  updateHero(data) {
    // console.log(data);

    this.heroesForm = new FormGroup({
      "heroName": new FormControl(data.heroName),
      "heroHeight": new FormControl(data.heroHeight),
      "heroType": new FormControl(data.heroType),
      "canFly": new FormControl(data.canFly),
      "superPowers": new FormControl(data.superPowers),
      "fanFollowing": new FormControl(data.fanFollowing),
      "fightsWon": new FormControl(data.fightsWon)
    })

  }

}
