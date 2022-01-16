import { useState } from "react";

import styles from "./style.module.css";

const data = [
  {
    src: process.env.PUBLIC_URL + "./assets/image1.jpg",
    id: "APP",
  },
  {
    src: process.env.PUBLIC_URL + "./assets/image2.jpg",
    id: "APP",
  },
  {
    src: process.env.PUBLIC_URL + "./assets/image3.jpg",
    id: "CARD",
  },
  {
    src: process.env.PUBLIC_URL + "./assets/image4.jpg",
    id: "CARD",
  },
  {
    src: process.env.PUBLIC_URL + "./assets/image5.jpg",
    id: "WEB",
  },
  {
    src: process.env.PUBLIC_URL + "./assets/image6.jpg",
    id: "WEB",
  },
];

type FilterIDs = "ALL" | "APP" | "WEB" | "CARD";

function Portfolio() {
  let actualImages = data;

  const [active, setActive] = useState<FilterIDs>("ALL");
  const [images, setImages] = useState(data);

  const handleImages = (id: FilterIDs) => {
    if (id !== "ALL") {
      actualImages = actualImages.filter((img) => img.id === id);
    } else {
      actualImages = data;
    }
    setImages(actualImages);
  };

  return (
    <div className={styles.portfolioContainer} role="main">
      <div className={styles.portfolio__top}>
        <h1 className={styles.portfolio__top__title}>Portfólio</h1>
        <p className={styles.portfolio__top__description}>
          Imagens de alguns produtos da minha loja
        </p>
      </div>
      <div className={styles.portfolio__filter} role="tablist" aria-label="Botoes de filtragens">
        <FilterButton handleImages={handleImages} active={active} setActive={setActive} id="ALL" />
        <FilterButton handleImages={handleImages} active={active} setActive={setActive} id="APP" />
        <FilterButton handleImages={handleImages} active={active} setActive={setActive} id="CARD"/>
        <FilterButton handleImages={handleImages} active={active} setActive={setActive} id="WEB"/>
      </div>
      <div className={styles.portfolio__imagesContainer} aria-label="Lista de imagens" id="lista-imagens" aria-labelledby="botao-filtro">
        {images.length > 0 &&
          images.map((image) => (
            <img
              src={image.src}
              alt=""
              key={actualImages.indexOf(image)}
              className={styles.portfolio__imagesContainer__image}
              role="tabpanel"
            />
          ))}
      </div>
    </div>
  );
}

interface FilterProps {
  handleImages: Function;
  id: string;
  active: string;
  setActive: Function;
}

function FilterButton({ handleImages, id, active, setActive }: FilterProps) {
  return (
    <button
      onClick={() => {
        setActive(id);
        handleImages(id);
      }}
      className={`${styles.portfolio__filterButton} ${active === id && styles.active}`}
      role="tab"
      aria-controls="lista-imagens"
      id="botao-filtro"
      aria-current={active ? 'true' : 'false'}
    >
      {id}
    </button>
  );
}

export default Portfolio;
