import classes from "../../styles/container.module.scss"
import Image from "next/image"
import Link from "next/link";
import Carousel from "@/components/UI/Carousel";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

// import { useState } from "react";

const NotreAction = () => {
  // const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselKobayaData = {
    caption: "Un paysage urbain alternant sans transition des environnements sociaux et d'habitats extrêmement contrastés" ,
    images: [
      { id: 1, src:"/IMG/kobaya-1.jpg" },
      { id: 2, src:"/IMG/kobaya-2.jpg" },
      { id: 3, src:"/IMG/kobaya-3.jpg" },
      { id: 4, src:"/IMG/kobaya-4.jpg" }
    ]
  }

  const carouselKobayaData2 = {
    caption: "Des séances à géométrie variable.",
    images: [
      { id: 1, src: "/IMG/physique-F.jpg" },
      { id: 2, src: "/IMG/hawa.jpg" },
      { id: 3, src: "/IMG/gpe-avec-S.jpg" },
      { id: 4, src: "/IMG/physique-E.jpg" },
      { id: 5, src: "/IMG/physique-D.jpg" },
      { id: 6, src: "/IMG/gpe-écran-1.jpg" },
      { id: 7, src: "/IMG/bintou.jpg" },
      { id: 8, src: "/IMG/maciré.jpg" },
      { id: 9, src: "/IMG/français-2.jpg" },
      { id: 10, src: "/IMG/thermomètre.jpg" },
      { id: 11, src: "/IMG/alain-1.jpg" },
      { id: 12, src: "/IMG/français-1.jpg" },
      { id: 13, src: "/IMG/math-1.jpg" },
    ],
  };

  return (
    <>
      <div className={classes["gradient-container"]} />

      <Image
        src="/IMG/physique-F.jpg"
        alt="Qui sommes nous"
        priority={true}
        width={2500}
        height={1500}
        style={{
          maxHeight: "50vh",
          objectFit: "cover",
          objectPosition: "50% 20%",
        }}
        className="img-100"
      />
      {/* </div> */}

      {/* <iframe
        id="haWidget"
        allowtransparency="true"
        src="https://www.helloasso.com/associations/ambele/formulaires/1/widget-bouton"
        style={{ width: "100%", height: "70px", border: "none" }}
      ></iframe>

      <iframe
        id="haWidget"
        allowtransparency="true"
        src="https://www.helloasso.com/associations/ambele/formulaires/1/widget"
        style={{ width: "100%", height: "750px", border: "none" }}
      ></iframe> */}

      <div className={classes["content-container"]}>
        <h2>
          Notre action « On est ensemble à Kobaya » : une action d'éducation
          populaire autour d'un cyber accompagnement scolaire
        </h2>
        <h3>On est ensemble à Kobaya, pourquoi ?</h3>
        <p>
          Dans un contexte local de fortes inégalités dans le maintien dans la
          scolarité des adolescents en fonction des ressources et situations
          familiales mais aussi en fonction du genre (
          <Link href="#section-quel-contexte">en savoir plus</Link>
          ), le projet consiste à mettre en relation des compétences
          pédagogiques de bénévoles français avec des besoins scolaires
          spécifiques d'élèves du secondaire du quartier par un accompagnement
          scolaire à distance via le support numérique.
        </p>
        <h4>Cette activité de cyber-accompagnement est au centre du projet.</h4>
        <p>
          Le projet s'appuie sur le constat de trois facteurs facilitants : la
          francophonie partagée, la proximité des systèmes et programmes
          scolaires entre les deux pays et la présence d'une couverture internet
          sur place.
        </p>
        <p>
          Le projet se construit en partenariat avec deux structures locales :
          un établissement scolaire mixte public du quartier accueillant des
          collégiens et des lycéens, dit Lycée de jeunes filles de Conakry et la
          Coguiféminine DD, ONG guinéenne dont le siège se situe dans le
          quartier (<Link href="#section-quels-acteurs">en savoir plus</Link>).
        </p>
        <p>
          Le projet s'adresse à des élèves en réussite scolaire ou aux
          potentiels reconnus par leurs enseignants, dans des situations de
          difficultés sociales et/ou économiques avérées et adhérant, ainsi que
          leurs parents, au projet (sa démarche et son organisation).
        </p>
        <p>
          Le projet consiste ainsi à compenser des insuffisances de ressources
          dans l'environnement de jeunes en mettant à leur disposition des temps
          de travail sécurisants et stimulants.
          <br />
          Il vise à favoriser, soutenir et renforcer leur persévérance scolaire.
          <br />
          Ses résultats attendus sont la consolidation de leur parcours scolaire
          par la montée en compétence scolaire, voire l'atteinte de l'excellence
          pour certain(e)s d'entre eux, mais aussi par la légitimation auprès de
          certains entourages familiaux du maintien dans la scolarité ou la
          poursuite d'études de l’élève. Dans ce cadre, l'action contribue à la
          lutte contre les phénomènes d'abandon contraint, en particulier pour
          les filles.
        </p>
        <p>
          Du fait des inégalités de genre dans le maintien dans la scolarité,
          une attention particulière est ainsi portée sur l'inscription de
          jeunes filles dans le projet, avec une intégration prioritaire de ces
          dernières.
        </p>
        <p>
          En revanche, du fait de contraintes inhérentes au projet (usage du
          virtuel, nécessité d'une relative maîtrise de la langue française par
          les jeunes accompagnés), l'activité ne peut pas concerner des élèves
          aux difficultés cognitives ou méthodologiques importantes.
        </p>
        <p>
          Le projet consiste aussi, sur la base de cette activité de
          facilitation de l'accès à la connaissance pour un public fragilisé, à
          décliner deux autres notions fondamentales de l'éducation populaire :
          l'autonomisation et la participation de tous dans la prise de
          responsabilité et de décision.
        </p>
        {/* // ! ===================================== */}
        <h3>On est ensemble à Kobaya, comment ?</h3>
        <p>
          L’activité concerne des élèves de 13 à 18 ans, provenant
          exclusivement, à ce jour, du Lycée de jeunes filles.
        </p>
        <ul>
          <p>Elle s'effectue :</p>
          <li>
            <p>après les cours, 4 après-midi par semaine</p>
          </li>
          <li>
            <p>
              dans un local proche du Lycée mis à disposition par la
              Coguiféminine DD (
              <Link href="#section-quels-acteurs">en savoir plus</Link>)
            </p>
          </li>
        </ul>
        <p>
          L'activité consiste en une aide technique permettant l'appropriation
          et la consolidation de savoirs, savoir faire et de procédés
          méthodologiques.
        </p>
        <p>
          Il ne s'agit pas de proposer un cours à part entière mais, à partir
          des notions travaillées en cours, d'expliciter des points mal compris,
          de renforcer des connaissances trop fragiles et faciliter
          l'acquisition de savoir faire ré-exploitables en matière de
          méthodologie.
        </p>
        <ul>
          <p>Elle se décline :</p>
          <li>
            <p>
              en séances hebdomadaires d'1 heure voire 1 heure 1 /2 réunissant
              autour d'une matière spécifique un(e) bénévole français(e) et de 1
              à 5 élèves maximum dans une même classe,
            </p>
          </li>
          <li>
            <p>
              par l'intermédiaire d'une application de visiophonie permettant la
              communication instantanée par oral, écrit et la transmission de
              documents
            </p>
          </li>
        </ul>
        <ul>
          <p>L'activité est encadrée bénévolement</p>
          <li>
            <p>en France par un membre de l'association Ambélé,</p>
          </li>
          <li>
            <p>à Kobaya par le proviseur du Lycée de Jeunes filles.</p>
          </li>
        </ul>
        <p>
          Les situations d'entraide parmi les élèves avant, pendant et après les
          séances ainsi que le réinvestissement des outils virtuels découverts
          sont réguliers.
        </p>
        <p>
          Ils sont encouragés et facilités par la possibilité d'accéder au local
          avant les séances programmées, en présence du coordinateur bénévole
          qui accompagne les jeunes dans leur autonomisation, par la mise à
          disposition de sites internet autour de la langue française et par
          leur prise en main de l'outil informatique.
        </p>
        <div className={classes["container-images-flex"]}>
          <Image
            src="/IMG/gpe-avec-Jérôme-ordi.jpg"
            alt="Accompagnement à la prise en main de l'outil informatique"
            width={500}
            height={380}
            className="img-100"
          />

          {/* // ! IMAGE INUTILISABLE*/}
          {/* <Image
            src="/IMG/conseil-de-maison.png"
            alt="Un conseil de maison réunissant des jeunes, des enseignants et le coordinateur local"
            width={500}
            height={380}
          /> */}
        </div>
        {/* // ! ===================================== */}
        <h3 id="section-quel-contexte">Quel contexte ?</h3>
        <p>
          Le Grand Conakry dans lequel se situe le quartier de Kobaya regroupe
          50% de la population urbaine de Guinée sur 1% du territoire. Il compte
          environ 2,3 millions d’habitants avec une croissance exponentielle
          (+100% d'habitants en 10 ans).
        </p>
        <p>
          A Conakry la population est majoritairement jeune, à l'image du pays
          où plus de 60% de la population a moins de 18 ans.
        </p>
        <p>
          La Guinée souffre globalement d'une pauvreté endémique (près de la
          moitié de la population vit en-dessous du seuil de pauvreté),
          problématique économique à laquelle s'ajoutent de lourdes difficultés
          cumulées, sociales, éducatives, sanitaires et sociétales comme en
          témoigne la position de la Guinée au bas du classement IDH (Indice de
          Développement Humain) : 178ème/189 pays en 2019 (chiffres FMI).
        </p>
        <p>
          Dans le domaine éducatif en particulier, des progrès « quantitatifs »
          ont cependant été réguliers et importants au cours des décennies
          précédentes : le taux brut de scolarisation était de 91% en 2019.
        </p>
        <p>
          Désormais, la problématique, spécifiquement dans les zones urbaines
          comme Conakry, est moins celle de l'accès que celle du maintien dans
          la scolarité : le taux d'achèvement des écoles primaires se situe
          autour de 54%, avec de fortes disparités entre les genres -46% pour
          les filles contre 64% pour les garçons (chiffres Unicef).
        </p>
        <p>
          En 2022, le taux de réussite du brevet a été de 25% , celui du
          baccalauréat de 30%.
        </p>
        <p>
          Tous ces facteurs font de Kobaya un quartier à l'image de Conakry :
          jeune, très dense, aux aménagements insuffisants ou dégradés, aux
          équipements publics sociaux, médicaux et éducatifs exsangues voire
          inexistants. Il est marqué aussi par de très forts contrastes et
          inégalités en matière de logement, de situations sociales et
          économiques.
        </p>
        <p>
          La population du quartier est caractérisée par une forte proportion de
          familles nombreuses : on compte environ 9800 ménages pour 52000
          habitants.
        </p>
        <p>
          Originairement peuplé de pécheurs et d'agriculteurs, un grand nombre
          de ses habitants tire encore de faibles revenus du secteur de la pêche
          (beaucoup moins de l'agriculture du fait de la montée des eaux salines
          et de l’appropriation des terrains pour l’extension de la capitale),
          d'autres, de l'économie informelle. Seule 10% de la population
          appartiendrait aux classes supérieures.
        </p>
        <p>
          De ce fait, et en raison également de la construction de résidences
          secondaires par de nombreux émigrés originaires du quartier installés
          en occident, l'habitat est particulièrement disparate, alternant des
          zone d'habitats extrêmement rudimentaires (maisons exiguës de plain
          pied en béton et tôle, parfois sans eau ni électricité), immeubles et
          villas très confortables.
        </p>
        <Carousel
          carouselData={carouselKobayaData}
          caption="Un paysage urbain alternant
          sans transition des environnements sociaux et d'habitats extrêmement
          contrastés"
        />
        <p>
          En matière d'éducation, le quartier compte 5 écoles publiques pour 40
          écoles privées. La plupart des parents économiquement les moins en
          difficulté inscrivent leurs enfants dans ces établissements afin
          d'échapper aux difficultés matérielles des écoles publiques : manque
          d'équipement et de matériel pédagogiques et effectif pléthorique.
        </p>
        <p>
          Face aux freins cumulés dans le maintien dans la scolarité et en
          absence de soutien social ou éducatif alternatif, de nombreux jeunes
          mineurs du quartier abandonnent l'école pour de petits travaux
          journaliers très faiblement rémunérateurs ou, pour les jeunes filles,
          en raison de mariages précoces. D'autres rejoindraient la cohorte des
          postulants guinéens à l'émigration clandestine.
        </p>
        <p>
          De fait, la Guinée se situe régulièrement parmi les 4 premières
          nations (et au premier rang du continent africain) en matière de
          demandes d'asile en France.{" "}
        </p>
        <p>
          En 2021, le Lycée de Jeunes filles a effectué une recherche sur les
          causes de l'abandon et du redoublement au sein de l'établissement.
        </p>
        <p>
          Les raisons les plus souvent invoquées par les élèves concernés ont
          été le mariage précoce, la manque de soutien des parents, la nécessité
          de contribuer économiquement au budget familial et les frais trop
          élevés du matériel de scolarité.
        </p>
        <p>
          L'équipe enseignante a mentionné également le facteur aggravant de la
          mauvaise maîtrise par les élèves de la langue française qui serait à
          corréler avec l'absence d'usage de la langue française dans la cellule
          familiale.
        </p>
        <p>
          Dans les faits, la proportion de parents n'ayant pas été eux-mêmes
          scolarisés est sur-représentée dans le groupe des parents des élèves
          ayant redoublé ou abandonné leur scolarité.
        </p>
        {/* // ! ===================================== */}
        <h3 id="section-quels-acteurs">Quels acteurs ?</h3>
        <p>
          Le projet repose sur un partenariat organisationnel et opérationnel
          entre 3 structures : une française et deux guinéennes.
        </p>
        <ul>
          <h4>En France :</h4>
          <li>
            <p>
              l'association Ambélé (
              <Link href="/qui-sommes-nous">qui sommes nous ?</Link>)
            </p>
          </li>
          <p>
            Ambélé prend en charge les frais mensuels de connexion internet sur
            site (via un don à l'ONG partenaire Coguiféminine).
          </p>
          <p>
            Raphaël Zajtmann, membre du bureau d'Ambélé (
            <Link href="/qui-sommes-nous">qui sommes nous ?</Link>) assure
            bénévolement la coordination du volet français du projet : recherche
            (dans un premier temps) de bénévolat, accompagnement et suivi des
            interventions bénévoles, co-réalisation en lien avec le coordinateur
            sur site des emplois du temps.
          </p>
          <p>
            Il se rend régulièrement sur place pour accompagner la structuration
            du projet : aide à l'organisation matérielle, rencontres d'acteurs
            locaux pour l'insertion du projet dans son environnement, animation
            de réunions d'informations auprès des élèves et des enseignants et
            de réunions de concertation (conseil de maison).
          </p>
          <h4>À Conakry :</h4>
          <li>
            <p>Le Lycée de Jeunes Filles de Kobaya</p>
          </li>
          <p>
            Situé au cœur du quartier, le lycée accueille 432 élèves dont 270
            collégiens et 162 lycéens, encadrés par une équipe enseignante de 38
            professeurs.
          </p>

          <Image
            src="/IMG/lycée-1.jpg"
            alt="Le Lycée de Jeunes filles de Kobaya (bâtiment de gauche)"
            width={500}
            height={380}
            className="img-100"
          />
          <p className={classes["media-caption"]}>
            Le Lycée de Jeunes filles de Kobaya (bâtiment de gauche)
          </p>

          <Image
            src="/IMG/lycée-2.jpg"
            alt="Entrée principale du Lycée de Jeunes filles"
            width={500}
            height={380}
            className="img-100"
          />
          <p className={classes["media-caption"]}>
            Entrée principale du Lycée de Jeunes filles
          </p>

          <p>
            M. Jérôme Mbemba Millimouno, également membre de la Coguiféminine DD
            (voir ci-dessous), est le coordinateur bénévole de l'action sur
            site.
          </p>
          <p>
            Il fait le lien avec l'équipe enseignante du Lycée pour identifier
            les élèves potentiels, suivre l’accompagnement des élèves concernés
            et évaluer son impact.
          </p>
          <p>
            Il est l'interlocuteur des parents des élèves accompagnés, auprès
            desquels il explicite le projet, son fonctionnement et ses objectifs
            afin de lever les freins éventuels à la participation de leurs
            enfants -notamment pour les jeunes filles, pour lesquelles les
            réticences parentales sont parfois plus importantes.
          </p>
          <p>
            Il accompagne les élèves dans leur participation à l'activité et
            dans leurs prises de responsabilité.
          </p>
          <p>
            Il est responsable du suivi administratif de l'action en lien avec
            le bénévole de l'association Ambélé avec lequel il est en
            communication quasi quotidienne.
          </p>
          <li>
            <p>
              La coalition guinéenne Coguifeminine DD (Coalition Guinéenne des
              Femmes pour les Mines et le Développement Durable)
            </p>
          </li>
          <p>
            Cette association sans but lucratif, non confessionnelle et
            apolitique a pour mission de promouvoir et renforcer la place des
            femmes dans la gestion du secteur minier, des ressources naturelles
            et, d'une manière générale, dans la société guinéenne.
          </p>
          <p>
            Parmi les leviers retenus, figurent « la promotion de l'éducation à
            travers la formation des enfants, des jeunes filles et garçons »
            ainsi que « la promotion démocratique et citoyenne ».
          </p>
          <p>
            C'est dans ce cadre que s'inscrit le partenariat avec cette ONG.{" "}
          </p>
          <p>
            La Coguiféminine DD assume la responsabilité de l'activité sur site.
          </p>
          <p>
            Elle désigne et met à disposition un coordinateur référent du projet
            sur site.
          </p>
          <p>
            L'activité se développe dans le local de son siège social, situé au
            sein de la « Maison des jeunes de Kobaya », avec une mise à
            disposition de son mobilier et de son équipement informatique.
          </p>

          <Image
            src="/IMG/maison-des-jeunes.jpg"
            alt="L'entrée de la Maison des jeunes de Kobaya"
            width={500}
            height={380}
            className="img-100"
          />
          <p className={classes["media-caption"]}>
            L'entrée de la Maison des jeunes de Kobaya
          </p>

          <Image
            src="/IMG/local-activité.jpg"
            alt="Local (Coguiféminine DD) où se déroule l'activité"
            width={500}
            height={380}
            className="img-100"
          />
          <p className={classes["media-caption"]}>
            Local (Coguiféminine DD) où se déroule l'activité
          </p>

          <p>
            Les rôles respectifs de ces acteurs ainsi que les
            modalités de leur coordination ont été formalisés par une
            convention.
          </p>
        </ul>
        {/* // ! ===================================== */}
        <h3>Quels résultats ?</h3>
        <p>
          Le projet s'est mis en place, pas à pas, à partir du mois de février
          2022.
        </p>
        <p>
          Impliquant initialement 2 enseignants retraités bénévoles français et
          quelques collégiens, l’activité a rapidement concerné 5 bénévoles de
          profils et compétences divers et de 8 à 15 élèves (collégiens et
          lycéens) par semaine.
        </p>
        <p>
          Afin d'avoir un véritable impact sur la scolarité des jeunes et d'en
          permettre l'évaluation, les élèves inscrits s'engagent pour une séance
          hebdomadaire pour au moins un trimestre.
        </p>
        <p>
          27 élèves au total ont participé ou participent au projet, dont 15
          collégiens et 12 lycéens, 13 filles et 14 garçons, la plupart d'entre
          eux au cours d'au moins 2 trimestres consécutifs.
        </p>
        <p>
          Les matières scolaires concernées sont liées aux ressources bénévoles
          et aux demandes des élèves.
        </p>
        <p>
          Il s'agit, à ce jour, du français, des mathématiques, de la physique,
          de la chimie, de la biologie et de l'anglais.
        </p>

        <h3>Un cyber accompagnement sous quelles formes ?</h3>
        <p>
          Différents types d’activités et de supports pédagogiques sont proposés
          en fonction des besoins identifiés, des expériences et affinités des
          bénévoles, en lien avec le coordinateur sur site.
        </p>

        <p>Il peut s'agir :</p>
        <ul>
          <li>
            <p>
              d'une reprise, à la demande des élèves, de notions vues en cours
              (explicitation, entraînement),
            </p>
          </li>

          <li>
            <p>
              d'un travail en commun sur des exercices d’entraînement –devoirs
              transmis par les enseignants ou exercices proposés par le/la
              bénévole sur des thématiques abordées en cours,
            </p>
          </li>

          <li>
            <p>de temps de conversation en français ou en anglais,</p>
          </li>

          <li>
            <p>
              de la réalisation par un(e) bénévole de fiches synthétisant les
              informations principales abordées pendant la séance, puis
              transmises aux élèves concernés.
            </p>
          </li>
        </ul>

        <h3 style={{ marginBottom: "1rem" }}>
          Exemples de séances de cyber-accompagnement
        </h3>

        <video src="/VIDEOS/vidéo-physique-1.mp4" controls="true" />
        <p className={classes["media-caption"]}>
          Matière : physique, classe de 8ème (équivalent 5ème française) Travail
          en commun sur un devoir (exercices écrits) : coefficient de dilatation
          des métaux.
        </p>
        <video src="/VIDEOS/vidéo-math-1.mp4" controls="true" />
        <p className={classes["media-caption"]}>
          Matière : mathématiques, classe de 11ème (équivalent 2nde française)
          Exercice de mise en pratique d'un cours  : inégalités et encadrement.
        </p>
        <video src="/VIDEOS/vidéo-français-2.mp4" controls="true" />
        <p className={classes["media-caption"]}>
          Matière : français, classe de 9ème (équivalent de 4ème française)
          Correction d'exercices d'écriture transmis par la bénévole avant la
          séance sur des notions travaillées en cours (la description et le
          récit).
        </p>
        <video src="/VIDEOS/vidéo-math-3.mp4" controls="true" />
        <p className={classes["media-caption"]}>
          Matière : mathématiques, classe de Terminale Travail en commun sur des
          exercices de mise en pratique d'un cours : fonction exponentielle.
        </p>
        <video src="/VIDEOS/vidéo-math-2.mp4" controls="true" />
        <p className={classes["media-caption"]}>
          Matière : mathématiques, classe de 12ème (équivalent 1ère française)
          Explicitation d'une notion travaillée depuis peu en cours : résolution
          d’une inéquation.
        </p>
        <video src="/VIDEOS/vidéo-français-1-définitif.mp4" controls="true" />
        <p className={classes["media-caption"]}>
          Matière travaillée : français, classe de 9ème (équivalent de 4ème
          française) Correction d’exercices d’entraînement effectués avant la
          séance (lexique de l’espace/du lieu puis des sensations), dans le
          cadre d’un travail régulier sur des fiches d’enrichissement du
          vocabulaire transmises par la bénévole.
        </p>
        <video src="/VIDEOS/vidéo-anglais.mp4" controls="true" />
        <p className={classes["media-caption"]}>
          Matière : anglais, classe de 11ème (équivalent 2nde française)
          Conversation autour du vocabulaire du rythme de la journée.
        </p>

        <Carousel carouselData={carouselKobayaData2} />

        {/* // ! ===================================== */}
        {/* // ! TEMOIGNAGE CAROUSEL */}
        <div className="temoignages">
          <h3>
            Des effets quantitatifs et qualitatifs identifiés par les acteurs...
          </h3>

          <div className="temoignage">
            <h4>
              Jérôme Mbemba Millimouno, proviseur du Lycée de Jeunes Filles de
              Kobaya
            </h4>
            <p>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "5rem",
                  color: "var(--dark-grey)",
                  transform: "translateY(1rem)",
                }}
              >
                « 
              </span>
              Je suis assistant technique bénévole de l’activité de
              cyber-accompagnement auprès des élèves déshérités du quartier
              Kobaya depuis près de 2 ans. Ces élèves appartiennent à des
              familles dans lesquelles bon nombre a abandonné les études à cause
              d’échecs répétés et fautes de moyens financiers. Ainsi, ces élèves
              représentent bien souvent l’espoir de leur famille.
            </p>
            <p>
              Ces cours consistent à relever le niveau d’acquisition des
              compétences académiques par une formation, une consolidation voire
              un perfectionnement.
            </p>
            <p>
              Durant ces deux années scolaires, la plupart des participants a
              progressé significativement parmi leurs camarades de classe. Au
              dernier classement d’évaluation de fin d’année 2022-2023, quinze
              d’entre eux occupent les meilleurs rangs. Parmi les nombreux
              exemples, je peux citer les cas d’un élève passé de la 7ème place
              de sa classe à la 1ère (parmi 48 camarades) et d’une autre passée
              de la 8ème place à la 1ère (parmi 68 élèves). 
            </p>
            <p>
              L’on doit ces résultats à l’apport des bénévoles du projet : des
              hommes et des femmes capables, responsables et compétent(e)s.
            </p>
            <p>
              Grâce à ce projet, les élèves rencontrent des personnes d’âge et
              de culture différentes des leurs, ce qui est très enrichissant
              pour eux.
            </p>
            <p>
              Aujourd’hui le monde est ouvert, c’est pourquoi ces cours à
              distance nous aident beaucoup.{" "}
            </p>
            <p>
              Face à l’injustice de ne pas pouvoir réaliser de bonnes études en
              Guinée faute de moyens suffisants, bon nombre de jeunes éprouvent
              de la colère et l’envie d’immigrer en Europe.
            </p>
            <p>
              Pour les enfants, suivre ces cours en direct, c’est comme étudier
              en Occident.
            </p>
            <p>
              Malgré mon titre de bénévolat, mon intérêt est total pour le
              projet.
            </p>
            <p>
              Je me réjouis d’avoir des confrères d’Europe qui apportent aux
              jeunes guinéens du soutien pour préparer leur avenir.
              <span
                style={{
                  color: "var(--dark-grey)",
                  transform: "scale(1.6)",
                  display: "inline-block",
                }}
              >
                  »
              </span>
            </p>
          </div>

          <div className="temoignage">
            <h4>Hawa Dounamou, participante</h4>
            <p>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "5rem",
                  color: "var(--dark-grey)",
                  transform: "translateY(1rem)",
                }}
              >
                « 
              </span>
              Je fais la 9ème année [équivalent de 4ème française] du Lycée de
              Jeunes filles de Kobaya. <br />
              Je participe à ce soutien depuis deux années déjà.
            </p>
            <p>
              Depuis ce temps, j’ai remarqué beaucoup de progrès dans mon niveau
              de français et je suis très heureuse de ça. En effet, ce soutien
              m’intéresse parce qu’il me permet d’améliorer mes connaissances et
              d’être meilleure qu’avant, et aussi il nous permettra de nous
              défendre dans d’autres matières à l’avenir. 
            </p>
            <p>
              Ce projet m’intéresse aussi car je peux correspondre avec Madame
              Sophie [bénévole] qui est une adulte d’une autre culture que moi.
              Je peux mieux comprendre la culture française.
            </p>
            <p>
              Vraiment, je remercie Madame Sophie [bénévole] pour le temps
              précieux qu’elle nous accorde.
            </p>

            <p>
              Je participe aussi au projet en aidant Monsieur Millimouno pour le
              classeur du soutien et pour ranger la salle. Pour moi, c’est bien
              d’aider, je me sens utile.
              <span
                style={{
                  color: "var(--dark-grey)",
                  transform: "scale(1.6)",
                  display: "inline-block",
                }}
              >
                  »
              </span>
            </p>
          </div>

          <div className="temoignage">
            <h4>Danièle Grisot, intervenante bénévole</h4>
            <p>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "5rem",
                  color: "var(--dark-grey)",
                  transform: "translateY(1rem)",
                }}
              >
                « 
              </span>
              Professeure de mathématiques retraitée depuis peu, passionnée par
              les mathématiques et appréciant de rester en contact avec des
              jeunes, j’ai répondu favorablement à la proposition de Raphaël
              l’an dernier, de travailler un après-midi par semaine avec ces
              lycéens et lycéennes de Conakry.
            </p>
            <p>
              Grâce à Skype, et à mon tableau disposé devant l’ordinateur - je
              trouve fascinant de communiquer ainsi grâce aux nouvelles
              technologies, et de faire des mathématiques avec des jeunes qui
              sont à plusieurs milliers de kilomètres de chez moi ! -nous nous
              retrouvons chaque semaine depuis un an maintenant……pour faire des
              maths !
            </p>
            <p>
              Il est à noter que Jérôme est présent et veille attentivement au
              bon déroulement de la séance, ce qui est vraiment appréciable ;
              j’apprécie aussi bien sûr la disponibilité de Raphaël, très
              investi dans le projet, qui coordonne nos rencontres.
            </p>
            <p>
              L’an passé les jeunes étaient repartis en deux groupes, parfois
              assez nombreux et même si tous ne participaient pas forcément, il
              y avait un petit groupe motivé qui posait des questions, montrait
              son désir de progresser.
            </p>
            <p>
              Si je peux me permettre de comparer avec nos jeunes élèves
              français, je trouve qu’ils ont un niveau d'algèbre bien
              supérieur , que ce soit dans le calcul numérique ou littéral… très
              appréciable !
            </p>
            <p>
              Ils m’ont fait progresser de mon côté dans l’usage du tableau et
              de sa position face à l’ordinateur: un véritable échange :)
              <span
                style={{
                  color: "var(--dark-grey)",
                  transform: "scale(1.6)",
                  display: "inline-block",
                }}
              >
                  »
              </span>
            </p>
          </div>

          <h3>...mais aussi des limites et des difficultés matérielles</h3>

          <div className="temoignage">
            <h4>
              Jérôme Mbemba Millimouno, proviseur du Lycée de Jeunes Filles de
              Kobaya
            </h4>
            <p>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "5rem",
                  color: "var(--dark-grey)",
                  transform: "translateY(1rem)",
                }}
              >
                « 
              </span>
              Nos difficultés se résument par un local trop restreint, un manque
              de matériel logistique, de supports adéquats au cours, de matériel
              didactique (livres, manuels…).
            </p>

            <p>
              Notre ambition est aussi de toucher un plus grand nombre d’enfants
              de familles pauvres qui veulent réussir leur vie à travers les
              études. Je souhaiterais que des bienfaiteurs, des donateurs, des
              partenaires d’Occident soutiennent ce projet presque pour sauver,
              en changeant les vies d’enfants de familles pauvres de Guinée.
              <span
                style={{
                  color: "var(--dark-grey)",
                  transform: "scale(1.6)",
                  display: "inline-block",
                }}
              >
                  »
              </span>
            </p>
          </div>

          <div className="temoignage">
            <h4>Hawa Dounamou, participante</h4>
            <p>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "5rem",
                  color: "var(--dark-grey)",
                  transform: "translateY(1rem)",
                }}
              >
                « 
              </span>
              C’est un beau projet, c’est pourquoi je pense que ce projet serait
              encore mieux s’il y avait plus de matières et aussi une grande
              salle, des ordinateurs pour apprendre l’informatique et une
              bibliothèque. Et, tout comme nous, ça intéressera beaucoup
              d’autres élèves. J’aime ce projet et je veux qu’il s’agrandisse.
              <span
                style={{
                  color: "var(--dark-grey)",
                  transform: "scale(1.6)",
                  display: "inline-block",
                }}
              >
                  »
              </span>
            </p>
          </div>

          <div className="temoignage">
            <h4>Danièle Grisot, intervenante bénévole</h4>
            <p>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "5rem",
                  color: "var(--dark-grey)",
                  transform: "translateY(1rem)",
                }}
              >
                « 
              </span>
              Cette année, les jeunes sont moins nombreux, mais sérieux et
              toujours intéressés : ils savent ce pourquoi ils sont là et les
              questions sont pertinentes. Il est parfois arrivé que la connexion
               à internet soit délicate  mais la nouvelle caméra  a rendu la
              communication nettement plus facile..
              <span
                style={{
                  color: "var(--dark-grey)",
                  transform: "scale(1.6)",
                  display: "inline-block",
                }}
              >
                  »
              </span>
            </p>
          </div>

          {/* // ! TEMOIGNAGE A CE SATDE SONT TERMINES */}
          <p>
            De fait, l'activité a rapidement atteint ses limites matérielles et
            a été l'objet d'une forme de « crise de croissance ».
          </p>
          <p>
            Les propositions spontanées de bénévolat en France ont été
            croissantes et, sur place, des élèves d'autres établissements ont
            sollicité le Lycée de Jeunes filles sans qu'il n'ait été ni ne soit
            matériellement possible de saisir ces opportunités et répondre à ces
            attentes.
          </p>
          <p>
            Des demandes et propositions récurrentes en matière d'autonomisation
            des jeunes sont restées sans réponse: accès à plusieurs postes
            informatiques pour se familiariser avec l'outil, accès simplement à
            un espace de travail adapté pour un travail scolaire autonome en
            groupe, consultation et emprunt de livres et manuels par la mise en
            place d'une bibliothèque auto-gérée...
          </p>

          <p>Cela, en raison:</p>
          <ul>
            <li>
              <p>
                d'une insuffisance de ressource humaine bénévole sur site pour
                accompagner dans la durée la démarche participative ainsi que le
                potentiel développement de l'activité : le peu de temps que peut
                dégager actuellement le coordinateur bénévole, s'ajoutant à ses
                missions de direction du lycée, est dévolu au suivi du
                fonctionnement de l'activité de cyber-accompagnement existante,
              </p>
            </li>
            <li>
              <p>
                de contraintes matérielles rédhibitoires ou freinantes : manque
                de matériel bureautique (imprimante, photocopieur et scanner) et
                informatique (écran d'ordinateur de taille insuffisante,
                matériel de prise de vue et de son de qualité insuffisante),
                inconfort du local (exiguïté et manque d’équipement du local,
                forte chaleur, visite de rongeurs dégradant le matériel...)
              </p>
            </li>
          </ul>

          <p>
            Du fait de ces difficultés techniques, et de l'aspect expérimental
            et inédit de l'activité pour les acteurs locaux, l'organisation
            matérielle a été régulièrement ajustée au cours des premiers
            mois (organisation de l'espace, nombre d'élèves par séance...) Il
            est progressivement apparu que, en l'état, la configuration avec 3
            élèves maximum face à la caméra était la plus adaptée.
          </p>
          <p>
            Ces limites matérielles et ces ajustements réguliers ont été
            dissuasifs pour certains élèves accompagnés et sans doute pour des
            participants potentiels.
          </p>

          <video src="/VIDEOS/video-eleve-debout.mp4" controls="true" />
          <p className={classes["media-caption"]}>
            Des conditions de travail parfois précaires : deux collégiennes se
            partageant une même chaise, une autre debout.
          </p>
        </div>

        <Link href={"/"} className="go-back-btn">
          <ArrowForwardRoundedIcon />
          Revenir à l'accueil
        </Link>
      </div>
    </>
  );
};

export default NotreAction;
