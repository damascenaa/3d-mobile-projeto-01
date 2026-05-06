import styles from "../styles/main";

export default function Conteudo({ membros }) {
  return (
    <section style={styles.conteudo}>
      <p style={styles.conteudoTitulo}> o que cada um da equipe fez?</p>
      <ul style={styles.conteudoLista}>
        {membros.map((membro) => (
          <li key={membro.nome} style={styles.conteudoItem}>
            <span style={styles.conteudoNome}>{membro.nome}</span>
            <span style={styles.conteudoDescricao}>{membro.descricao}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
