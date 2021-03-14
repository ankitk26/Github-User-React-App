import React from "react";

const Repo = ({ repo }) => {
  return (
    <div className="p-5 my-6 bg-gray-300 text-md" key={repo.id}>
      <div className="flex items-center gap-12 mt-2">
        <i className="text-gray-800 fa-5x fab fa-git-alt" />
        <div className="flex flex-col">
          {/* Link to the repository */}
          <h1 className="text-2xl text-blue-500 break-words hover:underline">
            <a href={`//github.com/${repo.owner.login}/${repo.name}`} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </h1>

          {/* Repository description */}
          <h4 className="text-sm">{repo.description}</h4>

          {/* Repo's watch and forks count */}
          <div className="flex items-start justify-start w-1/2 gap-4 my-3 text-sm">
            <div className="flex gap-2 px-3 py-0.5 text-white bg-gray-800 rounded-full md:px-5">
              <span className="text-gray-100">{repo.watchers}</span> watchers
            </div>
            <div className="flex gap-2 px-3 py-0.5 text-white bg-gray-800 rounded-full md:px-5">
              <span className="text-gray-100">{repo.forks}</span> forks
            </div>
          </div>
          {/* Clone url of repo */}
          <div>
            <span className="font-semibold text-gray-900">Clone url: </span>
            <span className="text-sm break-words md:ml-1">{repo.clone_url}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repo;
