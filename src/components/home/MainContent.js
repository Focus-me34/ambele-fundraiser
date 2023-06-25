import Link from "next/link";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useAnimationControls } from "framer-motion";

import Image from "next/image";
import classes from "./MainContent.module.scss";
import containerClasses from "../../styles/container.module.scss";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const MainContent = () => {
  const rowAnimation = useAnimationControls();

  const firstRowRef = useRef(null);
  const firstRowisInView = useInView(firstRowRef, { once: true, amount: 1 });

  const secondRowRef = useRef(null);
  const secondRowisInView = useInView(secondRowRef, { once: true, amount: 1 });

  const thirdRowRef = useRef(null);
  const thirdRowisInView = useInView(thirdRowRef, { once: true, amount: 1 });

  const fourthRowRef = useRef(null);
  const fourthRowisInView = useInView(fourthRowRef, { once: true, amount: 1 });

  return (
    <main
      className={`${containerClasses["main-container"]} ${classes["home-content"]}`}
    >
      {/* // ! ================ ROW 1 ================ */}
      <section
        ref={firstRowRef}
        animate={rowAnimation}
        style={{
          opacity: firstRowisInView ? 1 : 0.25,
          transition: "all 1s 0s",
        }}
      >
        <Image // ? Position absolute by default
          key={"about"}
          src="/about.svg"
          alt="Question mark"
          width={200}
          height={170}
          style={{
            objectFit: "cover",
          }}
        />

        <div className={classes["text"]}>
          <h2>Qui Sommes nous?</h2>
          <p>
            Ambélé est une association française qui soutient et accompagne des
            initiatives d'éducation populaire en Guinée.
          </p>

          <p>Le nom signifie "on est ensemble" en malinké.</p>

          <p>
            L'éducation populaire vise l'accès aux savoirs pour tous et
            encourage la participation active de chacun, favorise la coopération
            et soutient l'exercice de la citoyenneté. Elle permet de corriger
            les inégalités et est vecteur d'égalité des chances.
          </p>

          <Link href={"/qui-sommes-nous"}>
            <ArrowForwardRoundedIcon />
            EN SAVOIR PLUS
          </Link>
        </div>
      </section>

      {/* // ! ================ ROW 2 ================ */}
      <section
        ref={secondRowRef}
        animate={rowAnimation}
        style={{
          opacity: secondRowisInView ? 1 : 0.25,
          transition: "all 1s 0s",
        }}
      >
        <Image // ? Position absolute by default
          key={"notre action"}
          src="/action.svg"
          alt="Light bulb representing the organization's action idea"
          width={200}
          height={170}
          style={{
            objectFit: "cover",
          }}
        />

        <div className={classes["text"]}>
          <h2>Notre action</h2>
          <p>
            Notre action consiste en un projet de cyber-accompagnement pour des
            élèves en difficulté scolaire dans un lycée de jeunes filles en
            Afrique subsaharienne.
          </p>

          <p>
            Le projet a été mis en place en février 2022 avec l'implication de
            deux bénévoles français et quelques collégiens, mais s'est
            rapidement développé pour impliquer quatre bénévoles aux profils et
            compétences diverses ainsi que 10 à 15 élèves chaque semaine.
          </p>

          <p>
            Le projet vise à avoir un impact significatif sur la scolarité des
            jeunes en permettant une évaluation sur le long terme. Les élèves
            inscrits s'engagent à participer à une séance hebdomadaire pendant
            au moins un trimestre. Les matières scolaires concernées sont le
            français, les mathématiques, la physique, la chimie, la biologie et
            l'anglais, en fonction des besoins identifiés des élèves et des
            ressources bénévoles disponibles.
          </p>

          <p>
            Le projet a pour objectif de développer les compétences académiques
            des élèves, leur confiance en eux et leur motivation à réussir à
            l'école.
          </p>

          <Link href={"/notre-action"}>
            <ArrowForwardRoundedIcon />
            EN SAVOIR PLUS
          </Link>
        </div>
      </section>

      {/* // ! ================ ROW 3 ================ */}
      <section
        ref={thirdRowRef}
        animate={rowAnimation}
        style={{
          opacity: thirdRowisInView ? 1 : 0.25,
          transition: "all 1s 0s",
        }}
      >
        <Image // ? Position absolute by default
          key={"help us"}
          src="/support.svg"
          alt="Pieces of a puzzle fitting together, representing the support people could provide to the organization"
          width={200}
          height={170}
          style={{
            objectFit: "cover",
          }}
        />

        <div className={classes["text"]}>
          <h2>Nous soutenir</h2>
          <p>
            Vos dons sont essentiels pour soutenir l'avancement du projet en
            finançant l'achat de matériels tels que du mobilier de rangement, du
            matériel informatique, des postes d'ordinateurs supplémentaires et
            une petite bibliothèque auto-gérée.
          </p>

          <p>
            Ils contribueront également au financement d'un poste
            d'animateur/trice de l'activité. Avec votre aide, nous pourrons
            soutenir la démarche participative des élèves impliqués et augmenter
            le volume d'activité pour accueillir un plus grand nombre d'élèves.
          </p>

          <Link href={"/nous-soutenir"}>
            <ArrowForwardRoundedIcon />
            EN SAVOIR PLUS
          </Link>
        </div>
      </section>

      {/* // ! ================ ROW 4 ================ */}
      {/* <section
        ref={fourthRowRef}
        animate={rowAnimation}
        style={{
          opacity: fourthRowisInView ? 1 : 0.25,
          transition: "all 1s 0s",
        }}
      >
          <Image // ? Position absolute by default
            key={"contact"}
            src="/contact.svg"
            alt="Picture of the author"
            width={350}
            height={200}
            style={{
              objectFit: "cover",
            }}
          />

          <div className={classes["text"]}>
            <h2>Contact</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
            officiis praesentium alias fugiat sit iusto id ab dolores eveniet
            accusamus perferendis fugit exercitationem optio numquam ex, ipsam
            tenetur enim amet?

            <Link href={"/contact"}>
              <ArrowForwardRoundedIcon />
              EN SAVOIR PLUS
            </Link>
          </div>

      </section> */}
    </main>
  );
};

export default MainContent;
