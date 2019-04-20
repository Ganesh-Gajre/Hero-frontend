import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeroesComponent } from "./hero/heroes/heroes.component";
import { NewComponent } from "./hero/new/new.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";

const routes: Routes = [
  { path: "heroes", component: HeroesComponent },
  // { path: "new", component: NewComponent }
  { path: "new", loadChildren: "./hero/hero.module#HeroModule" },

  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HeroesComponent, NewComponent]