import { atom } from 'jotai';

// atom and derived atom
export const count = atom(0);
export const doubleCount = atom((get) => {
  return get(count) * 2;
});

// writable derived atom
const count2 = atom(0);
export const writableCount = atom(
  (get) => get(count2),
  (get, set) => {
    set(count2, get(count2) + 1);
  }
);

// Write only atoms
export const onlyReadCount = atom(0);
export const incrementOnlyRead = atom(null, (get, set) =>
  set(onlyReadCount, get(onlyReadCount) + 1)
);
export const incrementByOnlyRead = atom(null, (get, set, by: number) =>
  set(onlyReadCount, get(onlyReadCount) + by)
);
