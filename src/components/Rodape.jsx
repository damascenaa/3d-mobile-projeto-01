import styles from "../styles/main";

export default function Rodape() {
  return (
    <footer style={styles.rodape}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
        <a href="https://github.com/VicCAlq/3d-mobile-projeto-01/tree/Anthoniely-Laura-Rafael-Severino-Bruno" target="_blank" rel="noopener noreferrer" style={styles.rodapeLink}>
          ↗ Repositório do Git
        </a>
        <p style={{ ...styles.rodapeTexto, fontSize: "0.65rem", margin: 0 }}>
          Feito pelo Time 1, Composto por: Anthoniely, Bruna, Laura, Rafael e Severino
        </p>
      </div>
    </footer>
  );
}