import Archetypes from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetypes {
  private _energyType: EnergyType;
  private static _archetypeInstances = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType; 
  }

  static createdArchetypeInstances(): number {
    this._archetypeInstances += 1;
    return this._archetypeInstances;
  }
}

export default Warrior;