import React from 'react'

import { RiSuitcaseLine } from 'react-icons/ri'
import { CgMenuGridO } from 'react-icons/cg'
import { IoStatsChart } from 'react-icons/io5'
import { BiBookAlt } from 'react-icons/bi'
import { BiCode } from 'react-icons/bi'
import { FiSun } from 'react-icons/fi'

import styles from './style.module.css'

function Services() {
  return (
    <div className={styles.servicesContainer} role="main">
      <div className={styles.servicesContainer__top}>
        <h1 className={styles.servicesContainer__top__title}>Services</h1>
        <p className={styles.servicesContainer__top__description}>Descrição e Serviços.</p>
      </div>
      <div className={styles.servicesContainer__cards}>
        <Card Icon={RiSuitcaseLine} title="Desenvolvimento de Layouts" description='Desenvolvimento de Layouts responsivos, flexiveis, práticos e rapidos'/>
        <Card Icon={CgMenuGridO} title="Desenvolvimento de interfaces" description='Interfaces interativas e sugestivas, com um alto nivel de Design.'/>
        <Card Icon={IoStatsChart} title="Auxiliar de Design/Desenvolvimento" description='Auxiliar de Design e desenvolvimento de equipes.'/>
        <Card Icon={BiBookAlt} title="Arquitetura de Projetos Front-end" description='Desenvolver estruturas Front-end flexiveis ou rigidas.'/>
        <Card Icon={BiCode} title="Desenvolvimento Completo" description='Desenvolvimento completo de ponta a ponta, um Back-end forte e um Front-end completo'/>
        <Card Icon={FiSun} title="Vendedora de Roupas [BONUS]" description='E um bonus especial, Vendedora de roupas feminas elegantes e customizáveis'/>
      </div>
    </div>
  )
}

interface CardProps {
  Icon: any;
  title: string;
  description: string;
}

function Card({ Icon, title, description }: CardProps) {
  return (
    <div className={styles.card}>
      <Icon size={"42px"} />
      <div className={styles.cardInfos}>
        <h3 className={styles.cardInfos__title}>{title}</h3>
        <p className={styles.cardInfos__description} role="contentinfo">{description}</p>
      </div>
    </div>
  )
}

export default Services
