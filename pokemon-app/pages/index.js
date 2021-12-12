import { GET_POKEMONS } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Card from "../components/card";
import Navbar from "../components/navbar";

const HomePage = () => {
  const [pokemon, setPokemon] = useState(null);
  let gqlVariables = {
    limit: 20,
    offset: 1,
  };
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  useEffect(() => {
    if (data) {
      setPokemon(data.pokemons.results);
    }
  }, [data]);

  return (
    <div className={styles["homepage-container"]}>
      <Navbar currentPage={"homepage"} />
      <div className={styles["card-wrapper"]}>
        <div className={styles["card-container"]}>
          {pokemon &&
            pokemon.map((each, index) => (
              <Card key={index} singlePokemon={each} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
