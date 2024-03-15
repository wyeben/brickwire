import { create } from 'zustand';

export const NavStore = create((set) => ({
  counter: 0,
  setCounter: () => set((state) => ({ counter: state.counter + 1 })),
}));
