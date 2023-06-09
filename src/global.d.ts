export {};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

export interface Banner {
  imageUrl: string;
}

export interface Recommend {
  id: number;
  picUrl: string;
  playCount: number;
  name: string;
}
