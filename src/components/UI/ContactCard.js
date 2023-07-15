import classes from './ContactCard.module.scss'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';

const ContactCard = ({ cardData }) => {
  const [typeOfContact, setTypeOfContact] = useState(cardData.alt.toLowerCase().split(" ")[0]);

  const emailHandler = () => {
    window.open(
      `mailto:contact@ambele.org?subject=${"Prise de contact à props du projet Ambélé"}`,
      "_blank",
      "noreferrer"
    );
  }

  const phoneHandler = () => {
    window.open(
      `tel:+33645510325`,
      "_blank",
      "noreferrer"
    );
  }

  const openMapHandler = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${"10 rue du Pressoir, 34 770 Gigean"}`,
      "_blank",
      "noreferrer"
    );
  }

  return (
    <>
      {typeOfContact === "phone" && (
        <div onClick={() => phoneHandler()} className={classes["contact-card"]}>
          <Image
            src={cardData.imgSrc}
            alt={cardData.alt}
            priority={true}
            width={2500}
            height={1500}
          />

          <div className={classes["text"]}>
            <h3>{cardData.title}</h3>
            <p>{cardData.text}</p>
          </div>
        </div>
      )}

      {typeOfContact === "email" && (
        <div onClick={() => emailHandler()} className={classes["contact-card"]}>
          <Image
            src={cardData.imgSrc}
            alt={cardData.alt}
            priority={true}
            width={2500}
            height={1500}
          />

          <div className={classes["text"]}>
            <h3>{cardData.title}</h3>
            <p>{cardData.text}</p>
          </div>
        </div>
      )}

      {typeOfContact === "address" && (
        <div
          onClick={() => openMapHandler()}
          className={classes["contact-card"]}
        >
          <Image
            src={cardData.imgSrc}
            alt={cardData.alt}
            priority={true}
            width={2500}
            height={1500}
          />

          <div className={classes["text"]}>
            <h3>{cardData.title}</h3>
            <p>{cardData.text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactCard
