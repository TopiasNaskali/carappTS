export interface CarResponse {
  brand: string;
  model: string;
  color: string;
  fuel: string;
  year: number;
  price: number;
  _links: {
    self: {
      href: string;
    };
    car: {
      href: string;
    };
  };
}

export interface Car {
  brand: string;
  model: string;
  color: string;
  fuel: string;
  year: number;
  price: number;
}

export interface CarEntry {
  car: Car;
  url: string;
}
