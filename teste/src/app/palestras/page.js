"use client";

import styles from "./palestras.module.css";

export default function Palestras() {
  return (
    <main className={styles.pagina}>
      <section className={styles.banner}>
        <h1>Mais em breve...</h1>
      </section>

      <section className={styles.conteudo}>
        <h2 className={styles.titulo}>
          Projeto WomanTech: Women in TECH - Desafios ou oportunidades?
        </h2>

        <p className={styles.descricao}>
          A palestra “Women in TECH: Desafios ou Oportunidades?” integra o
          projeto WomanTech, criado para inspirar, apoiar e dar visibilidade às
          mulheres nas áreas de tecnologia. O evento traz reflexões sobre os
          principais desafios enfrentados por mulheres na área, como a falta de
          representatividade e os preconceitos ainda presentes no mercado, ao
          mesmo tempo em que mostra as oportunidades que surgem com a crescente
          valorização da diversidade nas empresas de tecnologia. Com
          depoimentos, dados e experiências reais, a palestra busca incentivar
          novas gerações de mulheres a se envolverem, acreditarem em seu
          potencial e conquistarem espaço na área de TI.
        </p>

        <section className={styles.videoArea}>
          <a
            href="https://www.youtube.com/watch?v=rCnGVtRQ5QQ&t=110s"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.watchButton}
          >
            ▶ Assistir no YouTube
          </a>

          <a
            href="https://www.youtube.com/watch?v=rCnGVtRQ5QQ&t=110s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.youtube.com/vi/rCnGVtRQ5QQ/maxresdefault.jpg"
              alt="Thumbnail da palestra WomanTech"
              className={styles.thumbnail}
            />
          </a>
        </section>

        <section className={styles.Section}>
          <h3>💡 Mensagem Inspiradora</h3>
          <p className={styles.Texto}>
            “A tecnologia é feita por pessoas e para pessoas — nunca se esqueça
            do seu poder de criar mudanças.”
          </p>
          <p className={styles.Autor}>— Projeto WomanTech</p>
        </section>
      </section>
    </main>
  );
}




