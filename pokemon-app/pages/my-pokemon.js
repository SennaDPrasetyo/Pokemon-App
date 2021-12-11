import Navbar from "../components/navbar";
import { useEffect } from "react";

const MyPokemon = () => {
  return (
    <>
      <Navbar currentPage={"myPokemon"} />
      <h1 style={{ marginTop: "10rem" }}>Halaman my pokemon</h1>
    </>
  );
};

export default MyPokemon;
