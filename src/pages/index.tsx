import { useEffect, useState } from "react";

import ItemsSlider from "@/components/ItemsSlider/ItemsSlider";
import CategoryBricks from "@/components/CategoryBricks/CategoryBricks";
import ItemList from "@/components/ItemList/ItemList";
import Layout from "@/components/Layout/Layout";
import Search from "@/components/Search/Search";

const Home = () => {
  const [state, setState] = useState({
    stores: [],
    categories: [],
    lastServices: [],
  });
  const [filteredState, setFilteredState] = useState(state);

  useEffect(() => {
    const fetchCategories = () => {
      fetch("http://localhost:3001/categories")
        .then((res) => res.json())
        .then((data) =>
          setState((currState) => ({ ...currState, categories: data }))
        )
        .catch((err) => {
          console.log("ERROR", err);
        });
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchServices = () => {
      fetch("http://localhost:3001/lastServices")
        .then((res) => res.json())
        .then((data) =>
          setState((currState) => ({ ...currState, lastServices: data }))
        )
        .catch((err) => {
          console.log("ERROR", err);
        });
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const fetchStores = () => {
      fetch("http://localhost:3001/stores")
        .then((res) => res.json())
        .then((data) =>
          setState((currState) => ({ ...currState, stores: data }))
        )
        .catch((err) => {
          console.log("ERROR", err);
        });
    };

    fetchStores();
  }, []);

  const filter = (event) => {
    const value = event.target.value.trim().toLowerCase();

    const newValue = {
      stores: state.stores.filter((item) =>
        item.name.toLowerCase().includes(value)
      ),
      categories: state.categories.filter((item) =>
        item.name.toLowerCase().includes(value)
      ),
      lastServices: state.lastServices.filter((item) =>
        item.name.toLowerCase().includes(value)
      ),
    };

    setFilteredState(newValue);
  };

  useEffect(() => {
    setFilteredState(state);
  }, [state]);

  return (
    <Layout title="PetHub">
      <Search onChange={filter} />
      <CategoryBricks
        categories={filteredState.categories}
        title="Categorias"
      />
      <ItemsSlider
        items={filteredState.lastServices}
        title="Últimos Serviços"
      />
      <ItemList title="Lojas" items={filteredState.stores} />
    </Layout>
  );
};

export default Home;
