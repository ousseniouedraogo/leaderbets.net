
import { Bookmaker, Offer, Guide, Game } from './types';

export const BOOKMAKERS: Bookmaker[] = [
  {
    name: '1XBET',
    logo: '/assets/1xbet_logo.png',
    bonus: '200% jusqu\'à 130 000 XOF',
    promoCode: 'jackot77',
    signupLink: 'https://refpa58144.com/L?tag=d_1311185m_1599c_&site=1311185&ad=1599',
    appLink: 'https://refpa58144.com/L?tag=d_1311185m_4129c_&site=1311185&ad=4129',
    popular: true,
    bestChoice: true,
    description: "1XBET est l'un des leaders mondiaux du pari sportif, offrant une immense variété de marchés et des cotes très compétitives.",
    features: {
      security: "Licence internationale de Curaçao, cryptage SSL pour protéger les données.",
      payment: "Large éventail de méthodes, incluant Mobile Money (Orange, MTN), cartes bancaires et cryptomonnaies.",
      bonusDetails: "Le bonus de bienvenue double votre premier dépôt, avec des conditions de mise raisonnables."
    }
  },
  {
    name: 'Melbet',
    logo: '/assets/melbet_logo.png',
    bonus: '100% jusqu\'à 65 000 XOF',
    promoCode: 'LUX365',
    signupLink: 'https://refpa3665.com/L?tag=d_4951527m_66335c_&site=4951527&ad=66335',
    appLink: 'https://refpa3665.com/L?tag=d_4951527m_118466c_&site=4951527&ad=118466',
    popular: true,
    bestChoice: false,
    description: "Melbet se distingue par son interface conviviale et ses promotions régulières pour les joueurs existants.",
    features: {
      security: "Opère sous une licence de Curaçao, garantissant un environnement de jeu sûr.",
      payment: "Accepte les paiements via Mobile Money, portefeuilles électroniques et cartes de crédit.",
      bonusDetails: "Un bonus de premier dépôt solide pour bien démarrer votre aventure de pari."
    }
  },
  {
    name: 'Betwinner',
    logo: '/assets/betwinner_logo.png',
    bonus: '100% jusqu\'à 65 000 XOF',
    promoCode: 'jackpot77',
    signupLink: 'https://bwredir.com/2A91?extid=Fb&s1=https://www.facebook.com/?locale=fr_FR&checkpoint_src=any&p=%2Fregistration%2F',
    appLink: 'https://tinyurl.com/ycytaudu',
    popular: false,
    bestChoice: false,
    description: "Betwinner propose une plateforme complète avec des paris sportifs, des jeux de casino et des sports virtuels.",
    features: {
      security: "Sécurité renforcée avec authentification à deux facteurs et cryptage des données.",
      payment: "Plus de 50 méthodes de paiement, y compris les options locales africaines populaires.",
      bonusDetails: "Le bonus de bienvenue est facile à réclamer et à utiliser sur une large gamme de sports."
    }
  },
  {
    name: '1win',
    logo: '/assets/1win_logo.jpg',
    bonus: '500% jusqu\'à 700 000 XOF',
    promoCode: 'LUX365',
    signupLink: 'https://1wadip.com/?open=register&p=d0wk',
    appLink: 'https://bit.ly/4i2L6FM',
    popular: false,
    bestChoice: false,
    description: "1win impressionne avec son bonus de bienvenue massif et son design moderne et épuré.",
    features: {
      security: "Plateforme sécurisée par des protocoles de cryptage modernes et une licence valide.",
      payment: "Dépôts et retraits rapides via Mobile Money, cartes et cryptomonnaies.",
      bonusDetails: "Un bonus de bienvenue exceptionnel réparti sur les premiers dépôts pour maximiser vos gains."
    }
  },
];


export const OFFERS: Offer[] = [
    {
        bookmaker: '1XBET',
        title: 'Bonus Exclusif 200%!',
        description: 'Inscrivez-vous avec notre code promo et triplez votre premier dépôt jusqu\'à 130 000 XOF!',
        endDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
        logo: '/assets/1xbet_logo.png',
        promoCode: 'jackot77',
        link: 'https://refpa58144.com/L?tag=d_1311185m_1599c_&site=1311185&ad=1599'
    },
    {
        bookmaker: '1win',
        title: 'Jackpot 500% jusqu\'à 700 000 XOF!',
        description: 'Profitez du plus gros bonus du marché. Votre aventure commence avec un avantage énorme!',
        endDate: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
        logo: '/assets/1win_logo.jpg',
        promoCode: 'LUX365',
        link: 'https://1wadip.com/?open=register&p=d0wk'
    },
    {
        bookmaker: 'Melbet',
        title: 'Pari Gratuit de 20 000 XOF',
        description: 'Placez votre premier pari et recevez un pari gratuit s\'il est perdant. Zéro risque!',
        endDate: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
        logo: '/assets/melbet_logo.png',
        promoCode: 'LUX365',
        link: 'https://refpa3665.com/L?tag=d_4951527m_66335c_&site=4951527&ad=66335'
    },
    {
        bookmaker: 'Betwinner',
        title: 'Bonus 100% + Casino',
        description: 'Une plateforme complète avec un bonus de bienvenue facile à débloquer.',
        endDate: new Date(new Date().getTime() + 4 * 24 * 60 * 60 * 1000), // 4 days from now
        logo: '/assets/betwinner_logo.png',
        promoCode: 'jackpot77',
        link: 'https://bwredir.com/2A91?extid=Fb&s1=https://www.facebook.com/?locale=fr_FR&checkpoint_src=any&p=%2Fregistration%2F'
    }
];

export const GUIDES: Guide[] = [
    {
        title: "Comment s'inscrire sur un bookmaker ?",
        content: "1. Choisissez un bookmaker sur notre site. 2. Cliquez sur 'S'inscrire maintenant'. 3. Remplissez le formulaire avec vos informations personnelles. 4. N'oubliez pas d'entrer notre code promo pour obtenir votre bonus. 5. Validez votre compte par email ou SMS. C'est tout !"
    },
    {
        title: "Comment télécharger les applications de paris ?",
        content: "Sur chaque page bookmaker, cliquez sur 'Télécharger l'application'. Pour Android, vous devrez autoriser l'installation d'applications de sources inconnues dans vos paramètres. Pour iOS, vous serez redirigé vers l'App Store. C'est simple et rapide !"
    },
    {
        title: "Comment parier efficacement ?",
        content: "1. Analysez les matchs, ne pariez pas au hasard. 2. Gérez votre bankroll : ne misez jamais plus de 5% de votre capital sur un seul pari. 3. Profitez des bonus et promotions pour augmenter vos gains potentiels. 4. Spécialisez-vous dans un ou deux sports que vous connaissez bien."
    },
    {
        title: "Comment retirer ses gains ?",
        content: "Allez dans la section 'Retrait' de votre compte joueur. Choisissez votre méthode de paiement préférée (ex: Mobile Money). Entrez le montant que vous souhaitez retirer et suivez les instructions. Les retraits sont généralement traités en quelques heures."
    },
    {
        title: "Erreurs à éviter pour les débutants",
        content: "1. Tenter de récupérer ses pertes en pariant plus. 2. Parier sur son équipe de cœur sans objectivité. 3. Ignorer les conditions des bonus. 4. Parier sur des sports ou des ligues que vous ne connaissez pas."
    }
];

export const GAMES: Game[] = [
  {
    name: 'Aviator',
    image: '/assets/aviator.jpg',
    description: "Regardez le multiplicateur grandir et encaissez avant que l'avion ne s'envole. Un jeu de crash simple et palpitant!",
    playLink: 'https://tinyurl.com/mppehvmx',
    bookmaker: '1XBET',
    logo: '/assets/1xbet_logo.png'
  },
  {
    name: 'Chicken Road',
    image: '/assets/road.jpg',
    description: "Frayez-vous un chemin vers la victoire ! Évitez les pièges, collectez les récompenses et multipliez vos gains dans ce jeu captivant.",
    playLink: 'https://refpa3665.com/L?tag=d_4951527m_126157c_&site=4951527&ad=126157',
    bookmaker: 'Melbet',
    logo: '/assets/melbet_logo.png'
  },
  {
    name: 'JetX',
    image: '/assets/jetx.png',
    description: "Pilotez votre jet, visez les étoiles et retirez vos gains avant l'explosion inévitable. Adrénaline garantie !",
    playLink: '#',
    bookmaker: '1win',
    logo: '/assets/1win_logo.jpg'
  },
  {
    name: 'Plinko',
    image: 'https://picsum.photos/seed/plinko/600/400',
    description: "Lâchez la bille et regardez-la tomber à travers les quilles pour atterrir sur un multiplicateur. Simple, fun et addictif.",
    playLink: '#',
    bookmaker: 'Melbet',
    logo: '/assets/melbet_logo.png'
  },
  {
    name: 'Lucky Jet',
    image: '/assets/Lucky%20jet.png',
    description: 'Enfilez votre jetpack et volez le plus haut possible. Un jeu de crash avec un personnage charismatique et des gains explosifs.',
    playLink: '#',
    bookmaker: 'Betwinner',
    logo: '/assets/betwinner_logo.png'
  }
];
