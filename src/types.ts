export type Poke = {
  name: string;
  weight: number;
  sprites: {
    front_default: string;
  };
  height: number;
  types: Array<{
    slots: string;
    type: {
      name: string;
      url: string;
    };
  }>;
};

export type Pokemon = {
  count: number;
  next: string;
  previous: null;
  results: Array<{
    name: string;
    url: string;
  }>;
};
