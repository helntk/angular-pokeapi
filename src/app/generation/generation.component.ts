import { Component, OnInit, OnDestroy,  } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.scss']
})
export class GenerationComponent implements OnInit, OnDestroy {
 
  constructor(private pokemon: PokemonService) { }
   genSub: Subscription
   activated: string = '1';
  ngOnInit() {
   this.pokemon.getGen(`https://pokeapi.co/api/v2/generation/${this.activated}`,this.activated)
   this.genSub = this.pokemon.genStatus.subscribe(data =>{ 
     this.activated = data
    }    
  
  )


     
  }
  
  ngOnDestroy(){
    this.genSub.unsubscribe()
  }
  
  activar(value){
    if(value.innerText === 'GERAÇÃO 1'){
      this.pokemon.activated = '1'
      this.pokemon.getPokemonId(this.pokemon.selectedId)


    }
    else if(value.innerText === 'GERAÇÃO 2'){
      this.pokemon.activated = '2'
      this.pokemon.getPokemonId(this.pokemon.selectedId)

    }
    this.pokemon.getGen(`https://pokeapi.co/api/v2/generation/${this.activated}`,this.pokemon.activated)



  }
  



}
