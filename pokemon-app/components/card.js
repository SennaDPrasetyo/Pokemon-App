import styles from "../styles/Home.module.css";
import Link from "next/link";

const Card = ({ singlePokemon }) => {
  return (
    <Link href={`/${singlePokemon.name}`}>
      <div className={styles["card-content"]}>
        <div className={styles["poke-owned"]}>
          <h1 className={styles["total-owned"]}>0 owned</h1>
        </div>
        <img className={styles["poke-img"]} src={singlePokemon.image} />
        <h1 className={styles["poke-name"]}>{singlePokemon.name}</h1>
      </div>
    </Link>
  );
};

export default Card;
