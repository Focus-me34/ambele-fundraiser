import ButtonCTA from "@/components/UI/ButtonCTA";
import Image from "next/image";
import classes from "../../styles/container.module.scss";


const NousSoutenir = () => {
  return (
    <>
      <div className={classes["gradient-container"]} />

      {/* <div className={classes["image-header-container"]}> */}
        <Image
          src="/nous-soutenir.jpg"
          alt="Qui sommes nous"
          width={2500}
          height={1500}
          style={{ maxHeight: "50vh", objectFit: "cover" }}
        />
      {/* </div> */}

      <div className={classes["content-container"]}>
        <h2>Un don, dans quel but ?</h2>

        <h3>
          Soutenir matériellement l'action, son optimisation et son
          développement, en participant à l'achat de matériels permettant :
        </h3>

        <ul>
          <li>
            <p>
              une meilleure organisation et une « sécurisation » de l'activité :
              meuble de rangement fermé, petit matériel bureautique,
              remplacement des chaises en mauvais état, matériel informatique
              facilitant l'activité pour les élèves et les intervenants
              bénévoles (écran d'ordinateur de grande taille, caméra de
              visioconférence) mais aussi pour leur accompagnateur : imprimante
              scanner photocopieur - achat qui éviterait la perte de temps
              actuelle pour la réalisation de ces opérations dans un «cyber
              café » du quartier.
            </p>
          </li>
          <li>
            <p>
              le développement matériel de l'activité en réponse aux attentes
              des adolescents : postes d'ordinateurs supplémentaires pour une
              familiarisation avec l'outil informatique, mise en place d'une
              petite bibliothèque auto-gérée.
            </p>
          </li>
        </ul>

        <h3>
          Contribuer au financement d'un poste d'animateur/trice de l'activité
          via l'association Coguifémine DD :
        </h3>

        <ul>
          <li>
            <p>
              Projet de la création d'un poste à temps partiel, rémunéré et mis
              à disposition par l'association partenaire Coguifémine DD.
              Véritable cheville-ouvrière du projet, missionné(e) sur les tâches
              administratives et d'animation de l'activité (suivi et
              accompagnement au quotidien de sa mise en œuvre), il/elle
              développerait ces missions en complémentarité et en lien avec le
              Lycée de jeunes filles et l'association Ambélé.
            </p>
          </li>

          <p>Ce poste permettrait:</p>
          <li>
            <p>
              au coordinateur bénévole de Kobaya de se recentrer sur son rôle
              d'interface entre l'activité et l'établissement scolaire (liens
              avec l'équipe enseignante et les parents d'élèves),
            </p>
          </li>
          <li>
            <p>
              d'augmenter le volume d'activité : capter et accompagner un plus
              grand nombre d'élèves, condition sine qua non pour accueillir de
              nouveaux bénévoles français,
            </p>
          </li>
          <li>
            <p>
              de déployer de manière plus formelle et structurée la démarche
              participative des élèves impliqués.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NousSoutenir;
