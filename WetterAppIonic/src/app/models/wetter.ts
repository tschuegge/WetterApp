export interface Wetter {
  location: {
    name: string
  };
  current: {
    temperature: number;
    weather_descriptions: string[]
    weather_icons: string[]
  };
}
