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

    quantities: { [productId: number]: number };
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const LOCAL_STORAGE_QUANTITIES_KEY = "product_quantities";

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [imageIndexMap, setImageIndexMap] = useState<{ [productId: number]: number }>({});
    const [changingCategoryManually, setChangingCategoryManually] = useState(false);

    const [quantities, setQuantities] = useState<{ [productId: number]: number }>(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem(LOCAL_STORAGE_QUANTITIES_KEY);
            if (stored) {
                try {
                    return JSON.parse(stored);
                } catch {
                    return {};
                }
            }
        }
        return {};
    });

    useEffect(() => {
        const data: ApiResponse = productData as ApiResponse;
        setProducts(data.products);
        if (data.products.length > 0) {
            setSelectedProduct(data.products[0]);
        }

        if (Object.keys(quantities).length === 0) {
            const initialQuantities: { [productId: number]: number } = {};
            data.products.forEach((product) => {
                initialQuantities[product.id] = 0;
            });
            setQuantities(initialQuantities);
        }
    }, []);



    const selectProduct = (product: Product) => {
        setSelectedProduct(product);
    };

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

    const increaseQuantity = (productId: number) => {
        setQuantities((prev) => ({
            ...prev,
            [productId]: (prev[productId] || 0) + 1,
        }));
    };

    const decreaseQuantity = (productId: number) => {
        setQuantities((prev) => ({
            ...prev,
            [productId]: Math.max((prev[productId] || 0) - 1, 0),
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
                setChangingCategoryManually,
                quantities,
                increaseQuantity,
                decreaseQuantity,
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
