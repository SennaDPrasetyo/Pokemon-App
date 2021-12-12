import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const Card = ({ singlePokemon }) => {
  const [currentOwned, setCurrentOwned] = useState(0);

  useEffect(() => {
    const myPokemonList = JSON.parse(localStorage.getItem("myPokemon"));
    let counter = 0;

    if (myPokemonList) {
      myPokemonList.find((element) => {
        if (element.singlePokemon.name.includes(singlePokemon.name)) {
          counter++;
        }
      });
    }
    setCurrentOwned(counter);
  }, []);

  return (
    <Link href={`/${singlePokemon.name}`}>
      <div className={styles["card-content"]}>
        <div className={styles["poke-owned"]}>
          <h1 className={styles["total-owned"]}>{currentOwned} owned</h1>
        </div>
        <img className={styles["poke-img"]} src={singlePokemon.image} />
        <h1 className={styles["poke-name"]}>{singlePokemon.name}</h1>
      </div>
    </Link>
  );
};

export default Card;
