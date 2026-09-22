export interface Character {
  id: string;
  name: string;
  title: string;
  quote: string;
  image: string;
}

export const characters: Character[] = [
  {
    id: "elysia",
    name: "Elysia Morven",
    title: "The Third Morven",
    quote: "The future isn't inherited. It's chosen.",
    image: "/characters/elysia.webp"
  },

  {
    id: "celeste",
    name: "Celeste",
    title: "The Broken Saint",
    quote: "Even light can be twisted.",
    image: "/characters/celeste.webp"
  },

  {
    id: "lilith",
    name: "Lilith Vael",
    title: "Third Daughter of House Vael",
    quote: "If fate wants a fight... I'll answer.",
    image: "/characters/lilith.webp"
  },

  {
    id: "aethra",
    name: "Aethra",
    title: "God of Life",
    quote: "Order is the only path to salvation.",
    image: "/characters/aethra.webp"
  }
];