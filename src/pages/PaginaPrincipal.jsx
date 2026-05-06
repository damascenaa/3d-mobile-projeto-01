import { useState } from "react";
import styles from "../styles/main";
import Menu from "../components/Menu";
import Card from "../components/Card";
import { alunos } from "../dados";

export default function PaginaPrincipal() {
  const [alunoAtivo, setAlunoAtivo] = useState(alunos[0].id);

  const alunoSelecionado = alunos.find((a) => a.id === alunoAtivo);

  return (
    <main style={styles.main}>
      <Menu
        alunos={alunos}
        alunoAtivo={alunoAtivo}
        onSelecionar={setAlunoAtivo}
      />
      {alunoSelecionado && (
        <div style={styles.cardsGrid}>
          {alunoSelecionado.codigos.map((codigo, index) => (
            <Card key={index} conteudo={codigo} />
          ))}
        </div>
      )}
    </main>
  );
}