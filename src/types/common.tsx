export type Animal = "bird" | "cat" | "dog" | "rabbit" | "reptile"

export interface Pet {
    id: string;
    name: string;
    animal: Animal;
    breed: string;
    description: string;
    location: string;
    city: string;
    state: string;
    images: string[];
}

export interface PetApiResponse {
    numberOfResults: number;
    startIndex: number;
    endIndex: number;
    hasNext: boolean;
    pets: Pet[]
}

export interface SearchParamsType {
    location: string;
    animal: Animal;
    breed: string;
}

export interface BreedsListApiResponse {
    animal: Animal;
    breeds : string[]
}