import { useEffect, useState } from "react";

import ItemsSlider from "@/components/ItemsSlider/ItemsSlider";
import ItemList from "@/components/ItemList/ItemList";
import Layout from "@/components/Layout/Layout";
import Search from "@/components/Search/Search";

const Blog = () => {
  const [state, setState] = useState({ posts: [], categories: [] });
  const [filteredState, setFilteredState] = useState(state);

  useEffect(() => {
    const fetchBlogData = () => {
      fetch("http://localhost:3001/blog")
        .then((res) => res.json())
        .then((data) => setState({ ...data }))
        .catch((err) => {
          console.log("ERROR", err);
        })
    };

    fetchBlogData();
  }, []);

  useEffect(() => {
    setFilteredState(state);
  }, [state]);

  const filter = (event) => {
    const value = event.target.value.trim().toLowerCase();

    const newValue = {
      posts: state.posts.filter((item) =>
        item.name.toLowerCase().includes(value)
      ),
      categories: state.categories.filter((item) =>
        item.name.toLowerCase().includes(value)
      ),
    };

    setFilteredState(newValue);
  };

  return (
    <Layout title="Blog">
      <Search onChange={filter} />
      <ItemsSlider items={filteredState.categories} title="Categorias" />
      <ItemList
        title="Últimos Posts"
        items={filteredState.posts}
        imgClassName="rounded-xl w-28 h-24"
      />
    </Layout>
  );
};

export default Blog;
