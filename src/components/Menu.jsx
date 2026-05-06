import styles from "../styles/main";
import Botao from "./Botao";

export default function Menu({ alunos, alunoAtivo, onSelecionar }) {
  return (
    <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "2.5rem" }}>
      {alunos.map((aluno) => (
        <div key={aluno.id} style={{ padding: "1rem 0" }}>
          <Botao
            aluno={aluno}
            ativo={alunoAtivo === aluno.id}
            onClick={onSelecionar}
          />
        </div>
      ))}
    </nav>
  );
}