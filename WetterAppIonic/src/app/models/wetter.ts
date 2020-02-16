export interface Wetter {
  name: string;
  main: {
    temp: number;
  };
  weather: [{
    description: string;
    icon: string;
  }];
}
