import React, { useState } from "react";

import styles from "./style.module.css";

import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillSkype } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillFile } from "react-icons/ai";
import { BiBookContent } from "react-icons/bi";
import { BiServer } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { IconType } from "react-icons";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";

interface PageLinkProps {
  Icon: IconType;
  name: string;
  route: string;
}

function Sidebar() {
  const [showMenu, setShowMenu] = useState(true);

  const handleShowSideBar = (state: boolean) => {
    setShowMenu(state);
  };
  
  return (
    <>
      {showMenu ? (
        <div className={styles.menuButton} onClick={() => handleShowSideBar(false)}>
          <AiOutlineMenu size="25px" />
        </div>
      ) : (
        <div className={styles.sideBar__container}>
          <div className={styles.sideBar__profileContainer}>
            <img
              src={process.env.PUBLIC_URL + "./assets/profile.jpg"}
              alt="Profile"
              className={styles.sideBar__profileImage}
            />
            <div className={styles.sideBar__profileSeparator}>
              <p className={styles.sideBar__profileName}>Kenia Cavalheiro</p>
              <div className={styles.sideBar__profileSocialMedias}>
                <AiFillTwitterCircle size="25px" />
                <AiFillInstagram size="25px" />
                <BsFacebook size="25px" />
                <AiFillSkype size="25px" />
                <AiFillLinkedin size="25px" />
              </div>
            </div>
          </div>
          <PageLink Icon={AiOutlineHome} name="Home" route="/" />
          <PageLink Icon={AiOutlineUser} name="Perfil" route="/profile" />
          <PageLink Icon={AiFillFile} name="Resumo" route="/about" />
          <PageLink Icon={BiBookContent} name="Portfólio" route="/portfolio" />
          <PageLink Icon={BiServer} name="Serviços" route="/services" />
          <PageLink Icon={AiOutlineMail} name="Contato" route="/contact" />

          <div className={styles.menuButton} onClick={() => handleShowSideBar(true)}>
            <AiOutlineMenuFold size="25px" /> Fechar
          </div>
        </div>
      )}
    </>
  );
}

const PageLink: React.FC<PageLinkProps> = ({ Icon, name, route }) => {
  const actualURL = window.location.href.slice(21);
  const active = actualURL === route ? true : false;

  return (
    <a className={`${styles.sideBar__pageLink} ${active ? styles.active : ""}`} href={route}>
      {<Icon />}
      {name}
    </a>
  );
};

export default Sidebar;
