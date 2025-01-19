import { create } from "zustand";
import { createSelectors } from "./create-selectors";

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export const useStoreSelectors = createSelectors(useStore);
export default useStore;
