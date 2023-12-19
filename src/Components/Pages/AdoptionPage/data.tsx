import pic1 from './pics/cassy1.jpeg';
import pic2 from './pics/cassy2.jpeg';
import pic3 from './pics/luna1.jpeg';
import pic4 from './pics/luna2.jpeg';

export interface AdoptionCat {
    name: string;
    age: string;
    description: string;
    images: {original: string}[]
}

export const AdoptionCatsData: AdoptionCat[] = [
    {name: "Cassy", age: "5 years old", description: "Female Tortie. Like to nap", images: [{original: pic1}, {original: pic2}]},
    {name: 'Luna', age: "5 years old", description: "White Cat. Likes Tuna", images: [{original: pic3}, {original: pic4}]}
]