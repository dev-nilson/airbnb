export interface City {
  img: string;
  location: string;
  distance: string;
}

export interface Place {
  img: string;
  title: string;
}

export interface Result {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
}

export interface Dimension {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface View {
  width?: string;
  height?: string;
  bearing?: number;
  latitude: number;
  longitude: number;
  padding?: Dimension;
  pitch?: number;
  zoom: number;
}
