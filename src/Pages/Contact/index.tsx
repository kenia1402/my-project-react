import React from 'react'

import styles from './style.module.css'

import { BiMap } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'


function Contact() {

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContainer__top}>
        <h1 className={styles.contactContainer__title}>Contato</h1>
        <p className={styles.contactContainer__description}>Alguma dúvida ou pedido? entre em contato mandando uma mensagem para mim.</p>
      </div>
      <div className={styles.contactContainer__main}>
        <div className={styles.contactContainer__main__infos}>
          <Info Icon={BiMap} info="Localização:" description="Bento, Rio grande do sul"/>
          <Info Icon={AiOutlineMail} info="Email:" description="keniacavalheiro@gmail.com"/>
          <Info Icon={BsPhone} info="Telefone:" description="+123 456 789"/>
        </div>

        <div className={styles.contactContainer__main__form}>
          <div className={styles.contactContainer__form__firstRow}>
            <FormInput label='Nome' type='text'/>
            <FormInput label='Email' type='email'/>
          </div>
          <div className={styles.contactContainer__form__row}>
            <FormInput label='Descrição' type='text'/>
          </div>
          <div className={styles.contactContainer__form__row}>
            <FormInput label='Mensagem' type='textarea'/>
          </div>
          <button type="submit">Enviar mensagem</button>
        </div>
      </div>
    </div>
  )
}

interface InfoProps {
  Icon: any;
  info: string;
  description: string;
}

function Info({ Icon, info, description }: InfoProps) {
  return (
    <div className={styles.infoContainer}>
      <Icon size="42px" />
      <div className={styles.infos}>
        <h3 className={styles.infosTitle}>{info}</h3>
        <p className={styles.infosDescription}>{description}</p>
      </div>
    </div>
  )
}

interface FormInputProps {
  label: string;
  type: string;
}

function FormInput({ label, type }: FormInputProps) {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      {type === 'textarea' ? (
        <textarea />
        ) : (
        <input type={type}/>
      )}
    </div>
  )
}

export default Contact
