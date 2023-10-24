import FriendsList from "../components/FriendList"
import SideBar from "../components/SideBar"
import cece from "/cece.png"
import killian from "/killian.png"
import nawak from "/nawak.png"
import insom from "/INSOMNIA2.png"
import persona from "/persona.png"
const About = () => {
  return (
    <div className="lg:flex lg:justify-between lg:gap-3 mr-2  ">
      <div id="1/3" className="lg:w-1/6  lg:flex">
        <SideBar />
      </div>
      <div className="mt-5 flex flex-col mx-2 gap-3 md:w-5/6 lg:h-[85vh] lg:overflow-y-auto ">
        <h1 className="text-center text-3xl ">Bienvenue sur Time hub</h1>
        <p className="text-center">
          TimeHub est un réseau social intemporel qui a vu le jour grâce à cinq
          insomniaques chevronnés.
        </p>
        <div className="flex flex-col items-start gap-3 ">
          <div className="flex gap-5">
            <img src={nawak} alt="" />
            <div className="flex flex-col justify-center text-primary">
              <h1>NAWAK : team leader option BDD </h1>
              <p>BOUMMMM BEBE !</p>
            </div>
          </div>
          <div className="flex gap-5 ">
            <img src={killian} alt="" />
            <div className="flex flex-col justify-center center text-secondary">
              <h1>KILLIAN : Fetcheur fou </h1>
              <p>YA UN MONDE OU ...</p>
            </div>
          </div>
          <div className="flex gap-5">
            <img src={persona} alt="" />
            <div className="flex flex-col justify-center center text-primary">
              <h1>THIBAUT : Scrib préféré de ton scrib preféré </h1>
              <p>DU CAFE!</p>
            </div>
          </div>
          <div className="flex gap-5">
            <img src={insom} alt="" />
            <div className="flex flex-col justify-center center text-secondary">
              <h1>DAVID : Routeur fou </h1>
              <p>ON EST DANS LES TEMPS ???</p>
            </div>
          </div>
          <div className="flex  gap-5">
            <img src={cece} alt="" />
            <div className="flex flex-col justify-center center text-primary">
              <h1>CECE : Designer professionnel officiel (c'est faux)</h1>
              <p>CSS DE MERDE </p>
            </div>
          </div>
          <div className="flex-col flex items-center">
            <p className="text-center my-4">
              On aurait aimé vous faire un tour rapide des fonctionnalités du
              site, mais il est soit trop tard, soit trop tôt.
            </p>
            <iframe
              width="598 "
              height="350"
              src="https://www.youtube.com/embed/hPr-Yc92qaY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div
        id="3/3"
        className="h-full hidden md:flex md:w-1/6 md:justify-end lg:h-[85vh] lg:overflow-y-auto lg:mt-4 lg:mb-4 "
      >
        <FriendsList />
      </div>
    </div>
  )
}

export default About
