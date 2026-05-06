import styles from "../styles/main";

export default function Rodape() {
  return (
    <footer style={styles.rodape}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
        <a href="https://github.com/VicCAlq/3d-mobile-projeto-01/tree/Kaua-Samara-Antonia-Heloisa-Vitoria" target="_blank" rel="noopener noreferrer" style={styles.rodapeLink}>
          ↗ Repositório do Git
        </a>
        <p style={{ ...styles.rodapeTexto, fontSize: "0.65rem", margin: 0 }}>
          Desenvolvido por Time 8: Kauã R.;M. Antonia; M. Heloísa; M. Vitória; Samara V.
        </p>
      </div>
    </footer>
  );
}