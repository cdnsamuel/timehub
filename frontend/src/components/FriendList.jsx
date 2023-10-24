import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const FriendsList = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-secondary text-xl mb-3">En Ligne :</h1>
      {data && (
        <Link to="/chatpage/1" className="pt-3" key={data[1].id}>
          <img src={`/${data[1].id}.png`} alt={data[1].name} />
          <h2 className="pt-3 text-info text-xl">{data[1].firstname}</h2>
        </Link>
      )}
      <h1 className="pt-3 text-error text-xl">Hors ligne: </h1>
      {data &&
        data
          .filter((user) => user.id !== 2 && user.id !== 1)
          .map((user) => (
            <div className="pr-4" key={user.id}>
              <img
                className="pt-3"
                src={`/${user.id}.png`}
                alt={data.firstname}
              />
              <h2 className="pt-3 text-center text-gray-500 text-xl">
                {user.firstname}
              </h2>
            </div>
          ))}
    </div>
  )
}

export default FriendsList
