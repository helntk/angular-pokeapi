import { Component, OnInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab-info',
  templateUrl: './tab-info.component.html',
  styleUrls: ['./tab-info.component.scss']
})
export class TabInfoComponent implements OnInit, OnDestroy {
  pokemons: {name: string, url: string}[] ;
  speciesSub: Subscription
  activated: number = 0
  constructor(private pokemon: PokemonService) { }
  next = this.activated +1;
  ngOnInit(){ 
  this.speciesSub = this.pokemon.species.subscribe(data =>{ 
      let dat7 : {name: string, url: string}[] = []
       for(let i = 0; i < 7; i ++){
        dat7.push(data[i])          
      }
      this.pokemons = dat7

      this.pokemon.getPokemon(this.pokemons[this.activated].url)

      console.log(this.pokemon.species)

      
     }) 




  }
  ngOnDestroy(){
   this.speciesSub.unsubscribe();
  }
   selectId(id){
    this.activated = id
    this.next = id + 1;
    this.pokemon.getPokemon(this.pokemons[id].url)
   

   }


 


}
