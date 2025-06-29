import type ProductImage from "./ProductImage";
import type Sku from "./Sku";


export default interface Product {
    id: number;
    name: string;
    hexCode: string | null;
    skus: Sku[];
    reference: string;
    type: string;
    gender: string; 
    promptDelivery: boolean;
    description: string | null;
    categories: string;
    subcategories: string | null;
    images: ProductImage[];
}

