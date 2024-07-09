import CardSlider from "@/components/CardSlider/CardSlider";
import Layout from "@/components/Layout/Layout";
import { useEffect, useState } from "react";

const Adoption = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchAdoptionAnimals = () => {
      fetch("http://localhost:3001/adoption")
        .then((res) => res.json())
        .then((data) => setState(data))
        .catch((err) => {
          console.log("ERROR", err);
        });
    };

    fetchAdoptionAnimals();
  }, []);

  return (
    <Layout title="Adoção">
      {state.length > 0 && <CardSlider items={state} />}
    </Layout>
  );
};

export default Adoption;
