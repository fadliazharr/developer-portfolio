// @flow strict
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import RepoCard from './repo-card';
import { personalData } from '@/utils/data/personal-data';

async function getRepositories() {
  try {
    const res = await fetch(`https://api.github.com/users/fadliazharr/repos`);
    
    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status}`);
    }

    const data = await res.json();
    console.log("Fetched Repos:", data); // Debugging
    return data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
}

async function Repositories() {
  let repos = await getRepositories();

  // Sort repositories by updated_at (newest to oldest)
  repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

  return (
    <div id='repos' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            GitHub Repositories
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {repos.slice(0, 6).map((repo, i) => (
          <RepoCard repo={repo} key={i} />
        ))}
      </div>

      <div className="flex justify-center mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href={`https://github.com/fadliazharr`}
          target="_blank"
        >
          <span>View More</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}


export default Repositories;
