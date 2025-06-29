import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type Product from "../models/Product";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { useProductContext } from "../contexts/ProductContext";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { CirclePrimary } from "./elements/circle";
import Icon from "./elements/icon";

interface ProductSwiperProps {
    products: Product[];
}

const ProductSwiper: React.FC<ProductSwiperProps> = ({ products }) => {
    const swiperRef = useRef<SwiperCore | null>(null);

    const {
        selectedProduct,
        selectProduct,
        imageIndexMap,
        resetImageIndex,
    } = useProductContext();

    const getImageForProduct = (product: Product) => {
        const imageIndex = imageIndexMap[product.id] ?? 0;
        return product.images[imageIndex];
    };

    const selectedIndex = products.findIndex(
        (p) => p.id === selectedProduct?.id
    );

    useEffect(() => {
        if (swiperRef.current && selectedIndex >= 0) {
            swiperRef.current.slideTo(selectedIndex);
        }
    }, [selectedIndex]);

    const goToNext = () => {
        swiperRef.current?.slideNext();
    };

    const goToPrev = () => {
        swiperRef.current?.slidePrev();
    };

    return (
        <div style={{ position: "relative", width: "100%" }}>
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: 10,
                    transform: "translateY(-50%)",
                    zIndex: 10,
                }}
            >
                <CirclePrimary onClick={goToPrev}>
                    <Icon>
                        <FaArrowLeft />
                    </Icon>
                </CirclePrimary>
            </div>

            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    right: 10,
                    transform: "translateY(-50%)",
                    zIndex: 10,
                }}
            >
                <CirclePrimary onClick={goToNext}>
                    <Icon>
                        <FaArrowRight />
                    </Icon>
                </CirclePrimary>
            </div>

         
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                initialSlide={selectedIndex >= 0 ? selectedIndex : 0}
                onSlideChange={(swiper) => {
                    const newProduct = products[swiper.activeIndex];
                    selectProduct(newProduct);
                    resetImageIndex(newProduct.id);
                }}
                style={{ width: "100%" }}
            >
                {products.map((product) => {
                    const image = getImageForProduct(product);
                    return (
                        <SwiperSlide key={product.id}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                    padding: "20px",
                                    boxSizing: "border-box",
                                }}
                            >
                                {image ? (
                                    <img
                                        src={image.path}
                                        alt={product.name}
                                        style={{
                                            maxWidth: "100%",
                                            maxHeight: "300px",
                                            objectFit: "contain",
                                        }}
                                    />
                                ) : (
                                    <div
                                        style={{
                                            height: "300px",
                                            background: "#eee",
                                            width: "100%",
                                        }}
                                    >
                                        No image
                                    </div>
                                )}
                                <p style={{ marginTop: "12px", textAlign: "center" }}>
                                    {product.name}
                                </p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default ProductSwiper;
