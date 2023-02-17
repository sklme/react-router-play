import { atom } from 'jotai';

export const count = atom(0);
export const doubleCount = atom((get) => {
  return get(count) * 2;
});
