export interface Bike {

    id: string;
    name: string;
    productCode: string;
    releaseDate: string;
    description: string;
    sex: string;
    inStock: boolean;
    price: number;
    starRating: number;
    imageUrl: string;
}

export interface BikeFromLocalStorage {
    id?: string;
    name?: string;
    description?: string;
    price?: number;
    imageUrl?: string;
}

