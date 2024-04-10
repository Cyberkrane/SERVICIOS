import { Component, Input } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { PadreService } from 'src/app/services/padre.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

  @Input() heroesList: Heroe[] = [];
  @Input() backColor: string = 'claro'

  constructor(private heroesService: PadreService){}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.heroesList = this.heroesService.getAllHeroes();
    console.log(this.heroesList);
  }

}
