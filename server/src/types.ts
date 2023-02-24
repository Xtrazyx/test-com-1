export type Player = {
    id: number;
    firstname: string;
    lastname: string;
    shortname: string;
    sex: string;
    country: string;
    picture: string;
    data: {
      rank: number;
      points: number;
      weight: number;
      height: number;
      age: number;
      last: number[];
    }
}

export type PlayerList = Player[];
