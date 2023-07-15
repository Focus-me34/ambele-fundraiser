import Link from "next/link";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useAnimationControls } from "framer-motion";

import Image from "next/image";
import classes from "./MainContent.module.scss";
import containerClasses from "../../styles/container.module.scss";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { bottomNavigationActionClasses } from "@mui/material";

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
        animate={rowAnimation}
        style={{
          opacity: firstRowisInView ? 1 : 0.33,
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
          <div
            ref={firstRowRef}
            className={classes["trigger-in-view-animation"]}
          ></div>

          <h2>Qui Sommes nous?</h2>
          <p>
            Ambélé est une association française qui soutient et accompagne des
            initiatives d'éducation populaire en Guinée.
          </p>

          <p>Le nom signifie "on est ensemble" en malinké.</p>

          <p>
            L'éducation populaire vise l'accès aux savoirs pour tous et
            encourage la participation active de chacun, favorise la coopération
            et soutient l'exercice de la citoyenneté. Elle permet de compenser
            des différences de situations en étant vectrice d'égalité des
            chances.
          </p>

          <Link href={"/qui-sommes-nous"}>
            <ArrowForwardRoundedIcon />
            EN SAVOIR PLUS
          </Link>
        </div>
      </section>

      {/* // ! ================ ROW 2 ================ */}
      <section
        animate={rowAnimation}
        style={{
          opacity: secondRowisInView ? 1 : 0.33,
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
          <div
            ref={secondRowRef}
            className={classes["trigger-in-view-animation"]}
          ></div>

          <h2>Notre action</h2>
          <p>
            Notre action consiste en un accompagnement scolaire à distance via
            le numérique impliquant des bénévoles français et des élèves du
            secondaire d'un établissement scolaire public mixte de Conakry.
          </p>

          <p>
            Ces élèves en réussite scolaire ou aux potentiels avérés, mais
            fragilisés par des situations sociales et économiques défavorables,
            sont identifiés et orientés par leurs enseignants.
          </p>

          <p>
            L'action a été mise en place en février 2022 avec la participation
            de deux enseignants retraités bénévoles et quelques collégiens, puis
            s'est rapidement développée pour impliquer cinq bénévoles ainsi que
            8 à 15 élèves chaque semaine.
          </p>

          <p>
            Les matières scolaires concernées sont le français, les
            mathématiques, la physique, la chimie, la biologie et l'anglais.
            Elles dépendent des besoins identifiés des élèves et des ressources
            bénévoles disponibles.
          </p>

          <p>
            L'action a pour objectif de soutenir et renforcer la persévérance
            scolaire des élèves, par le maintien et le développement de leurs
            compétences scolaires, de leur confiance en soi et de leur
            motivation.
          </p>

          <p>
            Le projet consiste également à développer, dans le cadre du
            cyber-accompagnement, la démarche participative et citoyenne propre
            à l'éducation populaire.
          </p>

          <Link href={"/notre-action"}>
            <ArrowForwardRoundedIcon />
            EN SAVOIR PLUS
          </Link>
        </div>
      </section>

      {/* // ! ================ ROW 3 ================ */}
      <section
        animate={rowAnimation}
        style={{
          opacity: thirdRowisInView ? 1 : 0.33,
          transition: "all 1s 0s",
          marginBottom: "0rem",
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
          <div
            ref={thirdRowRef}
            className={classes["trigger-in-view-animation"]}
          ></div>

          <p>
            Vos dons sont essentiels pour soutenir l'avancement du projet. Ils
            permettront de le rendre viable sur le plan matériel, par l'achat de
            mobiliers et de matériel informatique adapté au fonctionnement de
            l'activité.
          </p>

          <p>
            Par une contribution au financement d'un poste d'animateur/trice de
            l'activité sur site, votre aide permettra le développement du volume
            d'activités et rendra possible l'organisation et le développement de
            la participation et de l'autonomisation des élèves.
          </p>

          <Link href={"/nous-soutenir"}>
            <ArrowForwardRoundedIcon />
            EN SAVOIR PLUS
          </Link>
        </div>
      </section>

      <div className={classes["partner-logo-container"]}>
        <Image
          src="/occitanie-cooperation.png"
          alt="Qui sommes nous"
          width={ 200 }
          height={ 200 }
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

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
