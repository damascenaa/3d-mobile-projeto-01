import { useState } from "react";
import styles from "../styles/main";

export default function Botao({ aluno, ativo, onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      style={{
        ...styles.botao,
        ...(ativo ? styles.botaoAtivo : {}),
        ...(hover && !ativo ? { backgroundColor: "#0a2a0a", borderColor: "#3a7a3a" } : {}),
      }}
      onClick={() => onClick(aluno.id)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {aluno.foto ? (
        <img src={aluno.foto} alt={aluno.nome} style={styles.botaoFoto} />
      ) : (
        <span style={styles.botaoFotoPlaceholder}>{aluno.emoji || "👤"}</span>
      )}
      <span
        style={{
          ...styles.botaoNome,
          ...(ativo ? styles.botaoNomeAtivo : {}),
        }}
      >
        {aluno.nome}
      </span>
    </button>
  );
}