// @flow strict
import Link from "next/link";
import { BsStar, BsCodeSlash } from "react-icons/bs";

function RepoCard({ repo }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group p-4">
      <h3 className="text-xl font-medium text-white mb-2">{repo.name}</h3>
      <p className="text-sm text-[#d3d8e8] mb-3 line-clamp-2">{repo.description || "No description provided"}</p>

      <div className="flex justify-between items-center text-[#16f2b3] text-sm">
        <p className="flex items-center gap-1">
          <BsStar />
          <span>{repo.stargazers_count}</span>
        </p>
        <p className="flex items-center gap-1">
          <BsCodeSlash />
          <span>{repo.language || "N/A"}</span>
        </p>
      </div>

      <div className="mt-3">
        <Link target="_blank" href={repo.html_url}>
          <button className="bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs">
            View Repo
          </button>
        </Link>
      </div>
    </div>
  );
}

export default RepoCard;
