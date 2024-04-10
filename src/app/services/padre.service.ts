import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class PadreService {

  
    heroes_avengers: Heroe[] = [
      {
        "nombre": "Iron Man",
        "img":"../assets/imgs/ironman.jpg",
        "alter_ego": "Tony Stark",
        "poder_principal": "Tecnología avanzada y armadura Iron Man",
        "edad": 50,
        "origen": "Estados Unidos"
      },
      {
        "nombre": "Captain America",
        "img":"../assets/imgs/captainAmerica.jpg",
        "alter_ego": "Steve Rogers",
        "poder_principal": "Super fuerza, agilidad y resistencia",
        "edad": 100,
        "origen": "Estados Unidos"
      },
      {
        "nombre": "Thor",
        "img":"../assets/imgs/thor.jpg",
        "alter_ego": "Thor Odinson",
        "poder_principal": "Control sobre el rayo y fuerza sobrehumana",
        "edad": 1500,
        "origen": "Asgard"
      },
      {
        "nombre": "Hulk",
        "img":"../assets/imgs/hulk.jpg",
        "alter_ego": "Bruce Banner",
        "poder_principal": "Fuerza sobrehumana y resistencia regenerativa",
        "edad": 40,
        "origen": "Estados Unidos"
      },
      {
        "nombre": "Black Widow",
        "img":"../assets/imgs/blackWidow.jpg",
        "alter_ego": "Natasha Romanoff",
        "poder_principal": "Maestría en combate cuerpo a cuerpo y habilidades de espionaje",
        "edad": 35,
        "origen": "Rusia"
      },
      {
        "nombre": "Hawkeye",
        "img":"../assets/imgs/hawkeye.jpg",
        "alter_ego": "Clint Barton",
        "poder_principal": "Experto arquero y habilidades de combate",
        "edad": 45,
        "origen": "Estados Unidos"
      }
    ]
  
  

  constructor() { }

  getAllHeroes(){
    return this.heroes_avengers;
  }


}
