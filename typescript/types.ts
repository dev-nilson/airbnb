export type SmallCardProps = {
  image: string;
  location: string;
  distance: string;
};

export type MediumCardProps = {
  image: string;
  title: string;
};

export type LargeCardProps = {
  image: string;
  title: string;
  description: string;
  buttonText: string;
};

export type Result = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
};

export type MapProps = {
  searchResults: Result[];
};
