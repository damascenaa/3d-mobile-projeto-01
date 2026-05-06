import { useState, useEffect } from "react";
import styles from "./styles/main";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import SobreEquipe from "./pages/SobreEquipe";

export default function App() {
  const [pagina, setPagina] = useState("principal");

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div style={styles.app}>
      <Cabecalho paginaAtual={pagina} onNavegar={setPagina} />
      {pagina === "principal" && <PaginaPrincipal />}
      {pagina === "sobre" && <SobreEquipe />}
      <Rodape />
    </div>
  );
}