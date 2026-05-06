import { useState } from "react";
import styles from "./styles/main";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import SobreEquipe from "./pages/SobreEquipe";

const Onda = ({ invertida = false }) => (
  <div style={{ width: "100%", lineHeight: 0, display: "block" }}>
    <svg
      viewBox="0 0 1200 60"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", display: "block", transform: invertida ? "scaleY(-1)" : "none" }}
    >
      <path
        d="M0,20 C150,50 350,0 600,25 C850,50 1050,0 1200,20 L1200,60 L0,60 Z"
        fill="#0a2a0a"
      />
      <path
        d="M0,30 C150,55 350,5 600,30 C850,55 1050,5 1200,30"
        fill="none"
        stroke="#7dff7d"
        strokeWidth="1.5"
        opacity="0.35"
      />
    </svg>
  </div>
);

export default function App() {
  const [pagina, setPagina] = useState("principal");

  return (
    <div style={{ ...styles.app, backgroundColor: "#0a2a0a" }}>
      <Cabecalho paginaAtual={pagina} onNavegar={setPagina} />
      <Onda />

      <div style={{ backgroundColor: "#0a2a0a", flex: 1 }}>
        {pagina === "principal" && <PaginaPrincipal />}
        {pagina === "sobre" && <SobreEquipe />}
      </div>

      <Onda invertida />
      <Rodape />
    </div>
  );
}