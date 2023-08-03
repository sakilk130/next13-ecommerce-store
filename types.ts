export interface Billboard {
  id: string;
  label: string;
  imageUri: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}
