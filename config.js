// -------------------------------------------------------------
// Fichier de configuration 
// Y. STROPPA
// exemple de configuration possible de vos differentes parties
// --------------------------------------------------------------
var a=58;
var config_YS={
	Cascadeur: {
		Question:"A vous de retrouver le professionnel, le nombre de voitues nécessaires pour chaque cascacde et l'ordre de tournage.",
		Indices:[
			"-1 Le saut au dessus d'un camion n'a été réalisé ni avec 1 ou 3 voitures, ni en 1er lieu, ni pas Silvère",
			"-2 La cascade réalisée par Matias en 2ème lieu impliquait moins de 3 voitures et n'était pas un saut ni des tonneaux.",
			"-3 La poursuite ayant mi en cause 5 voitures n'a été effectuée ni par SIlvère, ni par Johnny, ni en 1er lieu ou en 4eme lieu."],
		Image:"Adefinir.jpg",
		Dimension:{nb:12,choix:4 },
		Categories:{
			Cascadeur:["Hubert","Johnny","Matias","Silvère"],
			"Voiture(s)":[1,2,3,5],
			Ordre:[1,2,3,4],
			Cascade:["Poursuite","Saut de camion","Tonneaux","Voiture coupée en 2"]
		},
		Affichage:{Colonnes:["Cascadeur","Voiture(s)","Ordre"],Lignes:["Cascade","Ordre","Voiture(s)"]},
		CoupdePouce:"2 voitures ont participé à la 4éme cascade",
		Solution:{}
	},
	Attractions: {
		Question:"Frissons garantis pour Ludivine et Frédéric qui on passé une journée au parx EffroiLand ...",
		Indices:[
			"-1 La maison du diable n'a pas été visitée apèrs 50min de file, ni  en 2min30, ni en 3e lieu",
			"-2 L'attente au Miroir aux alouettes a été deux fois plus longue qu'à la première attraction, visitée en 2min",
			"-3 Les mines de Salomon, visitées en 1min30 après moins de 50min d'attente, ,'étaient ni la 3e ni la 5e attraction.",
			"-4 Pour la 4e attraction, visitée en une minute de plus que le Tunnelde l'épouvante, Ludivine et Frédéric on tattendu 40min."],
		Image:"Adefinir.jpg",
		Dimension:{nb:15,choix:5 },
		Categories:{
			Duree:["1 min","1 min 30","2 min","2 min 30","3 min"],
			Ordre:[1,2,3,4,5],
			Attente: ["20 min","30 min","40 min","50 min","60 min"],
			Attraction:["La maison du diable","Les mines de salomon","Le miroir aux alouettes","Le temple de Sésostris","Le tunnel de l'épuouvante"]
		},
		Affichage:{Colonnes:["Duree","Ordre","Attente"],Lignes:["Attraction","Attente","Ordre"]},
		CoupdePouce:"",
		Solution:{}
	},
	Vertdepeur: {
		Question:"Chacun de ces jeunes gens est victime d'une phobie. Découvrez laquelle, ainsi que son âge et son lieu de résidence",
		Indices:[
			"-1 La personne qui a peur des araignées ne s'appelle pas Stéphane, n'a pas 20 ans et n'habite pas à Toulon.",
			"-2 Une femme de 22 ans a une peur bleue des pigeons. Elle n'habite ni à Nancy ni à Toulon.",
			"-3 Laurence, l'habitante de Limoges, a peur de l'avion. Elle a plus de 20 ans.",
		],
		Image:"Adefinir.jpg",
		Dimension:{nb:12,choix:4 },
		Categories:{
			Phobie:["Araignées","Ascenseur","Avion","Pigeons"],
			Age:["19 ans","20 ans","21 ans","22 ans"],
			Ville: ["Limoges","Nancy","Paris","Toulon"],
			Prenom:["Agnés","Laurence","Nicolas","Stéphane"]
		},
		Affichage:{Colonnes:["Phobie","Age","Ville"],Lignes:["Prenom","Ville","Age"]},
		CoupdePouce:"",
		Solution:{}
	}


};

