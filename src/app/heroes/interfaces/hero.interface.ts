export interface Hero {
  id:               string;
  superhero:        string;
  publisher:        Publisher;
  alter_ego:        string;
  first_appearance: string;
  characters:       string;
  place_of_birth:   string;
  base_of_operation:string;
  occupation:       string;
  alt_img?:         string;
  icon?:            string;
  industry?:        string;
}

export enum Publisher {
  DCComics = "DC Comics",
  MarvelComics = "Marvel Comics",
}
