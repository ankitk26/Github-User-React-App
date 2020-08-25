import React from "react";

const Repo = ({ repo }) => {
  return (
    <div
      className="bg-gray-300 w-11/12 p-5 text-md my-6 mx-auto "
      key={repo.id}
    >
      <div className="flex gap-4 items-center mt-2">
        {/* Github icon */}
        <i className="fab fa-git-alt fa-2x text-gray-800"></i>
        {/* Link to github for user's individual repo */}
        <h1 className="text-2xl text-blue-500 hover:underline break-words">
          <a
            href={`//github.com/${repo.owner.login}/${repo.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {repo.name}
          </a>
        </h1>
      </div>

      {/* Repo description */}
      <div className="break-words">{repo.description}</div>

      {/* Repo's watch and forks count */}
      <div className="flex justify-start items-start gap-4 w-1/2 text-sm my-2">
        <div className="bg-gray-800 text-white rounded-full flex gap-2 px-3 py-1 md:px-5">
          <strong className="text-gray-100">{repo.watchers}</strong> watchers
        </div>
        <div className="bg-gray-800 text-white rounded-full px-3 flex gap-2 py-1 md:px-5">
          <strong className="text-gray-100">{repo.forks}</strong> forks
        </div>
      </div>
      {/* Clone url of repo */}
      <div>
        <strong className="text-gray-900">Clone url: </strong>
        <span className="md:ml-3 text-sm break-words">{repo.clone_url}</span>
      </div>
    </div>
  );
};

export default Repo;
