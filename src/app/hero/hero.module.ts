import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core'
import { NewComponent } from './new/new.component';
import { HeroRoutingModule } from './hero-routing.module'
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    HeroRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  exports:[
    NewComponent
  ]
})
export class HeroModule { }
