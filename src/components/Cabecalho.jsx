import styles from "../styles/main";

export default function Cabecalho({ paginaAtual, onNavegar }) {
  return (
    <header style={styles.cabecalho}>
      <span style={styles.cabecalhoLogo}>{""}</span>
      <nav style={styles.cabecalhoNav}>
        <button
          style={{
            ...styles.cabecalhoBtn,
            ...(paginaAtual === "principal" ? styles.cabecalhoBtnAtivo : {}),
          }}
          onClick={() => onNavegar("principal")}
        >
          Início
        </button>
        <button
          style={{
            ...styles.cabecalhoBtn,
            ...(paginaAtual === "sobre" ? styles.cabecalhoBtnAtivo : {}),
          }}
          onClick={() => onNavegar("sobre")}
        >
          Equipe
        </button>
      </nav>
    </header>
  );
}