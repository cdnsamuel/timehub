import { useState } from "react"

function Comment({ com, fetchCom }) {
  const [edit, setEdit] = useState(false)
  const [contentEdit, setContentEdit] = useState("")
  const handleEdit = (com) => {
    setEdit(!edit)
    setContentEdit(com.content)
  }

  const handleComDelete = (com) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/comments/${com.id}`, {
      method: "DELETE",
    }).then(() => fetchCom())
  }

  const handleSendEdit = (e, com) => {
    if (e.key === "Enter") {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: contentEdit,
          post_id: com.pid,
          author: com.uid,
          id: com.id,
        }),
      }
      fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/comments/${com.id}`,
        requestOptions
      ).then(() => {
        setEdit(!edit)
        fetchCom()
      })
    }
  }

  return (
    <div key={com.id} className="flex flex-col bg-neutral">
      <div className="flex items-center gap-2 ml-3 my-2">
        <img
          src={`/${com.uid}.png`}
          alt={`/${com.uid}.png`}
          className="h-10 w-10 mr-2"
        />
        {!edit ? (
          <p className="dark:text-base-100">{com.content}</p>
        ) : (
          <input
            className="input input-sm input-ghost text-base-100"
            type="text"
            value={contentEdit}
            onChange={(e) => setContentEdit(e.target.value)}
            onKeyDown={(e) => handleSendEdit(e, com)}
          />
        )}
        <button onClick={() => handleEdit(com)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.418 18.861L3 21L5.139 14.582M9.418 18.861L20.118 8.16101C20.6851 7.59342 21.0037 6.82388 21.0037 6.02151C21.0037 5.21915 20.6851 4.44961 20.118 3.88201C19.5504 3.3149 18.7809 2.99634 17.9785 2.99634C17.1761 2.99634 16.4066 3.3149 15.839 3.88201L5.139 14.582M9.418 18.861L5.139 14.582M7.278 16.722L15.122 8.87801M13.696 6.02501L17.975 10.304"
              stroke="#2F2F38"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button onClick={() => handleComDelete(com)}>
          <svg
            className="mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Comment
