import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

const BasicInfo = () => {
  const { reducers } = useContext(UserContext);
  // Getting user's info from Context
  const { user } = reducers.state;

  return (
    <div className="text-lg leading-9 md:ml-10 px-3 md:px-0 mt-5 mx-auto">
      {/* User's Bio */}
      {user.bio ? (
        <h1 className="text-gray-900 text-lg text-center md:text-left">
          {user.bio}
        </h1>
      ) : null}

      {/* User's company */}
      {user.company ? (
        <h1 className="mt-4">
          <i className="fas fa-building mr-3 text-gray-900"></i>
          <span className="text-sm">{user.company}</span>
        </h1>
      ) : null}

      {/* User's location */}
      {user.location ? (
        <h1>
          <i className="fas fa-map-marker-alt mr-3 text-gray-900"></i>{" "}
          <span className="text-sm">{user.location}</span>
        </h1>
      ) : null}

      {/* User's blog */}
      {user.blog ? (
        <h1>
          <i className="fas fa-envelope mr-3 text-gray-900"></i>
          <a
            href={`//${user.blog}`}
            className="text-sm text-blue-600 hover:underline font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.blog}
          </a>
        </h1>
      ) : null}

      <h1 className="flex items-center">
        <strong className="text-gray-900 text-sm">Hireable </strong>{" "}
        {/* User hireable ?  */}
        {user.hireable ? (
          <i className="ml-3 fas fa-check text-green-600"></i>
        ) : (
          <i className="ml-3 fas fa-times text-red-600"></i>
        )}
      </h1>

      {/* Link to user's repos */}
      <h1 className="text-sm">
        <Link to={`/${user.login}/repos`}>
          <strong className="text-blue-600">Repos: </strong>
        </Link>
        <span className="ml-2">{user.public_repos}</span>
      </h1>
    </div>
  );
};

export default BasicInfo;
