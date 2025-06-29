import { createContext, useContext, useState, useEffect } from "react";
import type Product from "../models/Product";
import type { ReactNode } from "react";
import productData from "../data/products.json"; 
import type ApiResponse from "../models/ApiRespose";

interface ProductContextType {
    products: Product[];
    selectedProduct: Product | null;
    setProducts: (products: Product[]) => void;
    selectProduct: (product: Product) => void;
    imageIndexMap: { [productId: number]: number };
    setImageIndexForProduct: (productId: number, index: number) => void;
    resetImageIndex: (productId: number) => void;
    changingCategoryManually?: boolean;
    setChangingCategoryManually?: (changing: boolean) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const selectProduct = (product: Product) => {
        setSelectedProduct(product);
    };

    const [changingCategoryManually, setChangingCategoryManually] = useState(false);

    useEffect(() => {
        const data: ApiResponse = productData as ApiResponse;
        setProducts(data.products);
        if (data.products.length > 0) {
            setSelectedProduct(data.products[0]);
        }
    }, []);

    const [imageIndexMap, setImageIndexMap] = useState<{ [productId: number]: number }>({});

    const setImageIndexForProduct = (productId: number, index: number) => {
        setImageIndexMap((prev) => ({
            ...prev,
            [productId]: index,
        }));
    };

    const resetImageIndex = (productId: number) => {
        setImageIndexMap((prev) => ({
            ...prev,
            [productId]: 0,
        }));
    };


    return (
        <ProductContext.Provider
            value={{
                products,
                selectedProduct,
                setProducts,
                selectProduct,
                imageIndexMap,
                setImageIndexForProduct,
                resetImageIndex,
                changingCategoryManually,
                setChangingCategoryManually
            }}
        
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("Tem que ser usado dentro de um ProductProvider");
    }
    return context;
};
