import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

const Navbar = ({ currentPage }) => {
  const router = useRouter();

  const goToMyPokemon = () => {
    document.getElementById("pokeball").style.transform = "rotate(360deg)";
    document.getElementById("pokeball").style.transition =
      "transform 500ms ease-in-out";
    setTimeout(() => {
      router.push("/my-pokemon");
    }, 600);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector("header");

      if (navbar) {
        navbar.classList.toggle("sticky", window.scrollY > 0);
      }
    });
  }, []);

  return (
    <header
      className={
        currentPage === "homepage" || currentPage === "detail"
          ? "navbar"
          : "navbarMyPokemon"
      }
    >
      <Link href={"/"}>
        <img
          className="logo"
          src="https://ik.imagekit.io/gdx8okwg6gt/2560px-International_Pokémon_logo_tuJ3Kk-Ps.png?updatedAt=1638886216266"
          alt="title"
        />
      </Link>
      {(currentPage === "homepage" || currentPage === "detail") && (
        <div onClick={goToMyPokemon} className="my-pokemon">
          <img
            id="pokeball"
            className="pokeball"
            src="https://ik.imagekit.io/gdx8okwg6gt/pokeball-png-45330_C-DwmAjjw.png?updatedAt=1638885266043"
            alt="pokeball"
          />
          <h1 className="my-pokemon-title">My Pokemon</h1>
        </div>
      )}
    </header>
  );
};

export default Navbar;
