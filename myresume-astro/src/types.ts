// src/types.ts
export type Lang = "fr" | "en";

export type HeaderData = {
  [key in Lang]: {
    poste: string;
    specialisation: string;
  };
};
