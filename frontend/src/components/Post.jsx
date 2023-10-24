import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { useGlitch } from "react-powerglitch"
import Comment from "./Comment"

const Post = ({ post, setRefresh, refresh }) => {
  const [coms, setComs] = useState(null)
  const [like, setLike] = useState(false)
  const [dislike, setDislike] = useState(false)
  const glitch = useGlitch()
  const [animationParent] = useAutoAnimate()
  const fetchCom = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/comments`)
      .then((res) => res.json())
      .then((data) => setComs(data))
      .catch((err) => console.error(err))
  }

  function getRandom(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  useEffect(() => {
    fetchCom()
    if (!number) {
      setNumber(getRandom(0, 100))
    }
  }, [])

  const handleDelete = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/posts/${post.id}`, {
      method: "DELETE",
    })
    setRefresh(!refresh)
  }

  const [openCom, setOpenCom] = useState(false)
  const [comContent, setComContent] = useState("")
  const handleComContent = (e) => {
    setComContent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (comContent) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: comContent,
          post_id: post.id,
        }),
      }
      fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/comments`,
        requestOptions
      ).then(() => {
        setComContent("")
        fetchCom()
      })
    } else {
      e.preventDefault()
    }
  }

  const [number, setNumber] = useState(null)

  const handleNumber = () => {
    setLike(!like)
    setDislike(false)

    if (!like) {
      setNumber(number + 1)
    } else {
      setNumber(number - 1)
    }
  }

  return (
    <div
      ref={animationParent}
      className="flex flex-col rounded-[1rem] border-2 border-neutral mx-3 mb-5"
    >
      <div className="flex items-center gap-3 ml-5 mt-5">
        <Link to={`/profile/${post.uid}`} className="text-sm md:text-lg mr-4">
          <img
            className="border-2 rounded-full border-primary w-12 h-12"
            src={`/${post.uid}.png`}
            alt={`${post.firstname}-profile-picture`}
          />
        </Link>
        <div>
          <p className="dark:text-secondary">
            {post.firstname} -@{post.nickname}
          </p>
          <p
            ref={glitch.ref}
            className="dark:text-primary text-xs md:text-base"
          >
            Il y a {2023 - post.era} ans
          </p>
        </div>
      </div>
      <p className="mx-5 my-5 md:text-xl ">{post.content}</p>
      <div
        className={`flex items-center justify-between bg-neutral ${
          openCom ? "rounded-none" : "rounded-b-[0.8rem]"
        }`}
      >
        <div className="flex gap-3 pl-3 py-1.5 ">
          <button onClick={() => setOpenCom(!openCom)}>
            {!openCom ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7.5 9.5H7.51M12 9.5H12.01M16.5 9.5H16.51M20 4H4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5V14C3 14.2652 3.10536 14.5196 3.29289 14.7071C3.48043 14.8946 3.73478 15 4 15H7V20L12 15H20C20.2652 15 20.5196 14.8946 20.7071 14.7071C20.8946 14.5196 21 14.2652 21 14V5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4Z"
                  stroke="hsl(var(--p))"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H6V20C5.99995 20.1978 6.05854 20.3911 6.16837 20.5556C6.27819 20.72 6.43431 20.8483 6.617 20.924C6.73833 20.9746 6.86855 21.0004 7 21C7.26519 20.9999 7.51951 20.8946 7.707 20.707L12.414 16H20C20.5304 16 21.0391 15.7893 21.4142 15.4142C21.7893 15.0391 22 14.5304 22 14V5C22 4.46957 21.7893 3.96086 21.4142 3.58579C21.0391 3.21071 20.5304 3 20 3ZM7.5 11C7.20333 11 6.91332 10.912 6.66664 10.7472C6.41997 10.5824 6.22771 10.3481 6.11418 10.074C6.00065 9.79994 5.97094 9.49834 6.02882 9.20736C6.0867 8.91639 6.22956 8.64912 6.43934 8.43934C6.64912 8.22956 6.91639 8.0867 7.20736 8.02882C7.49834 7.97094 7.79994 8.00065 8.07403 8.11418C8.34811 8.22771 8.58238 8.41997 8.7472 8.66665C8.91203 8.91332 9 9.20333 9 9.5C9 9.89782 8.84196 10.2794 8.56066 10.5607C8.27936 10.842 7.89782 11 7.5 11ZM12 11C11.7033 11 11.4133 10.912 11.1666 10.7472C10.92 10.5824 10.7277 10.3481 10.6142 10.074C10.5006 9.79994 10.4709 9.49834 10.5288 9.20736C10.5867 8.91639 10.7296 8.64912 10.9393 8.43934C11.1491 8.22956 11.4164 8.0867 11.7074 8.02882C11.9983 7.97094 12.2999 8.00065 12.574 8.11418C12.8481 8.22771 13.0824 8.41997 13.2472 8.66665C13.412 8.91332 13.5 9.20333 13.5 9.5C13.5 9.89782 13.342 10.2794 13.0607 10.5607C12.7794 10.842 12.3978 11 12 11ZM16.5 11C16.2033 11 15.9133 10.912 15.6666 10.7472C15.42 10.5824 15.2277 10.3481 15.1142 10.074C15.0006 9.79994 14.9709 9.49834 15.0288 9.20736C15.0867 8.91639 15.2296 8.64912 15.4393 8.43934C15.6491 8.22956 15.9164 8.0867 16.2074 8.02882C16.4983 7.97094 16.7999 8.00065 17.074 8.11418C17.3481 8.22771 17.5824 8.41997 17.7472 8.66665C17.912 8.91332 18 9.20333 18 9.5C18 9.89782 17.842 10.2794 17.5607 10.5607C17.2794 10.842 16.8978 11 16.5 11Z"
                  fill="hsl(var(--p))"
                />
              </svg>
            )}
          </button>
          <button onClick={handleNumber}>
            <div className="flex gap-1 text-accent">
              {!like ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6.00781 10.7143C7.00797 10.6173 7.96824 10.2636 8.80007 9.68572C10.5479 8.01185 12.0482 6.08526 13.2536 3.96686C13.405 3.67457 13.6312 3.43011 13.9078 3.25977C14.1844 3.08942 14.5011 2.99961 14.8237 3C15.0767 2.99987 15.3268 3.05497 15.5574 3.16165C15.788 3.26832 15.9938 3.42413 16.1612 3.61871C16.3286 3.8133 16.4537 4.0422 16.5282 4.29021C16.6027 4.53822 16.6249 4.79966 16.5933 5.05714L15.0313 9.68572M6.00781 10.7143L3 10.7143V19.9714C3 20.2442 3.10563 20.5058 3.29366 20.6987C3.48168 20.8916 3.7367 21 4.0026 21H5.00521C5.27112 21 5.52613 20.8916 5.71416 20.6987C5.90218 20.5058 6.00781 20.2442 6.00781 19.9714V10.7143ZM14.0287 9.68572H18.9956C19.3178 9.68584 19.6352 9.76562 19.921 9.91829C20.2067 10.071 20.4524 10.292 20.6373 10.5628C20.8221 10.8335 20.9406 11.146 20.9828 11.4737C21.0249 11.8014 20.9895 12.1347 20.8795 12.4454L18.5193 19.6454C18.2306 20.459 18.0391 21 16.6354 21C14.0447 21 11.2454 19.9395 9.13093 19.3409"
                    stroke="#3abff8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6.00765 9.68379H4.00255C3.73666 9.68379 3.48165 9.79218 3.29364 9.98511C3.10563 10.178 3 10.4397 3 10.7125V18.9425C3 19.4882 3.21125 20.0115 3.58728 20.3974C3.96331 20.7832 4.47331 21 5.0051 21C5.53688 21 6.04689 20.7832 6.42292 20.3974C6.79894 20.0115 7.0102 19.4882 7.0102 18.9425V10.7125C7.0102 10.4397 6.90457 10.178 6.71656 9.98511C6.52854 9.79218 6.27354 9.68379 6.00765 9.68379Z"
                    fill="#3abff8"
                  />
                  <path
                    d="M18.9947 9.68379H15.0306L16.5926 5.05444C16.6438 4.63082 16.549 4.20215 16.3247 3.84268C16.1004 3.4832 15.7605 3.21557 15.3641 3.08612C14.9677 2.95668 14.5397 2.97358 14.1541 3.1339C13.7686 3.29423 13.4498 3.58787 13.2531 3.96397C12.0943 5.99321 10.6683 7.84873 9.01529 9.47805V19.3396H9.12958C11.244 19.9394 14.0431 21 16.6347 21C18.0382 21 18.2307 20.4589 18.5195 19.6451L20.8795 12.4439C20.9895 12.1331 21.0249 11.7997 20.9827 11.4718C20.9405 11.144 20.8219 10.8314 20.637 10.5606C20.4521 10.2898 20.2062 10.0687 19.9203 9.91605C19.6345 9.76343 19.3169 9.68376 18.9947 9.68379Z"
                    fill="#3abff8"
                  />
                </svg>
              )}
              {number}
            </div>
          </button>
          <button
            onClick={() => {
              setDislike(!dislike)
              setLike(false)
            }}
          >
            {!dislike ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.9922 13.2869C16.992 13.3838 16.0318 13.7376 15.1999 14.3156C13.452 15.9903 11.9516 17.9178 10.7464 20.0371C10.5944 20.3287 10.368 20.5723 10.0915 20.742C9.81487 20.9116 9.49851 21.0008 9.17628 21C8.92331 21.0001 8.67322 20.945 8.44261 20.8383C8.212 20.7316 8.00616 20.5758 7.83878 20.3812C7.67139 20.1866 7.5463 19.9577 7.4718 19.7096C7.3973 19.4616 7.3751 19.2001 7.40669 18.9426L8.96874 14.3156M17.9922 13.2869H21V4.02869C21 3.75586 20.8944 3.49421 20.7063 3.3013C20.5183 3.10838 20.2633 3 19.9974 3H18.9948C18.7289 3 18.4739 3.10838 18.2858 3.3013C18.0978 3.49421 17.9922 3.75586 17.9922 4.02869L17.9922 13.2869ZM9.97135 14.3156H5.00444C4.68224 14.3154 4.36482 14.2357 4.07904 14.083C3.79327 13.9303 3.54757 13.7092 3.36274 13.4384C3.17791 13.1676 3.0594 12.8551 3.01724 12.5274C2.97508 12.1997 3.01052 11.8663 3.12055 11.5556L5.48068 4.35478C5.76943 3.54109 5.96093 3 7.36458 3C9.95531 3 12.7546 4.06058 14.8691 4.65927"
                  stroke="#f87272"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.9551 5.117H14.8411C12.7321 4.535 9.94107 3.5 7.35607 3.5C5.95607 3.5 5.76407 4.026 5.47707 4.816L3.12207 11.816C3.01215 12.118 2.97663 12.4421 3.01853 12.7607C3.06043 13.0794 3.17851 13.3833 3.36277 13.6466C3.54703 13.9099 3.79204 14.125 4.07705 14.2735C4.36205 14.4221 4.67867 14.4998 5.00007 14.5H8.95607L7.40007 19C7.34933 19.4117 7.44408 19.8282 7.66793 20.1775C7.89178 20.5268 8.23065 20.7868 8.62593 20.9127C9.02122 21.0386 9.44807 21.0223 9.83266 20.8668C10.2172 20.7113 10.5354 20.4263 10.7321 20.061C11.887 18.0881 13.3091 16.2844 14.9581 14.701L14.9551 5.117Z"
                  fill="#f87272"
                />
                <path
                  d="M18.0001 14H20.0001C20.2653 14 20.5196 13.8946 20.7072 13.7071C20.8947 13.5196 21.0001 13.2652 21.0001 13V5C21.0001 4.46957 20.7894 3.96086 20.4143 3.58579C20.0392 3.21071 19.5305 3 19.0001 3C18.4696 3 17.9609 3.21071 17.5859 3.58579C17.2108 3.96086 17.0001 4.46957 17.0001 5V13C17.0001 13.2652 17.1054 13.5196 17.293 13.7071C17.4805 13.8946 17.7348 14 18.0001 14Z"
                  fill="#f87272"
                />
              </svg>
            )}
          </button>
        </div>
        {post.uid === 1 && (
          <button onClick={handleDelete}>
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
        )}
      </div>
      {openCom && (
        <>
          {coms &&
            coms
              .filter((com) => com.pid === post.id)
              .map((com) => (
                <Comment key={com.id} com={com} fetchCom={fetchCom} />
              ))}
          <form
            className="flex items-center bg-neutral rounded-b-[0.8rem] gap-2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={comContent}
              placeholder="Ecris ici..."
              onChange={handleComContent}
              className="w-1/2 h-8 bg-base-100 pl-2 ml-3 my-1 border-2 border-primary rounded-lg"
            />
            <button className="h-8 border-2 border-base-100 rounded-lg px-2 text-base-100 font-bold">
              Send
            </button>
          </form>
        </>
      )}
    </div>
  )
}

export default Post
