import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(
    private dbzSrv: DbzService
  ) { }

  get characters(): Character[] {
    return [...this.dbzSrv.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzSrv.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzSrv.addCharacter(character);
  }

}
