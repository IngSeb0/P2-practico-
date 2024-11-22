import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';


@NgModule({
  imports: [CommonModule ],
  declarations: [PokemonListComponent],
  exports: [PokemonListComponent], 
})
export class PokemonModule {}
