export interface IExperience {
  title: string;
  description: string;
}

export interface ICardExperience {
  title: string;
  data: { title: string; description: string }[];
}
