import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit,OnDestroy {
  PokemonData: {}
  PokemonData2: {}

  selected: string
  pokeDataSub : Subscription
  pokeData2Sub : Subscription
  constructor(private pokemon: PokemonService) { }

  ngOnInit() {
  this.pokeDataSub = this.pokemon.selectedPokemon.subscribe(
    (data: any )=> {this.PokemonData = data
      
    this.pokemon.getPokemonId(data.id)
   }
  )

  this.pokeData2Sub = this.pokemon.selectedData.subscribe(
    (data) => {this.PokemonData2 = data}

  )


}



  ngOnDestroy(){
    this.pokeDataSub.unsubscribe();
    this.pokeData2Sub.unsubscribe()
  }
 
}



