import React from "react";

import styles from "./style.module.css";

import { FiChevronRight } from "react-icons/fi";

interface CardProps {
  title: string;
  date?: string;
  description: string;
  details: string[] | string;
}

function Resume() {
  return (
    <div className={styles.aboutContainer} role="main">
      <div className={styles.aboutContainer__top}>
        <h1 className={styles.aboutContainer__top__title}>Resumo</h1>
        <p className={styles.aboutContainer__top__description}>
          Resumo de algumas informações pessoais e outras informações detalhadas sobre Educação e experiência profissional.
        </p>
      </div>
      <div className={styles.aboutContainer__mid}>
        <div className={styles.aboutContainer__mid__leftColumn}>
          <h3 className={styles.aboutContainer__mid__title}>Sumário</h3>
          <Card
            title="KENIA CAVALHEIRO"
            description="Desenvolvedora Web Iniciante e Estudante de um Intituto Federal."
            details={["Bento, Rio grande do sul", "(123) 456-789", "keniacavalheiro@gmail.com"]}
          />
          <h3 className={styles.aboutContainer__mid__title}>Educação</h3>
          <Card
            title="INSTITUTO FEDERAL DE CIÊNCIAS E EDUCAÇÃO."
            description="Instituto Federal de Ciências e Educação, Bento, Rio grande do sul."
            date="2021 - Presente"
            details="Instituto Federal de Ciências e Educação, Onde fiz meu Ensino médio e adquiri diversas experiências de várias areas da Tecnologia e Ciência."
          />
        </div>
        <div className={styles.aboutContainer__mid__rightColumn}>
        <h3 className={styles.aboutContainer__mid__title}>Experiencia Profissional</h3>
        <Card
            title="Administradora de uma Loja"
            description="Bento, Rio grande do sul."
            date="2021 - Presente"
            details={["Administradora e Fundadora de uma loja de roupas pessoal"]}
          />
        <Card
            title="Estudante de Programação, Desenvolvedor Front-end"
            description="Stepping Stone Advertising, New York, NY"
            date="2021 - Presente"
            details={["Aspirante de Desenvolvedor Web com tecnologias Front-end."]}
          />
        </div>
      </div>
    </div>
  );
}

function Card({ title, date, description, details }: CardProps) {
  return (
    <>
      <div className={styles.cardContainer}>
        <h2 className={styles.cardContainer__title}>{title}</h2>
        {date && (
          <div className={styles.cardContainer__date}>
            <span>{date}</span>
          </div>
        )}
        <p className={styles.cardContainer__description}>{description}</p>
        {typeof details === "object" && details.length > 0 ? (
          details.map((info) => <li className={styles.cardContainer__detail}><FiChevronRight/>{info}</li>)
        ) : (
          <p className={styles.cardContainer__detail__paragraph} role="contentinfo">{details}</p>
        )}
      </div>
    </>
  );
}

export default Resume;
