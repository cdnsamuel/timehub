import { Link } from "react-router-dom";
const ConversationList = () => {
  const conversations = [
    {
      utilisateur: "Cleopatra Patra",
      pseudo: "Reine_Du_Nil",
      message:
        "Au revoir, Einstein. Que tes découvertes continuent d'éclairer le monde. Adieu !",
      img: "/2.png",
    },
    {
      utilisateur: "Lucy Magnon",
      pseudo: "OubaOuba",
      message: "Merci pour les tips sur le feu !",
      img: "/4.png",
    },
    {
      utilisateur: "Isaac Newton",
      pseudo: "Pomme_dapi",
      message: "Aux chiottes la troisième loi, be High !!",
      img: "/5.png",
    },
    {
      utilisateur: "Napoléon Bonaparte",
      pseudo: "Grand-Homme",
      message: "Je t'ai déjà dit c'est pas la taille qui compte",
      img: "/6.png",
    },
    {
      utilisateur: "Elon Musk",
      pseudo: "Tothemoon",
      message: "BUUULLLL RRUUUUNNN !!!",
      img: "/7.png",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="m-auto">
        <input
          className="flex m-3 p-2 mb-6 rounded-xl bg-base-100 w-80 border border-accent outline-neutral-focus text-center"
          type="text"
          placeholder="Chercher un message ..."
        />
      </div>
      <div className="">
        {conversations.map((conversation, index) => (
          <div key={index}>
            {index === 0 ? (
              <div>
                <Link to="/chatpage/1">
                  <div className="rounded-[1rem] p-2 mb-4 border-2 border-neutral mx-3">
                    <div className="flex items-center mb-2">
                      <img
                        className="w-12 h-12 rounded-full border-2 border-primary"
                        src={conversation.img}
                        alt="user-profile"
                      />
                      <p className="dark:text-secondary font-semibold ml-2">
                        {conversation.utilisateur}
                      </p>
                      <p className="dark:text-primary font-semibold ml-2">
                        @{conversation.pseudo}
                      </p>
                    </div>

                    <p>{conversation.message}</p>
                  </div>
                </Link>
              </div>
            ) : (
              <div className="rounded-[1rem] p-2 mb-4 border-2 border-neutral mx-3">
                <div className="flex items-center mb-2">
                  <img
                    className="w-12 h-12 rounded-full border-2 border-primary"
                    src={conversation.img}
                    alt="user-profile"
                  />
                  <p className="dark:text-secondary font-semibold ml-2">
                    {conversation.utilisateur}
                  </p>
                  <p className="dark:text-primary font-semibold ml-2">
                    @{conversation.pseudo}
                  </p>
                </div>

                <p>{conversation.message}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
