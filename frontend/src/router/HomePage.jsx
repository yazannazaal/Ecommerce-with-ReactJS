import React from "react";
import FloatActionBtn from "../components/floatActionBtn/FloatActionBtn";
import AdBar from "../components/main/AdBar";
import Main from "../components/main/Main";
import ElectronicsProduct from "../components/products/ElectronicsProduct";
import FashionProducts from "../components/products/FashionProducts";

export default function HomePage() {
  return (
    <div>
      <div style={{ backgroundColor: "#F6F6F6" }}>
        <Main />
        <FashionProducts />
        <AdBar />
        <ElectronicsProduct />
      </div>
      <FloatActionBtn />
    </div>
  );
}
