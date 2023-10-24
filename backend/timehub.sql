DROP TABLE IF EXISTS `comments`;

DROP TABLE IF EXISTS `posts`;

DROP TABLE IF EXISTS `users`;

CREATE TABLE
    `users` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `nickname` VARCHAR(20) NOT NULL,
        `firstname` VARCHAR(20) NOT NULL,
        `lastname` VARCHAR(20) NOT NULL,
        `era` VARCHAR(20) NOT NULL,
        `picture` VARCHAR(150),
        PRIMARY KEY (`id`)
    );

CREATE TABLE
    `posts` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `content` TEXT NOT NULL,
        `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP(),
        `author` INTEGER NOT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (`author`) REFERENCES `users` (id)
    );

CREATE TABLE
    `comments` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `content` TEXT NOT NULL,
        `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP(),
        `post_id` INTEGER NOT NULL,
        `author` INTEGER NOT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (`post_id`) REFERENCES `posts` (id) ON DELETE CASCADE,
        FOREIGN KEY (`author`) REFERENCES `users` (id)
    );

INSERT INTO
    `users` (
        `nickname`,
        `firstname`,
        `lastname`,
        `era`
    )
VALUES (
        'E=mc²',
        'Albert',
        'Einstein',
        '1900'
    ), (
        'Reine_Du_Nil',
        'Cleopatra',
        'Patra',
        '-69'
    ), (
        'Italia_Ekip',
        'Leonardo',
        'de Vinci',
        '1480'
    ), (
        'OubaOuba',
        'Lucy',
        'Magnon',
        '-3.2M'
    ), (
        'Pomme_dapi',
        'Isaac',
        'Newton',
        '1780'
    ), (
        'Grand-Homme',
        'Napoleon',
        'Bonaparte',
        '1800'
    ), (
        'Tothemoon',
        'Elon',
        'Musk',
        '2022'
    ), (
        'Elektric',
        'Nikola',
        'Tesla',
        '1900'
    ), (
        'Vini_Vidi_Vici',
        'Julius',
        'Caesar',
        '-50'
    ), (
        'Dream',
        'Martin Luther',
        'King',
        '1950'
    ), (
        'Rage_quit',
        'Louis',
        'Pasteur',
        '1850'
    ), (
        'Radium',
        'Marie',
        'Curie',
        '1900'
    ), (
        'Poupoupidou',
        'Marilyn',
        'Monroe',
        '1945'
    ), (
        'MarieSansTete',
        'Marie',
        'Antoinette',
        '1780'
    );

INSERT INTO
    `posts` (`content`, `author`)
VALUES (
        'Mon premier message est vraiment relatif.',
        1
    ), (
        "Quoi, mon nez ?! Qu'est-ce qu'il a mon nez ?",
        2
    ), (
        "Je ne serai jamais la dénonciatrice de mes sujets : j’ai tout vu, tout su, tout oublié !",
        14
    ), (
        "Les chiens ne me mordent pas, les êtres humains, oui.",
        13
    ), (
        "Le hasard porte quelquefois en avant ceux que la modestie retient en arrière.",
        11
    ), (
        "A-t-on jamais fait construire trois cents navires de guerre sans qu’il y ait la guerre ?",
        2
    ), (
        "J’ai appris que la voie du progrès n’était ni rapide ni facile.",
        12
    ), (
        "Les hommes croient ce qu'ils désirent.",
        9
    ), (
        "La folie est de toujours se comporter de la même manière et de s’attendre à un résultat différent.",
        1
    ), (
        "Les malentendus sont toujours causés par l'incapacité à apprécier le point de vue d'autrui.",
        8
    ), (
        "La mort n'est rien, mais vivre vaincu et sans gloire, c'est mourir tous les jours.",
        6
    ), (
        "La sagesse est fille de l'expérience.",
        3
    ), (
        "Je fais le rêve que mes quatre jeunes enfants vivront un jour dans une nation où ils ne seront pas jugés par leur couleur de peau mais à la mesure de leur caractère. Je fais un rêve aujourd'hui.",
        10
    ), (
        "Deux choses sont infinies : l'Univers et la bêtise humaine. Mais en ce qui concerne l'Univers, je n'en ai pas encore acquis la certitude absolue.",
        1
    ), (
        "La peinture est une poésie qui se voit au lieu de se sentir et la poésie est une peinture qui se sent au lieu de se voir.",
        3
    ), (
        "C’est l’humeur et l’état d’esprit d’une femme qu’un homme doit stimuler pour que le sexe ait un intérêt. L’amant, le vrai, est celui qui vous fait fondre rien qu’en vous touchant la tête, en vous souriant droit dans les yeux.",
        13
    ), (
        "Pensez à être moins curieux des personnes que de leurs idées.",
        12
    ), (
        "La paix est un mot vide de sens ; c'est une paix glorieuse qu'il nous faut.",
        6
    ), (
        "Sachez vous éloigner, car quand vous reviendrez à votre travail, votre jugement sera plus sûr.",
        3
    ), (
        "Je me refuse à avoir l’amour pour maître !",
        2
    ), (
        "La vie n’est facile pour aucun de nous. Mais quoi, il faut avoir de la persévérance, et surtout de la confiance en soi. Il faut croire que l’on est doué pour quelque chose, et que, cette chose, il faut l’atteindre coûte que coûte.",
        12
    ), (
        "Une belle femme plaît aux yeux, une bonne femme plaît au coeur ; l'une est un bijou, l'autre un trésor.",
        6
    ), (
        "Tiiiiiimeeee Huuuuuuuub !!! Houba !!!",
        4
    ), (
        "L’imperfection est beauté, la folie est génie et il vaut mieux être totalement ridicule que totalement ennuyeux.",
        13
    ), (
        "Les scientifiques d'aujourd'hui ont substitué les mathématiques aux expériences, et ils s'égarent d'équation en équation, pour finalement construire une structure qui n'a aucun rapport avec la réalité.",
        8
    ), (
        "Si vous vous levez le matin en vous disant que l’avenir sera meilleur, c’est une belle journée. Sinon, ce n’en est pas une.",
        7
    ), ("Ouga bouga", 4), (
        "Celui qui ressent sa propre vie et celle des autres comme dénuées de sens est fondamentalement malheureux, puisqu'il n'a aucune raison de vivre.",
        1
    ), (
        "En sciences, nous devons nous intéresser aux choses, pas aux personnes.",
        12
    ), (
        "De tous les peuples gaulois, les Belges sont les plus braves.",
        9
    ), (
        "Il y a ceux qui craignent l’ambition de César. Mais qu’y a-t-il à craindre ? Qu’il détruise un jour la république ? Oui, il le fera. Je vous promets qu’il le fera.",
        2
    ), (
        "Je sais calculer le mouvement des corps pesants, mais pas la folie des foules.",
        5
    ), (
        "Je suis égoïste, impatiente et peu sûre de moi. Je fais des erreurs, je suis hors de contrôle et parfois difficile à gérer. Mais si vous ne pouvez pas me supporter pour le pire, nul doute que vous ne me méritez pas pour le meilleur. ",
        13
    ), (
        "Un dealer de rue a plus de connaissance sur comment gérer une boite que 95% des professeurs de business administration .",
        7
    ), (
        "Premier principe: ne jamais se laisser abattre par des personnes ou par des événements.",
        12
    ), (
        "Les hommes construisent trop de murs et pas assez de ponts.",
        5
    ), (
        "Si vous dissuadez des gens d'utiliser une voiture autonome, vous tuez des gens",
        7
    ), (
        "Une carrière est née en public, le talent en privé. ",
        13
    ), (
        "Quand on veut on peut, quand on peut on doit.",
        6
    ), (
        "L'idée de l'énergie atomique est illusoire, mais elle a pris une telle emprise sur les esprits que, bien que je prêche contre elle depuis vingt-cinq ans, il y a encore des gens qui croient qu'elle est réalisable.",
        8
    ), (
        "Ceux qui aiment marcher en rangs sur une musique : ce ne peut être que par erreur qu’ils ont reçu un cerveau, une moelle épinière leur suffirait amplement.",
        1
    ), (
        "La science enfante chaque jour des prodiges. Vous avez voulu témoigner une fois de plus de l'impression profonde que le monde, les habitudes de la vie, les lettres à leur tour reçoivent de tant de découvertes accumulées",
        11
    ), (
        "Ce que l'on désire ardemment, constamment, on l'obtient toujours.",
        6
    ), (
        "Une injustice où qu'elle soit est une menace pour la justice partout. Nous sommes tous inéluctablement pris dans un réseau de relations mutuelles, liés par un destin commun. Tout ce qui affecte directement quelqu'un, nous affecte tous indirectement.",
        10
    ), (
        "Le sot a un grand avantage sur l'homme d'esprit : il est toujours content de lui-même.",
        6
    ), (
        "L'argent ne représente pas la valeur que les hommes lui ont attribuée. Tout mon argent a été investi dans des expériences avec lesquelles j'ai fait de nouvelles découvertes permettant à l'humanité d'avoir une vie un peu plus facile.",
        8
    ), ("Feu ! Je vouloir feu !", 4), (
        "Dans les révolutions, il y a deux sortes de gens : ceux qui les font et ceux qui en profitent.",
        6
    ), (
        "Dieu n'est pas l'éternité, il n'est pas l'infini, mais il est éternel et infini. Il n'est ni la durée ni l'espace, mais il a existé de tout temps et sa présence est partout.",
        5
    ), (
        "C'est la personne humaine, libre et créatrice qui façonne le beau et le sublime, alors que les masses restent entraînées dans une ronde infernale d'imbécillité et d'abrutissement.",
        1
    ), (
        "J’aimerais bien mourir sur Mars, mais pas pendant l’impact.",
        7
    ), (
        "Le roi n’a qu’un homme, c’est sa femme.",
        14
    ), (
        "J'ai vu plus loin que les autres parce que je me suis juché sur les épaules de géants.",
        5
    ), (
        "Je pense que les gens ordinaires peuvent choisir d’être extraordinaires.",
        7
    ), ("Groumpf", 4), (
        "L’expérience, voilà le maître en toutes choses. ",
        9
    ), (
        "Le vin peut-être à bon droit considéré comme la plus saine, la plus hygiénique des boissons. ",
        11
    ), (
        "Avec l'intelligence artificielle, nous invoquons le démon.",
        7
    ), (
        "De toutes les choses, celles que je préfère sont les livres. Mon père avait une grande bibliothèque et chaque fois que je le pouvais, j'essayais d'assouvir ma passion pour la lecture.",
        8
    ), (
        "La vraie justice n'est pas simplement l'absence de tension, mais la présence de la justice.",
        10
    ), (
        "La valeur morale ne peut pas être remplacée par la valeur intelligence et j'ajouterai : Dieu merci !",
        1
    ), (
        "Je chasser gros mammouth, moi manger gros mammouth",
        4
    ), (
        "Laissez à l'avenir le soin de dire la vérité et d'évaluer chacun en fonction de son travail et de ses réalisations. Le présent est le leur, le futur, pour lequel j'ai vraiment travaillé, est le mien...",
        8
    ), (
        "Certaines personnes n’aiment pas le changement, mais il faut adopter le changement si la seule alternative est la catastrophe.",
        7
    ), (
        "Comment ça, je suis petit ?! Sachez qu'Alexandre Le Grand lui-même n'était pas plus grand que moi ! ",
        6
    ), (
        "Le développement continu de l'homme dépend de façon vitale de l'invention. Celle-ci est le fruit le plus important de son cerveau créatif. Son but ultime est la maîtrise complète de l'esprit sur le monde matériel, la mise à profit des forces de la nature pour les besoins de l'homme. C'est la tâche difficile de l'inventeur qui est souvent incompris et non reconnu.",
        8
    ), (
        "La guerre confère aux conquérants le droit d'imposer n'importe quelle condition aux vaincus. ",
        9
    ), (
        "Laboratoires et découvertes sont des termes corrélatifs. Supprimez les laboratoires, les sciences physiques deviendront l'image de la stérilité et de la mort.",
        11
    ), (
        "Tout propos soutenu l’accable, toute réflexion le déroute. ",
        14
    ), (
        "Il y eut un violent combat. On les attaqua dans l'eau, qui gênait leurs mouvements et l'on en tua un grand nombre ; les autres, pleins d'audace, essayaient de passer par-dessus les cadavres. Une grêle de traits les repoussa ; ceux qui avaient déjà passé, la cavalerie les enveloppa et ils furent massacrés.",
        9
    ), (
        " Mon Dieu, guidez-nous, protégez-nous, nous régnons trop jeunes !",
        14
    ), (
        "Dieu, qui connaît le mieux les capacités des hommes, cache ses mystères aux sages et aux prudents de ce monde, et les révèle aux petits enfants.",
        5
    ), (
        "La non-violence est une arme puissante et juste, qui tranche sans blesser et ennoblit l'homme qui la manie. C'est une épée qui guérit.",
        10
    ), (
        "Être antisocial dans un monde rempli de gens conformistes est un signe d'intelligence.",
        8
    ), (
        "Le succès pousse beaucoup de gens à vous détester. J’aimerais qu’il en soit autrement. Ce serait merveilleux si on pouvait profiter du succès sans sentir la jalousie dans les yeux de ceux qui nous entourent.",
        13
    ), (
        "@Brutus Tu quoque mi fili",
        9
    ), (
        "Nous les déhérités de cette terre, nous qui avons été si longtemps opprimés, sommes fatigués de notre longue nuit de captivité. Et maintenant, nous aspirons à la liberté, la justice et l'égalité.",
        10
    ), (
        "Quand la Chine s'éveillera, le monde tremblera.",
        6
    ), (
        "L'espace absolu, par nature sans relation avec quoi que ce soit d'extérieur, reste toujours identique à lui-même et sans mouvement.",
        5
    ), (
        "Madame, si c'est possible, c'est fait ; impossible, cela se fera. ",
        14
    ), (
        "Quand on est enfin arrivé à la certitude, on éprouve l'une des plus grandes joies que puisse ressentir l'âme humaine.",
        11
    ), (
        "On ne fait jamais attention à ce qui a été fait ; on ne voit que ce qui reste à faire.",
        12
    ), (
        "Je crois que la vérité désarmée et l'amour inconditionnel auront le mot de la fin en réalité. C'est pourquoi le juste, même temporairement vaincu, est plus fort que le mal triomphant.",
        10
    ), (
        "Le virus est constitué par un parasite microscopique qu'on multiplie aisément par la culture, en dehors du corps des animaux que le mal peut frapper.",
        11
    ), (
        "Ce ne sont pas les richesses, qui peuvent être perdues. La vertu est notre vrai bien et la vraie récompense de son possesseur. Elle ne peut être perdue, elle ne peut nous abandonner, sauf quand la vie s'enfuit.",
        3
    ), (
        "La grandeur des actions humaines se mesure à l'inspiration qui les fait naître. Heureux celui qui porte en soi un dieu, un idéal de la beauté et qui lui obéit : idéal de l'art, idéal de la science, idéal de la patrie, idéal des vertus de l'Évangile ! ",
        11
    ), (
        "Mes amis, j’irai à Paris avec mes enfants : c’est à l’amour de mes bons et fidèles sujets que je confie ce que j’ai de plus précieux.",
        14
    ), ("Je être Lucy", 4), (
        "La grandeur des actions humaines se mesure à l'inspiration qui les fait naître.",
        11
    ), (
        "L’imagination est plus importante que le savoir.",
        1
    ), ("Agrougrou !!!", 4), (
        "Les conceptions les plus hardies, les spéculations les plus légitimes, ne prennent un corps et une âme que le jour où elles sont consacrées par l'observation et l'expérience.",
        11
    ), (
        "Dans la vie, rien n’est à craindre, tout est à comprendre.",
        12
    ), (
        "Créer une entreprise, c'est comme préparer un gâteau : il faut doser chaque ingrédient dans les bonnes proportions.",
        7
    ), (
        "S’ils n’ont pas de pain, qu’ils mangent de la brioche. ",
        14
    ), (
        "La simplicité est le comble de la sophistication.",
        3
    ), (
        "Certaines peuplades ont des mannequins de proportions colossales, faits d'osier tressé, qu'on remplit d'hommes vivants : on y met le feu et les hommes sont la proie des flammes. ",
        9
    ), (
        "Les détails font la perfection et la perfection n'est pas un détail.",
        3
    ), (
        "Dieu ne joue pas aux dés.",
        1
    ), (
        "Chacun de nous doit travailler pour son propre perfectionnement et en même temps partager une responsabilité générale pour toute l’humanité.",
        12
    ), (
        "Ne te vante pas d’avoir été le premier dans mon cœur, si tu n’as pas été suffisamment intelligent pour être le dernier",
        13
    ), (
        "Téléphone pas bon ! Pas bon manger !",
        4
    ), (
        "Il n'en est point d'assez brave pour n'être pas affolé par une situation si nouvelle.",
        9
    ), (
        "Dix mille difficultés ne font pas un doute.",
        5
    ), (
        "Personne ne m’a jamais dit que j’étais jolie quand j’étais une petite fille. Toutes les petites filles devraient s’entendre dire qu’elles sont jolies, même si ce n’est pas vrai.",
        13
    ), (
        "Ne parlez point allemand, Monsieur ; à dater de ce jour, je n'entends plus d'autre langue que le français.",
        14
    ), (
        "Le succès ne s'explique pas. L'échec ne s'excuse pas.",
        6
    ), (
        "L'air, dès que point le jour, est rempli d'innombrables images auxquelles l’œil sert d'aimant",
        3
    ), (
        "Une femme n’a pas besoin d’une personne qui n’a pas besoin d’elle. ",
        13
    ), (
        "L'éternité était dans nos yeux et sur nos lèvres",
        2
    ), (
        "Une loi ne pourra jamais obliger un homme à m'aimer, mais il est important qu'elle lui interdise de me lyncher.",
        10
    ), (
        "La tradition des germains c'est, quel que soit l'agresseur, de se défendre et de ne pas implorer la paix. ",
        9
    ), (
        "Piètre disciple, qui ne surpasse pas son maître !",
        3
    ), (
        "Nous savons douloureusement, par l'expérience, que la liberté n'est jamais donnée volontairement par l'oppresseur, elle doit exigée par les opprimés.",
        10
    ), (
        "Lorsque deux forces sont jointes, leur efficacité est double.",
        5
    ), (
        "Quand quelque chose a de l’importance, on le fait, même si les chances ne sont pas de notre côté.",
        7
    ), (
        "Tous les hommes ont naturellement au coeur l'amour de la liberté et la haine de la servitude. ",
        9
    ), (
        "Ils peuvent être mes bourreaux, mais ils ne seront jamais mes juges.",
        14
    ), (
        "Que chacun raisonne en son âme et conscience, qu'il se fasse une idée fondée sur ses propres lectures et non d'après les racontars des autres.",
        1
    ), (
        "Dogecoin to the moon !!! ",
        7
    ), (
        "Petite balade le long du Nil, toujours entourée de mes serviteurs dévoués.",
        2
    );

INSERT INTO
    `comments` (`content`, `post_id`, `author`)
VALUES ('test commentaire', 1, 7);

SELECT
    c.id,
    c.content,
    p.id as pid,
    u.id as uid
FROM comments c
    JOIN posts p ON c.post_id = p.id
    JOIN users u ON c.author = u.id;