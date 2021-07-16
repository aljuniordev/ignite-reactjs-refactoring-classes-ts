export interface IFood {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

export type IFoodEdit = Omit<IFood, "id" | "available">;
