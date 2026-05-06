import styles from "../styles/main";

const tipoConfig = {
  facil: { label: "Muito Fácil", tagStyle: styles.cardTagFacil },
  dificil: { label: "Muito Difícil", tagStyle: styles.cardTagDificil },
  aprendizado: { label: "Me ensinou muito", tagStyle: styles.cardTagAprendizado },
  semAprendizado: { label: "Não me ensinou nada", tagStyle: styles.cardTagSemAprendizado },
};

export default function Card({ conteudo }) {
  const config = tipoConfig[conteudo.tipo] || tipoConfig.facil;

  return (
    <article style={{ ...styles.card }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
        <div style={{ flex: 1 }}>
          <span style={{ ...styles.cardTag, ...config.tagStyle }}>
            {config.label}
          </span>
          <p style={styles.cardTitulo}>{conteudo.titulo}</p>
        </div>
      </div>
      <pre style={styles.cardCodigo}>{conteudo.codigo}</pre>
      {conteudo.comentario && (
        <p style={styles.cardComentario}>// {conteudo.comentario}</p>
      )}
    </article>
  );
}