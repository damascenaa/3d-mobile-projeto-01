import styles from "../styles/main";
import Botao from "./Botao";

export default function Menu({ alunos, alunoAtivo, onSelecionar }) {
  return (
    <nav style={styles.menu}>
      {alunos.map((aluno) => (
        <Botao
          key={aluno.id}
          aluno={aluno}
          ativo={alunoAtivo === aluno.id}
          onClick={onSelecionar}
        />
      ))}
    </nav>
  );
}
