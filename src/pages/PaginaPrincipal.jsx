import { useState } from "react";
import styles from "../styles/main";
import Card from "../components/Card";
import { alunos } from "../dados";

export default function PaginaPrincipal() {
  const [alunoAtivo, setAlunoAtivo] = useState(alunos[0].id);

  const alunoSelecionado = alunos.find((a) => a.id === alunoAtivo);

  return (
    <main style={styles.main}>
      <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>


        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0",
          alignSelf: "flex-start",
          position: "relative",
        }}>
          {alunos.map((aluno, index) => (
            <div key={aluno.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <button
                onClick={() => setAlunoAtivo(aluno.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "0.3rem",
                  outline: "none",
                }}
              >
                <img
                  src={aluno.foto}
                  alt={aluno.nome}
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: alunoAtivo === aluno.id ? "3px solid #7dff7d" : "2px solid #2a5a2a",
                    boxShadow: alunoAtivo === aluno.id ? "0 0 12px #7dff7d66" : "none",
                    transition: "all 0.2s ease",
                  }}
                />
              </button>
              {index < alunos.length - 1 && (
                <div style={{
                  width: "2px",
                  height: "1.5rem",
                  backgroundColor: "#2a5a2a",
                }} />
              )}
            </div>
          ))}
        </div>


        {alunoSelecionado && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <p style={{ fontSize: "0.7rem", color: "#7dff7d", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: "800", marginBottom: "0.5rem" }}>
              {alunoSelecionado.nome}
            </p>
            {alunoSelecionado.codigos.map((codigo, index) => (
              <Card key={index} conteudo={codigo} />
            ))}
          </div>
        )}

      </div>
    </main>
  );
}