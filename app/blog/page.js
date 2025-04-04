// @flow strict
import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../components/homepage/blog/blog-card";
import RepoCard from "../components/homepage/repos/repo-card"; // New RepoCard component

async function getBlogs() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);

  if (!res.ok) {
    throw new Error("Failed to fetch blog data");
  }

  const data = await res.json();
  return data;
}

async function getRepos() {
  const res = await fetch(`https://api.github.com/users/${personalData.gitHub}/repos`);

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub repositories");
  }

  const data = await res.json();
  return data;
}

async function page() {
  const blogs = await getBlogs();
  const repos = await getRepos();

  return (
    <div className="py-8">
      {/* Blog Section */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blog
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>


      {/* GitHub Repositories Section */}
      <div className="flex justify-center my-5 lg:py-8 mt-10">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            My GitHub Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {repos.map((repo, i) => (
          <RepoCard repo={repo} key={i} />
        ))}
      </div>
    </div>
  );
}

export default page;
