export interface Wetter {
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}
