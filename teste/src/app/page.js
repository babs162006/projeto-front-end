import styles from './home.module.css';
import Image from "next/image";
import Organizadoras from "./components/Organizadoras";

export default function Home() {
  return (
    <>
      <section className={styles.anuncio}>
        <Image src="/images/anuncio4.png" alt="Anúncio" width={1200} height={430}/>
      </section>

      <section className={styles.tudo}>
        <section className={styles.texto}>
          <Image src="/images/logozin.jpeg" width={50} height={50} alt="Logo" />
          <h1>Quem somos e o que fazemos?</h1>
          <p>O WomanTech é um projeto de extensãoda Faculdade de Computação e Informática (FCI),<br /> em parceria com o programa Meninas Digitais da Sociedade Brasileira de Computação. 
           Por <br /> meio de oficinas, painéis, criação de conteúdos, recursos educacionais e ferramentas digitais, <br /> o WomanTech busca construir um ambiente acolhedor, inclusivo e inspirador, incentivando <br /> cada vez mais mulheres a se inserirem e permanecerem na área de TI.</p>
        </section>

        <section className={styles.circulo}>
          <h1 className={styles.c2}>Objetivo</h1>
          <p className={styles.c1}>Promover a participação feminina na tecnologia, fortalecendo a autonomia, a inclusão digital e ampliando oportunidades para mulheres em diferentes fases da vida — desde alunas do ensino médio até profissionais em transição de carreira.</p>
        </section>
      </section>

      <Organizadoras />
    </>
  );
}
