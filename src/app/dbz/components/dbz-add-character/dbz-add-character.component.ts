import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './dbz-add-character.component.html',
  styleUrl: './dbz-add-character.component.css'
})
export class DbzAddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  public emitCharacter(): void {
    if(this.character.name.trim().length === 0) { return; }
    this.onNewCharacter.emit(this.character);
    this.character = { name: '', power: 0 };
  }
}
