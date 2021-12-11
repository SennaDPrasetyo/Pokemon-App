import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import styles from "../styles/Modal.module.css";

const SuccessModal = ({
  isOpen,
  pokemonName,
  setSuccessModal,
  singlePokemon,
}) => {
  const [nickname, setNickname] = useState("");

  const addToMyPokemon = () => {
    let existingPokemon = JSON.parse(localStorage.getItem("myPokemon")) || [];
    const caughtPokemon = {
      nickname,
      singlePokemon,
    };

    existingPokemon = [...existingPokemon, caughtPokemon];
    localStorage.setItem("myPokemon", JSON.stringify(existingPokemon));
    setSuccessModal(false);
  };

  return (
    <>
      <Modal size="xs" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent className={styles["modal-content"]}>
          <ModalHeader className={styles["modal-header"]}>
            You just caught a {pokemonName}!
          </ModalHeader>
          <ModalBody className={styles["modal-body"]}>
            <h1 className={styles["modal-subtitle-success"]}>
              give your pokemon a nickname
            </h1>
            <Input
              onChange={(event) => setNickname(event.target.value)}
              isRequired={true}
              className={styles["modal-input"]}
            />
            <Button
              onClick={() => addToMyPokemon()}
              className={styles["modal-btn"]}
            >
              submit
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SuccessModal;
