// @flow strict
import Image from 'next/image';
import Link from 'next/link';
import { BsStarFill } from 'react-icons/bs';
import { FaCodeBranch, FaClock } from 'react-icons/fa';
import GlowCard from '../../helper/glow-card';

function RepoCard({ repo }) {
  return (
    <GlowCard identifier={`repo-${repo.id}`}>
      <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
        {/* GitHub Repo Thumbnail */}
        <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg bg-[#161b2e] flex items-center justify-center">
          <Image
            src="/github.svg" // Replace with an actual repo-related image if available
            height={60}
            width={60}
            alt="GitHub Repo"
            className="opacity-60 group-hover:opacity-100 transition-all duration-300"
          />
        </div>

        {/* Repo Info */}
        <div className="p-3 flex flex-col">
          {/* Repo Metadata */}
          <div className="flex justify-between items-center text-[#16f2b3] text-sm">
            <p className="flex items-center gap-1">
              <FaClock />
              <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
            </p>
            <div className="flex items-center gap-3">
              <p className="flex items-center gap-1">
                <BsStarFill />
                <span>{repo.stargazers_count}</span>
              </p>
              <p className="flex items-center gap-1">
                <FaCodeBranch />
                <span>{repo.forks_count}</span>
              </p>
            </div>
          </div>

          {/* Repo Name */}
          <Link target="_blank" href={repo.html_url}>
            <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500">
              {repo.name}
            </p>
          </Link>

          {/* Repo Description */}
          <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">
            {repo.description || "No description available"}
          </p>

          {/* Language Badge (Optional) */}
          {repo.language && (
            <p className="text-sm text-[#16f2b3]">{repo.language}</p>
          )}

          {/* View Repo Button */}
          <div className="mt-3">
            <Link target="_blank" href={repo.html_url}>
              <button className="bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs">
                View Repo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </GlowCard>
  );
}

export default RepoCard;
