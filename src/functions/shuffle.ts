interface IShuffleObject {
  id: string;
  value: number;
  isShown: boolean;
  activated: boolean;
}

export function shuffle(array: Array<IShuffleObject>): Array<IShuffleObject> {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}