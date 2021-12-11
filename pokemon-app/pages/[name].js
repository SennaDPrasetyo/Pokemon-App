import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import Navbar from "../components/navbar";
import styles from "../styles/Detail.module.css";
import { GET_SINGLE_POKEMON } from "../graphql/queries";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useDisclosure } from "@chakra-ui/react";
import SuccessModal from "../components/successModal";
import FailModal from "../components/failModal";

const Button = styled.button`
  background: #015352;
  border: 1px solid #015352;
  width: 160px;
  align-self: center;
  margin-bottom: 3rem;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  padding: 12px 16px 12px 14px;
  border-radius: 6px;
`;

const typeColor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#ff0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#efb549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190ff",
};

const DetailPage = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { name } = router.query;
  const { loading, error, data } = useQuery(GET_SINGLE_POKEMON, {
    variables: {
      name,
    },
  });
  const [singlePokemon, setSinglePokemon] = useState([]);
  const [successModal, setSuccessModal] = useState(false);
  const [failModal, setFailModal] = useState(false);

  useEffect(() => {
    if (data) {
      setSinglePokemon(data.pokemon);
    }
  }, [data]);

  useEffect(() => {
    if (singlePokemon.types) {
      const themeColor = typeColor[singlePokemon.types[0].type.name];
      document.querySelectorAll(".pokemon-type").forEach((each) => {
        each.style.backgroundColor = themeColor;
      });
    }
  }, [singlePokemon]);

  const addPokemon = () => {
    const chance = Math.random() < 0.5;

    setTimeout(() => {
      if (chance) {
        setSuccessModal(true);
      } else {
        setFailModal(true);
      }
    }, 1000);
  };

  return (
    <>
      {singlePokemon.sprites && (
        <div className={styles["detail-page-container"]}>
          <Navbar currentPage={"detail"} />
          <img
            className={styles["detail-page-pokemon"]}
            src={singlePokemon.sprites.front_default}
            alt="pokemon"
          />
          <Button onClick={addPokemon} className={styles["btn-catch"]}>
            Catch Me!
          </Button>
          <SuccessModal
            pokemonName={singlePokemon.name}
            isOpen={successModal}
            onClose={() => setSuccessModal(false)}
            singlePokemon={singlePokemon}
            setSuccessModal={setSuccessModal}
          />
          <FailModal
            isOpen={failModal}
            onClose={() => setFailModal(false)}
            setFailModal={setFailModal}
          />
          ;
          <div className={styles["detail-page-type"]}>
            {singlePokemon.types &&
              singlePokemon.types.map((each) => (
                <span className="pokemon-type">
                  <h1 className={styles["detail-page-type-h1"]}>
                    {each.type.name}
                  </h1>
                </span>
              ))}
          </div>
          <div className={styles["detail-page-moves"]}>
            {singlePokemon.moves &&
              singlePokemon.moves.map((each) => (
                <span className={styles["detail-page-moves-span"]}>
                  <h1 className={styles["detail-page-moves-h1"]}>
                    {each.move.name}
                  </h1>
                </span>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPage;
