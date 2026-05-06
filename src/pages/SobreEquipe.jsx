import styles from "../styles/main";
import Conteudo from "../components/Conteudo";
import { membros } from "../dados";

export default function SobreEquipe() {
  return (
    <main style={styles.main}>
      <Conteudo membros={membros} />
    </main>
  );
}
