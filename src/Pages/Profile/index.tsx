import React from "react";

import { AiOutlineRight } from "react-icons/ai";

import styles from "./style.module.css";

function Profile() {
  return (
    <div className={styles.profileContainer} role="main">
      <div className={styles.profileContainerTop}>
        <h2 className={styles.profileContainerTop__title}>Perfil</h2>
        <p className={styles.profileContainerTop__description}>
          Apresentação inicial com informações pessoais.
        </p>
      </div>
      <div className={styles.profileContainerMiddle}>
        <div className={styles.profileContainerMiddle__profileDescription}>
          <img
            src={process.env.PUBLIC_URL + "./assets/profile.jpg"}
            className={styles.profileContainerMiddle__image}
            alt="User"
          />

          <div className={styles.profileContainerMiddle__details}>
            <h3 className={styles.profileContainerMiddle__detailsTitle}>
              Desenvolvedora/Administradora.
            </h3>
          </div>
        </div>
        <div className={styles.profileContainerMiddle__infos}>
          <span>
            <div className={styles.profileContainerMiddle__infos__firstColumn}>
              <p>
                 <span className="fontBold"><AiOutlineRight />Nome:</span>Kenia cavalheiro
              </p>
              <p>
               <span className="fontBold"><AiOutlineRight />Aniversário:</span> 14 De Fevereiro 2006
              </p>
              <p>
              <span className="fontBold"><AiOutlineRight />Cidade:</span>Rio grande do sul, Brasil
              </p>
              <p>
              <span className="fontBold"><AiOutlineRight />Idade:</span>16
              </p>
              <p>
              <span className="fontBold"><AiOutlineRight />Celular:</span>+123 456 789
              </p>
            </div>
            <div className={styles.profileContainerMiddle__infos__secondColumn}>
              <p>
              <span className="fontBold"><AiOutlineRight />Trabalho:</span>Administradora
              </p>
              <p>
              <span className="fontBold"><AiOutlineRight />Cargo/Estado Atual:</span> Estudante
              </p>
              <p>
                <span className="fontBold"><AiOutlineRight />Email:</span> keniacavalheiro@gmail.com
              </p>
            </div>
          </span>
          <p className={styles.profileContainerMiddle__description} role="contentinfo">
            Aspirante á desenvolvedora web Front-end, Estudante do Instituto federal de ciências e tecnologia e vendedora de uma loja em bento, Rio grande do sul.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
