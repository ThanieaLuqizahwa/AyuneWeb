import React from "react";
import ProdukList from "./components/ProdukList";
import Header from "./components/HeaderAfterLogin";
import Footer from "./components/Footer";

const Produk = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <Header />
      <ProdukList />
      <div className="footer-separator"></div>
      <Footer />
    </div>
  );
};

export default Produk;
