import classes from "../../styles/container.module.scss";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ContactCard from "@/components/UI/ContactCard";

const Contact = () => {
  return (
    <>
      <div className={classes["gradient-container"]} />
      <Image
        src="/contact-us.jpg"
        alt="Qui sommes nous"
        priority={true}
        width={2500}
        height={1500}
        style={{
          maxHeight: "50vh",
          objectFit: "cover",
          objectPosition: "50% 70%",
        }}
        className="img-100"
      />
      <div className={classes["content-container"]}>
        <h2>
          N'hesitez pas à nous contacter et nous vous répondrons dans les plus
          brefs délais
        </h2>

        <ContactCard cardData={contactDetails.phone} />
        <ContactCard cardData={contactDetails.email} />
        <ContactCard cardData={contactDetails.address} />

        <Link href={"/"} className="go-back-btn">
          <ArrowForwardRoundedIcon />
          Revenir à l'accueil
        </Link>
      </div>
    </>
  );
};

export default Contact;


const contactDetails = {
  phone: {
    title: "Appelez nous",
    text: "06 45 51 03 25",
    imgSrc: "/phone-blue.svg",
    alt: "Phone icon",
  },
  email: {
    title: "Envoyez un email",
    text: "contact@ambele.org",
    imgSrc: "/email-blue.svg",
    alt: "Email icon",
  },
  address: {
    title: "Adresse postale",
    text: "10 rue du Pressoir, 34 770 Gigean",
    imgSrc: "/address-blue.svg",
    alt: "Address icon",
  },
};
