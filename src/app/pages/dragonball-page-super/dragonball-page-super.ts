import { Component, computed, inject, signal } from '@angular/core';
import { NgClass } from "@angular/common";
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-app/character-app";
import { DragonballService } from '../../services/dragonball.service';


@Component({
  selector: 'app-dragonball-page-super',
  imports: [CharacterList, CharacterAdd],
  templateUrl: './dragonball-page-super.html',
  styleUrl: './dragonball-page.css',
})
export class DragonballPageSuper {
  
  dragonballService = inject(DragonballService);

  
  
}
