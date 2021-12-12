import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import MyPokemonCard from "../components/myPokemonCard";
import styles from "../styles/MyPokemon.module.css";

const MyPokemon = () => {
  const [myPokemonList, setMyPokemonList] = useState([]);
  const [toggleRelease, setToggleRelease] = useState(null);

  useEffect(() => {
    const currentPokemon = JSON.parse(localStorage.getItem("myPokemon"));

    if (currentPokemon) {
      setMyPokemonList(currentPokemon);
    }
  }, [toggleRelease]);

  return (
    <>
      <div className={styles["myPokemon-container"]}>
        <Navbar currentPage={"myPokemon"} />
        <div className={styles["card-wrapper"]}>
          <div className={styles["card-container"]}>
            {myPokemonList &&
              myPokemonList.map((each, index) => (
                <MyPokemonCard
                  key={index}
                  singlePokemon={each}
                  setToggleRelease={setToggleRelease}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPokemon;
