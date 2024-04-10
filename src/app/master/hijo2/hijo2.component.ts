import { Component } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { PadreService } from 'src/app/services/padre.service';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.scss']
})
export class Hijo2Component {

  heroesList: Heroe[] = [];
  backColor: string = 'oscuro'

  constructor(private heroesService: PadreService){}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.heroesList = this.heroesService.getAllHeroes();
    console.log(this.heroesList);
  }


}
