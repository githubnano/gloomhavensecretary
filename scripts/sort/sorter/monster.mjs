import { sortMonsterStat } from "./monster-stat.mjs";
import { sortObjectKeys } from './sort-helper.mjs';

export const sortMonster = function (monster) {

  if (monster.baseStat) {
    monster.baseStat = sortMonsterStat(monster.baseStat);
  }

  if (monster.stats) {
    monster.stats = monster.stats.map((monsterStat) => sortMonsterStat(monsterStat)).sort((a, b) => {

      if (a.type && !b.type) {
        return 1;
      } else if (!a.type && b.type) {
        return -1;
      }

      if (a.type == 'normal' && b.type != a.type) {
        return -1;
      }

      return a.level - b.level;

    });
  }

  return sortObjectKeys(monster, 'name', 'thumbnail', 'edition', 'deck', 'boss', 'flying', 'immortal', 'catching', 'hidden', 'count', 'standeeCount', 'standeeShare', 'standeeShareEdition', 'baseStat', 'stats');
}