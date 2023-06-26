import classes from "../../styles/container.module.scss"
import Image from "next/image"

const QuiSommesNous = () => {
  return (
    <>
      <div className={classes["gradient-container"]} />

      <Image
        src="/qui-sommes-nous.jpg"
        alt="Qui sommes nous"
        priority={true}
        width={2500}
        height={1500}
        style={{ maxHeight: "50vh", objectFit: "cover", objectPosition: "50% 40%" }}
        className="img-100"
      />

      <div className={classes["content-container"]}>
        <h2>Qui sommes nous?</h2>

        <p>
          Ambélé (on est ensemble) est une association montpelliéraine Loi 1901
          de solidarité internationale par l’éducation populaire.
        </p>

        <p>
          Ambélé a pour objet de soutenir et accompagner des initiatives et des
          démarches d’éducation populaire d’habitants de l'Afrique subsaharienne
          de l'Ouest francophone. Son projet se déploie actuellement en
          République de Guinée à travers un appui logistique et un transfert de
          compétences, notamment par la mise en synergie de ressources humaines
          bénévoles françaises et guinéennes.
        </p>

        {/* // ! ---------------------------------- */}
        <h2>Pourquoi "Ambélé" ?</h2>

        <p>
          « Ambélé » signifie « on est ensemble » en malinké, une des trois
          langues les plus parlées en République de Guinée.
        </p>

        <p>
          « On est ensemble » est une formule de politesse usitée dans les pays
          d’Afrique francophone qui exprime la réalité d’interdépendance des uns
          par rapport aux autres et suggère la nécessité qui en découle de
          renforcer la solidarité de tous pour l’intérêt de chacun.
        </p>

        {/* // ! ---------------------------------- */}
        <h2>Et l'éducation populaire ?</h2>

        <p>
          L'éducation populaire qui puise ses racines dans la philosophie des
          Lumières, son ambition d'égalité et d'universalisme se déploie
          parallèlement, voire de manière complémentaire, aux systèmes
          d'éducation traditionnels et institutionnels, afin de permettre à
          chacun de choisir et de construire sa place dans la société.
        </p>

        <p>
          L'éducation populaire qui puise ses racines dans la philosophie des
          Lumières, son ambition d'égalité et d'universalisme se déploie
          parallèlement, voire de manière complémentaire, aux systèmes
          d'éducation traditionnels et institutionnels, afin de permettre à
          chacun de choisir et de construire sa place dans la société.
        </p>

        <h3>Une éducation pour tous</h3>
        <p>
          Elle est éducative et populaire dans la mesure où elle vise l'accès
          aux savoirs et à la culture pour tous, particulièrement les plus
          fragiles.
        </p>

        <h3>Une éducation par tous</h3>
        <p>
          Elle s'appuie sur la participation active de tous, elle favorise et
          soutient la coopération et encourage l'exercice de la citoyenneté.
        </p>

        <h3>Une éducation, autrement</h3>
        <p>
          Développée par des structures à but non lucratif, elle explore, par
          l'expérimentation, des champs éducatifs alternatifs.
        </p>
        <p>
          L'éducation populaire, en corrigeant des inégalités de fait entre des
          individus d'une même communauté, est vecteur d'égalité des chances.
        </p>

        {/* // ! ---------------------------------- */}
        <h2>
          Ambélé, l'éducation populaire comme trait d'union entre la France et
          l'Afrique de l'Ouest francophone
        </h2>

        <p>
          Le bureau de l'association Ambélé est composé de professionnels de
          l'éducation ou de l'éducation populaire, ayant en commun leurs liens
          avec le Nord-Ouest du continent africain.
        </p>

        <p>
          Raphaël Zajtmann, président fondateur de l'association travaille dans
          le domaine de l'animation sociale depuis près de 20 ans. Titulaire
          d'un Desjeps (Diplôme d'Etat supérieur de la jeunesse, de l'éducation
          populaire et du sport), il est actuellement chef de service dans
          le pôle Animation de la Vie Sociale de l'association Gammes
          (Montpellier). A ce titre, il supervise les actions d'un centre social
          et de deux EVS (espaces de vie sociale). Depuis 2015, il effectue de
          très réguliers séjours au Sénégal et en Guinée, notamment pour
          accompagner bénévolement des projets locaux d'éducation populaire.
        </p>
      </div>
    </>
  );
}

export default QuiSommesNous;
