import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { TrainerRoutingModule } from './trainer-routing.module';
import { PokemonListComponent } from '../pokemon/pokemon-list/pokemon-list.component';
import { PokemonModule } from '../pokemon/pokemon.module';

@NgModule({
  declarations: [
    TrainerListComponent,
    TrainerDetailComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,
    TrainerRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    PokemonModule
  ],
  exports: [TrainerListComponent],

})
export class TrainerModule { }