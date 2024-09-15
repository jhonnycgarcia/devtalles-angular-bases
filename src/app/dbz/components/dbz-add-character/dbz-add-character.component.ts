import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './dbz-add-character.component.html',
  styleUrl: './dbz-add-character.component.css'
})
export class DbzAddCharacterComponent {

  public character: Character = {
    name: '',
    power: 0
  };

  public emitCharacter(): void {
    console.log(this.character);
  }
}
