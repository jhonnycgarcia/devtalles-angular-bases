import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrl: './dbz-list.component.css',
})
export class DbzListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) { return; }
    this.onDelete.emit(id);
  }

}
