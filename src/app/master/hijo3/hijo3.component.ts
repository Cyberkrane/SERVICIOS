import { Component } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { PadreService } from 'src/app/services/padre.service';

@Component({
  selector: 'app-hijo3',
  templateUrl: './hijo3.component.html',
  styleUrls: ['./hijo3.component.scss']
})
export class Hijo3Component {

  heroesList: Heroe[] = [];
  backColor: string = 'cyberpunk'

  constructor(private heroesService: PadreService){}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.heroesList = this.heroesService.getAllHeroes();
    console.log(this.heroesList);
  }

}
