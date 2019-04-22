export interface Wetter {
  current: {
    temp_c: number;
    condition: {
      text: string,
    }
  };
}
