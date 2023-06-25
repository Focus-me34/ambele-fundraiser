import classes from "../../styles/container.module.scss";
import Image from "next/image";

const NousSoutenir = () => {
  return (
    <>
      <div className={classes["gradient-container"]} />

      <div className={classes["image-header-container"]}>
        <Image
          src="/nous-soutenir.jpg"
          alt="Qui sommes nous"
          fill={true}
          style={{ objectFit: "cover", objectPosition: "50% 55%" }}
        />
      </div>

      <div className={classes["content-container"]}>
        <h2>Un don, dans quel but ?</h2>

        <h3>
          Soutenir matériellement l'action, son optimisation et son développement, en participant à l'achat de matériels permettant :
        </h3>

        <ul>
          <li>
            une meilleure organisation et une « sécurisation » de l'activité :
            meuble de rangement fermé, petit matériel bureautique, remplacement
            des chaises en mauvais état, matériel informatique facilitant
            l'activité pour les élèves et les intervenants bénévoles (écran
            d'ordinateur de grande taille, caméra de visioconférence) mais aussi
            pour leur accompagnateur : imprimante scanner photocopieur - achat qui
            éviterait la perte de temps actuelle pour la réalisation de ces
            opérations dans un «cyber café » du quartier
          </li>
          <li>
            le développement matériel de l'activité en réponse aux attentes des
            adolescents : postes d'ordinateurs supplémentaires pour une
            familiarisation avec l'outil informatique, mise en place d'une petite
            bibliothèque auto-gérée
          </li>
        </ul>

        <h3>
          Contribuer au financement d'un poste d'animateur/trice de l'activité via
          l'association Coguifémine DD :
        </h3>

        <ul>
          <li>
            Projet de la création d'un poste à temps partiel, rémunéré et mis à
            disposition par l'association partenaire Coguifémine DD.
            <br />
            Véritable cheville-ouvrière du projet, missionné(e) sur les tâches
            administratives et d'animation de l'activité (suivi et accompagnement
            au quotidien de sa mise en œuvre), il/elle développerait ces missions
            en complémentarité et en lien avec le Lycée de jeunes filles et
            l'association Ambélé.
          </li>
          <li>
            Ce poste permettrait:
            <ul>
              <li>
                au coordinateur bénévole de Kobaya de se recentrer sur son rôle
                d'interface entre l'activité et l'établissement scolaire (liens
                avec l'équipe enseignante et les parents d'élèves),
              </li>
              <li>
                d'augmenter le volume d'activité : capter et accompagner un plus
                grand nombre d'élèves, condition sine qua non pour accueillir de
                nouveaux bénévoles français,
              </li>
              <li>
                de déployer de manière plus formelle et structurée la démarche
                participative des élèves impliqués.
              </li>
            </ul>
          </li>
        </ul>

      {/* <iframe
        id="haWidget"
        allowtransparency="true"
        src="https://www.helloasso.com/associations/ambele/formulaires/1/widget-bouton"
        style={{ width: "100%", height: "70px", border: "none" }}
      /> */}
      </div>
    </>
  );
};

export default NousSoutenir;
