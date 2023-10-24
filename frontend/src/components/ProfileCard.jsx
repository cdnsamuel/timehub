import { Link } from "react-router-dom";

export default function ProfileCard({ user }) {
  return (
    <Link to={`/profile/${user.id}`}>
      <div className="hover:bg-slate-800 flex gap-5 border-2 border-neutral rounded-[1rem] p-2">
        <img
          src={`/${user.id}.png`}
          alt={`${user.firstname}`}
          className="h-16 border-2 border-primary rounded-full "
        />
        <div className="flex flex-col justify-center gap-1 text-lg dark:text-secondary">
          <div className="font-semibold">
            {user.firstname} {user.lastname}
          </div>
          <div className="text-primary text-md">@{user.nickname}</div>
        </div>
      </div>
    </Link>
  );
}
