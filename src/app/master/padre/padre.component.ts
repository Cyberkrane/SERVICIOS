import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { PadreService } from 'src/app/services/padre.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent implements OnInit {

  heroesList: Heroe[] = [];
  backColor: string = 'default';

  constructor(private heroesService: PadreService){}


  ngOnInit(): void {
    // this.getHeroes();
  }

  // getHeroes(){
  //   this.heroesList = this.heroesService.getAllHeroes();
  //   console.log(this.heroesList);
  // }

}
