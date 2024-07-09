import { useEffect, useState } from "react";

import ItemCarousel from "@/components/ItemCarousel/ItemCarousel";
import ItemGrid from "@/components/ItemGrid/ItemGrid";
import Layout from "@/components/Layout/Layout";
import Search from "@/components/Search/Search";

const Shop = () => {
  const [state, setState] = useState({ products: [], mainProducts: [] });
  const [filteredState, setFilteredState] = useState(state);

  useEffect(() => {
    const fetchProducts = () => {
      fetch("http://localhost:3001/shop")
        .then((res) => res.json())
        .then((data) => setState(data))
        .catch((err) => {
          console.log("ERROR", err);
        });
    };

    fetchProducts();
  }, []);

  const filter = (event) => {
    const value = event.target.value.trim().toLowerCase();

    const newValue = {
      products: state.products.filter((item) =>
        item.name.toLowerCase().includes(value)
      ),
      mainProducts: state.mainProducts.filter((item) =>
        item.name.toLowerCase().includes(value)
      ),
    };

    setFilteredState(newValue);
  };

  useEffect(() => {
    setFilteredState(state);
  }, [state]);

  return (
    <Layout title="Shop">
      <Search onChange={filter} />
      <ItemCarousel
        items={filteredState.mainProducts}
        title="Produtos em destaque"
      />
      <ItemGrid items={filteredState.products} title="Produtos mais vendidos" />
    </Layout>
  );
};

export default Shop;
