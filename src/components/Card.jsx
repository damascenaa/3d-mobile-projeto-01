import { useState } from "react";
import styles from "../styles/main";

const tipoConfig = {
  facil: { label: "Muito Fácil", tagStyle: styles.cardTagFacil },
  dificil: { label: "Muito Difícil", tagStyle: styles.cardTagDificil },
  aprendizado: { label: "Me ensinou muito", tagStyle: styles.cardTagAprendizado },
  semAprendizado: { label: "Não me ensinou nada", tagStyle: styles.cardTagSemAprendizado },
};

export default function Card({ conteudo }) {
  const [aberto, setAberto] = useState(false);
  const config = tipoConfig[conteudo.tipo] || tipoConfig.facil;

  return (
    <article
      style={{ ...styles.card, cursor: "pointer" }}
      onClick={() => setAberto(!aberto)}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <div style={{ flex: 1 }}>
          <span style={{ ...styles.cardTag, ...config.tagStyle }}>
            {config.label}
          </span>
          <p style={styles.cardTitulo}>{conteudo.titulo}</p>
        </div>
        <span style={styles.cardSeta}>{aberto ? "▲" : "▼"}</span>
      </div>

      {aberto && (
        <div style={{ marginTop: "1rem" }}>
          <pre style={styles.cardCodigo}>{conteudo.codigo}</pre>
          {conteudo.comentario && (
            <p style={styles.cardComentario}>// {conteudo.comentario}</p>
          )}
        </div>
      )}
    </article>
  );
}