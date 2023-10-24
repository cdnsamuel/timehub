import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import SideBar from "../components/SideBar"
import FriendsList from "../components/FriendList"

function Contact() {
  const [email, setEmail] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success("🦄 Merci pour l'info!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
    setEmail("")
    setFirstname("")
    setLastname("")
    setMessage("")
  }
  return (
    <div className="mt-3 flex justify-content">
      <div id="1/3" className="lg:w-1/6  lg:flex">
        <SideBar />
      </div>
      <form
        className="w-full flex flex-col items-center justify-center gap-5"
        onSubmit={handleSubmit}
      >
        <div className="form-control ">
          <label className="input-group">
            <span className=" w-24">Email</span>
            <input
              type="text"
              placeholder="vous@mail.com"
              className="input input-bordered dark:text-secondary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <span className="w-24">Prénom</span>
            <input
              type="text"
              placeholder="Votre prénom"
              className="input input-bordered dark:text-secondary"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <span className="w-24">Nom</span>
            <input
              type="text"
              placeholder="Votre nom"
              className="input input-bordered dark:text-secondary"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </label>
        </div>
        <input
          type="text"
          placeholder="Votre message"
          className="input input-bordered input-secondary w-full max-w-xs"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="subit" className="btn btn-secondary w-full max-w-xs">
          Et Hop!
        </button>
      </form>
      <div
        id="3/3"
        className="h-full hidden md:flex md:w-1/6 md:justify-end lg:h-[85vh] lg:overflow-y-auto lg:mt-4 lg:mb-4 "
      >
        <FriendsList />
      </div>
      <ToastContainer />
    </div>
  )
}

export default Contact
