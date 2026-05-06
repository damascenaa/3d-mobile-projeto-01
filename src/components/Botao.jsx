import { useState } from "react";
import styles from "../styles/main";

export default function Botao({ aluno, ativo, onClick }) {
  const [hover, setHover] = useState(false);
  const [fotoHover, setFotoHover] = useState(false);

  return (
    <button
      style={{
        ...styles.botao,
        ...(ativo ? styles.botaoAtivo : {}),
        ...(hover && !ativo ? { backgroundColor: "#e8e8e6", borderColor: "#aaa" } : {}),
      }}
      onClick={() => onClick(aluno.id)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {aluno.foto ? (
        <img
          src={aluno.foto}
          alt={aluno.nome}
          style={{
            ...styles.botaoFoto,
            transform: fotoHover ? "scale(1.15)" : "scale(1)",
          }}
          onMouseEnter={() => setFotoHover(true)}
          onMouseLeave={() => setFotoHover(false)}
        />
      ) : (
        <span style={styles.botaoFotoPlaceholder}>{aluno.emoji || "👤"}</span>
      )}
      <span style={{
        ...styles.botaoNome,
        ...(ativo ? styles.botaoNomeAtivo : {}),
      }}>
        {aluno.nome}
      </span>
    </button>
  );
}