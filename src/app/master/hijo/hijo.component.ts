import { Component } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { PadreService } from 'src/app/services/padre.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent {

  backColor: string = 'claro';

  heroesList: Heroe[] = [];

  constructor(private heroesService: PadreService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesList = this.heroesService.getAllHeroes();
    console.log(this.heroesList);
  }

}
