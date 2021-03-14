import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

const BasicInfo = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center w-full px-3 mx-auto mt-5 text-lg leading-9 md:items-start align-self-start md:px-0">
      {/* User's Bio */}
      {user.bio && <h1 className="text-lg text-center text-gray-900 md:text-left">{user.bio}</h1>}

      {/* User's company or organization */}
      {user.company && (
        <h1 className="flex items-center gap-3 mt-10">
          <i className="text-gray-900 material-icons">corporate_fare</i>
          <span className="text-sm">{user.company}</span>
        </h1>
      )}

      {/* User's location */}
      {user.location && (
        <h1 className="flex items-center gap-3 mt-4">
          <i className="text-gray-900 material-icons">place</i>
          <span className="text-sm">{user.location}</span>
        </h1>
      )}

      {/* User's blog */}
      {user.blog && (
        <h1 className="flex items-center gap-3 mt-4">
          <i className="text-gray-900 material-icons">email</i>
          <a
            href={`//${user.blog}`}
            className="text-sm font-bold text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.blog}
          </a>
        </h1>
      )}

      {/* Is user hireable */}
      <h1 className="flex items-center gap-3 mt-4">
        <strong className="text-sm text-gray-900">Hireable </strong>
        {user.hireable ? (
          <i className="text-green-600 material-icons">check</i>
        ) : (
          <i className="text-red-600 material-icons">clear</i>
        )}
      </h1>

      {/* Link to user's repositories */}
      <h1 className="flex items-center gap-4 mt-4 text-base">
        <i className="material-icons">list</i>
        <Link to={`/${user.login}/repos/1`} className="font-bold text-blue-600 hover:underline">
          <span>{user.public_repos} repos</span>
        </Link>
      </h1>
    </div>
  );
};

export default BasicInfo;
