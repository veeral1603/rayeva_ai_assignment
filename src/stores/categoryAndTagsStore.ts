import { categoryAndTagsResponse } from "@/types";
import { create } from "zustand";

interface CategoryAndTagsStore {
  aiData: categoryAndTagsResponse | null;
  setAiData: (data: categoryAndTagsResponse) => void;
  clearAiData: () => void;
}

export const useCategoryAndTagsStore = create<CategoryAndTagsStore>((set) => ({
  aiData: null,
  setAiData: (data) => set({ aiData: data }),
  clearAiData: () => set({ aiData: null }),
}));
