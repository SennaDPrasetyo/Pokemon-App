import { GET_POKEMONS } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Card from "../components/card";
import Navbar from "../components/navbar";
import { Button } from "@chakra-ui/react";

const HomePage = () => {
  let gqlVariables = {
    limit: 10,
    offset: 1,
  };
  const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });
  const [pokemon, setPokemon] = useState(null);
  const [isPrevClickable, setIsPrevClickable] = useState(false);
  const [isNextClickable, setIsNextClickable] = useState(true);

  useEffect(() => {
    if (data) {
      setPokemon(data.pokemons.results);
    }
  }, [data, gqlVariables.offset]);

  const nextPage = () => {
    gqlVariables.offset++;
    fetchMore(gqlVariables);
    console.log(gqlVariables.offset, "ini offset");
  };

  const prevPage = () => {
    if (gqlVariables.offset === 1) {
      gqlVariables.offset = 1;
    } else {
      setIsPrevClickable(true);
      gqlVariables.offset--;
      fetchMore(gqlVariables);
    }
  };

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
      <div className={styles["pagination"]}>
        <Button
          onClick={prevPage}
          disabled={isPrevClickable ? false : true}
          className={styles["prev-btn"]}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Button>
        <Button
          onClick={nextPage}
          disabled={isNextClickable ? false : true}
          className={styles["next-btn"]}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
