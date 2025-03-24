// @flow strict
import Link from 'next/link';
import { BsStarFill } from 'react-icons/bs';
import { FaCodeBranch, FaClock } from 'react-icons/fa';
import GlowCard from '../../helper/glow-card';

function RepoCard({ repo }) {
  return (
    <GlowCard identifier={`repo-${repo.id}`}>
      <div className="relative group p-4 rounded-lg bg-[#0e0a26] border border-[#25213b] hover:border-[#464c6a] transition-all duration-500">
        
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
          <p className="my-3 cursor-pointer text-lg text-white font-semibold hover:text-violet-500">
            {repo.name}
          </p>
        </Link>

        {/* Language Badge */}
        {repo.language && (
          <p className="text-sm text-[#16f2b3]">{repo.language}</p>
        )}

        {/* View Repo Button */}
        <div className="mt-4 flex justify-end">
          <Link target="_blank" href={repo.html_url}>
            <button className="bg-gradient-to-r from-pink-500 to-violet-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80">
              View Repo
            </button>
          </Link>
        </div>
      </div>
    </GlowCard>
  );
}

export default RepoCard;
