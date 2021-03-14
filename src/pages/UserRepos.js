import React, { useEffect, useContext, useState } from "react";
import Repo from "../components/userRepos/Repo";
import { UserContext } from "../context/UserContext";
import Loader from "../layouts/Loader";
import ReposPagination from "../components/userRepos/ReposPagination";
import axios from "axios";
import parse from "parse-link-header"; // Converts headers to JSON format

const UserRepos = ({ match: { params } }) => {
  const pageNumber = parseInt(params.pageNumber);
  const user = params.username;

  const { loading, repos, fetchRepos } = useContext(UserContext);

  const [page, setPage] = useState(pageNumber);
  const [lastPage, setLastPage] = useState(null);

  const REPOS_URL = `https://api.github.com/users/${user}/repos?page=${page}`;

  const getLastPage = async () => {
    const res = await axios.get(REPOS_URL);
    setLastPage(
      parse(res.headers.link) && parse(res.headers.link).last ? parseInt(parse(res.headers.link).last.page) : null
    );
  };

  useEffect(() => {
    fetchRepos(user, page);

    if (page !== lastPage) {
      getLastPage();
    }

    setPage(pageNumber);

    // eslint-disable-next-line
  }, [pageNumber]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {lastPage && <ReposPagination user={user} page={page} setPage={setPage} lastPage={lastPage} />}

      {repos && (
        <>
          <h4 className="w-1/2 mx-auto mt-8 text-lg text-center text-gray-900">{repos.length} results</h4>

          <div className="container mx-auto">
            {repos.map((repo) => (
              <Repo key={repo.id} repo={repo} />
            ))}
          </div>
        </>
      )}

      <div className="mb-12">
        {lastPage && <ReposPagination user={user} page={page} setPage={setPage} lastPage={lastPage} />}
      </div>
    </div>
  );
};

export default UserRepos;
