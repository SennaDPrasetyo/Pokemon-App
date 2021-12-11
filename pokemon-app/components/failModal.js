import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  Button,
} from "@chakra-ui/react";
import styles from "../styles/Modal.module.css";

const FailModal = ({ isOpen, onClose, setFailModal }) => {
  return (
    <>
      <Modal onClose={onClose} size="xs" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent className={styles["modal-content"]}>
          <ModalHeader className={styles["modal-header"]}>
            Sorry, you failed
          </ModalHeader>
          <ModalBody className={styles["modal-body"]}>
            <h1 className={styles["modal-subtitle"]}>try again</h1>
            <Button
              onClick={() => setFailModal(false)}
              className={styles["modal-btn"]}
            >
              close
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FailModal;
