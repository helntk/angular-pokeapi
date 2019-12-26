import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable()

export class PokemonService{

    genStatus = new Subject<string>();
    selectedPokemon = new Subject<{}>();
    selectedData = new Subject<{}>()
    species  = new Subject <{name:string, url: string}[]>()
    activated = '1'
    data : {}
    selectedId: number
    generations: [{}]
    constructor(private http: HttpClient){
       
    }

    getGen(data,gen){
      return  this.http.get(data).subscribe((data: any) => {
        this.species.next(data.pokemon_species)
        this.genStatus.next(gen)
        
        this.getPokemonId(1)
      });
    }

    getPokemonId(id){
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe((data: any)=>{
        this.selectedData.next(data)
        console.log(this.selectedId)
      })
    }
    getPokemon(url){
      this.http.get(url).subscribe((data: any)=>{
        this.selectedPokemon.next(data)
      })
    }
}