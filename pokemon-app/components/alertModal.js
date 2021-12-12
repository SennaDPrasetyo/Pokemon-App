import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import styles from "../styles/Alert.module.css";

function AlertModal({ nickname, isOpen, setToggleRelease, setIsOpen }) {
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  const releasePokemon = () => {
    let myPokemonList = JSON.parse(localStorage.getItem("myPokemon"));

    myPokemonList = myPokemonList.filter((element) => {
      return element.nickname !== nickname;
    });

    localStorage.setItem("myPokemon", JSON.stringify(myPokemonList));
    setToggleRelease(new Date());
    setIsOpen(false);
  };

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent className={styles["alert-modal-content"]}>
            <AlertDialogBody className={styles["alert-modal-body"]}>
              Are you sure you want to release{" "}
              <span className={styles["span"]}>{nickname}</span>?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                className={styles["btn-release"]}
                onClick={releasePokemon}
                ml={3}
              >
                Release
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default AlertModal;
