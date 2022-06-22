import { Editional } from "../Editional";
import { CharacterData } from "./CharacterData";
import { ScenarioData } from "./ScenarioData";
import { MonsterData } from "./MonsterData";
import { Condition } from "../Condition";
import { DeckData } from "./DeckData";

export class EditionData implements Editional {
  // from Editional
  edition: string;

  characters: CharacterData[];
  monsters: MonsterData[];
  decks: DeckData[];
  scenarios: ScenarioData[];
  conditions: Condition[] = [];
  label: any = {};
  url : string = "";

  constructor(edition: string, characters: CharacterData[],
    monsters: MonsterData[],
    decks: DeckData[],
    scenarios: ScenarioData[],
    conditions: Condition[] | undefined = undefined) {
    this.edition = edition;
    this.characters = characters;
    this.monsters = monsters;
    this.decks = decks;
    this.scenarios = scenarios;
    if (conditions) {
      this.conditions = conditions;
    }
  }

}