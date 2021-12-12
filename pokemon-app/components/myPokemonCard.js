import styles from "../styles/MyPokemon.module.css";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import AlertModal from "./alertModal";
import { useState } from "react";

const MyPokemonCard = ({ singlePokemon, setToggleRelease }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles["card-content"]}>
      <Link href={`/${singlePokemon.singlePokemon.name}`}>
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <img
            className={styles["poke-img"]}
            src={singlePokemon.singlePokemon.sprites.front_default}
          />
          <span className={styles["myPokemon-span"]}>
            <h1 className={styles["myPokemon-span-h1"]}>
              {singlePokemon.nickname}
            </h1>
          </span>
          <h1 className={styles["poke-name"]}>
            {singlePokemon.singlePokemon.name}
          </h1>
        </div>
      </Link>
      <AlertModal
        nickname={singlePokemon.nickname}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setToggleRelease={setToggleRelease}
      />
      <Button onClick={() => setIsOpen(true)} className={styles["btn-release"]}>
        Release
      </Button>
    </div>
  );
};

export default MyPokemonCard;
