import { Icon } from "@/types/enums";
import type { Project, SoftSkills } from "@/types/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Clone de Netflix",
    intro: "Clone de l'application Netflix avec de React JS.",
    slug: "clone-netflix",
    des: `Clone de l'application Netflix avec de React JS.
    </br>  </br>
    <h3>Caractéristiques:</h3>
    </br>
    - Création de compte  </br>
    - Connexion / déconnexion  </br>
    - Affichage des films et séries tendances  </br>
    - Découpage des catégories  </br>
    - Fonctionnalité de recherche  </br>
    - Ajout de films à la liste des favoris  </br>
    - Application responsive orientée mobile  </br>

    `,
    img: "/src/assets/projects/netflix.png",
    link: "https://netflix-react-clone-axel-po.vercel.app/",
    linkCode: "https://github.com/axel-po/netflix-react-clone",
    iconLists: [Icon.REACT, Icon.JAVASCRIPT, Icon.TAILWIND_CSS],
    previewsThumbnail: [
      "/images/previews/netflix/01.webp",
      "/images/previews/netflix/02.png",
      "/images/previews/netflix/03.png",
    ],
    year: 2022,
  },
  {
    id: 2,
    title: "Taxi Road",
    intro:
      "Taxi Road est un jeu de réalité augmenté. C'est un jeu de course de taxi dynamique où les joueurs endossent le rôle de chauffeurs de taxi déterminés à livrer leurs passagers à bon port dans un monde urbain animé. Dans ce jeu, les joueurs doivent naviguer à travers le trafic dense, éviter les obstacles et chercher le chemin le plus rapide pour atteindre leur destination",
    slug: "taxi-road",
    des: `Taxi Road est un jeu de réalité augmenté. C'est un jeu de course de taxi dynamique où les joueurs endossent le rôle de chauffeurs de taxi déterminés à livrer leurs passagers à bon port dans un monde urbain animé. Dans ce jeu, les joueurs doivent naviguer à travers le trafic dense, éviter les obstacles et chercher le chemin le plus rapide pour atteindre leur destination. 
    </br></br>
 <h3>Dans Taxi Road, les joueurs doivent : </h3></br>
<ul>
<li>Conduire leur taxi à travers la ville en évitant les collisions avec les autres véhicules et les obstacles.</li>
<li>Ramasser les passagers à différents points de départ (point A) et les transporter jusqu'à leur destination (point B).</li>
<li>Gagner des points en fonction du nombre de passagers livrés avec succès.</li>
<li>Terminer chaque partie en un temps limité de 5 minutes, ceci ajoute de la tension et de l’urgence à la compétition.</li>
<li>Utiliser la technique de drift pour des virages serrés et des manœuvres rapides.</li>
</ul>

    `,
    img: "/src/assets/projects/taxi.png",
    iconLists: [Icon.CSHARP, Icon.UNITY],
    previewsThumbnail: [
      "/images/previews/taxi/01.png",
      "/images/previews/taxi/02.png",
      "/images/previews/taxi/03.png",
    ],
    year: 2024,
  },
  {
    id: 3,
    title: "Clone du site MacDo",
    intro: "Clone du site MacDo utilisant Symfony",
    slug: "clone-macdo",
    des: `Clone du site McDonald's réalisé avec Symfony. </br>
    Ce projet a été développé en Symfony. Il s'agit de mon premier projet utilisant cette technologie. </br></br>
    L'utilisateur peut se connecter au site, ajouter des articles à son panier et toutes ces informations sont enregistrées dans une base de données SQL.
  
    </br>  </br>

    Il y a une partie back office qui permet d'ajouter, modifier, supprimer des produits.
    `,
    img: "/src/assets/projects/mac-do.png",
    link: "https://clone-mcdo.pointud.etu.mmi-unistra.fr/",
    linkCode: "https://git.unistra.fr/pointud/clone-mcdo-info4",
    iconLists: [Icon.SYMFONY, Icon.TAILWIND_CSS],
    year: 2023,
    previewsThumbnail: [
      "/images/previews/macdo/01.png",
      "/images/previews/macdo/02.png",
      "/images/previews/macdo/03.png",
    ],
  },
  {
    id: 4,
    title: "Création d'un forum",
    intro:
      "Découverte du framework backend Laravel à travers un projet de forum .",
    slug: "laravel-app",
    des: `Forum développé avec Laravel, incluant un système d'authentification.
    Découverte du framework backend Laravel à travers ce projet de forum. Les utilisateurs peuvent se connecter et ajouter des commentaires sur des articles.`,
    img: "/src/assets/projects/laravel.png",
    link: "https://forum-laravel.pointud.etu.mmi-unistra.fr/blog",
    linkCode: "https://git.unistra.fr/but3dw-front-pointud/forum-laravel",
    iconLists: [Icon.LARAVEL],
    previewsThumbnail: [
      "/images/previews/laravel/01.png",
      "/images/previews/laravel/02.png",
      "/images/previews/laravel/03.png",
    ],
    year: 2024,
  },
  {
    id: 5,
    title: "Création d'une API NodeJS/Express",
    intro: "Création d'une API NodeJS/Express",
    slug: "api-nodejs",
    des: `

Création d'une API avec Node JS afin de lier les données au front de ce projet : https://github.com/axel-po/deliveroo-clone
 </br> </br>
<h3>Features</h3>
</br>
<ul>
<li>Node JS / Express / MongoDB (No SQL)</li>
<li>Multer pour upload d'images</li>
<li>bcrypt pour le hash des mots de passe</li>
<li>JWT Token</li>
<li>Login/Register avec Token</li>
<li>Envoie de fichiers avec multer</li>
<li>CRUD (POST, GET, PUT, DELETE)</li>
</ul>

</br> </br>
<h3>Deployment</h3>
Déploiement de l'API en production sur Render.
    
    `,
    img: "/src/assets/projects/deliveroo.png",
    link: "https://deliveroo-clone.vercel.app/",
    linkCode: "https://github.com/axel-po/api-deliveroo-clone",
    iconLists: [
      Icon.MONGODB,
      Icon.EXPRESS,
      Icon.REACT,
      Icon.NODEJS,
      Icon.TAILWIND_CSS,
    ],
    previewsThumbnail: [
      "/images/previews/deliveroo/01.png",
      "/images/previews/deliveroo/02.png",
    ],
    year: 2022,
  },
];

export const slugs = [
  "next",
  "typescript",
  "javascript",
  "react",
  "redux",
  "prisma",
  "cypress",
  "nodejs",
];

export const softskills: SoftSkills[] = [
  {
    title: "Accessibilité",
    desc: "S'assurer que le contenu web est accessible à tous les utilisateurs, y compris ceux ayant des handicaps.",
  },
  {
    title: "Performance",
    desc: "Optimiser les temps de chargement et la réactivité des applications web pour améliorer l'expérience utilisateur sur différents appareils et connexions internet.",
  },
  {
    title: "Sécurité",
    desc: "Protéger les sites et les applications contre les menaces et les vulnérabilités. la sécurisation des données utilisateur par le cryptage, et l'adoption de bonnes pratiques de codage pour éviter les attaques comme le SQL injection et le cross-site scripting (XSS).",
  },
  {
    title: "Clean Code et Architecture Hexagonale",
    desc: "L'Architecture Hexagonale joue un rôle central dans ma conception architecturale. Cette approche me permet de découpler la logique métier de mon application",
  },
];
