import React, { useEffect, useContext, useState } from "react";
import Repo from "./Repo";
import { UserContext } from "../UserContext";
import Loader from "../Loader";
import ReposPagination from "./ReposPagination";
import axios from "axios";
import parse from "parse-link-header"; // Converts headers to JSON format

const UserRepos = (props) => {
  // Extract username from url's params
  const user = props.match.params.username;
  // Getting context state and fetchRepos function from Context
  const { reducers, fetchRepos } = useContext(UserContext);

  const [page, setPage] = useState(1);
  const { loading, repos } = reducers.state;
  const [lastPage, setLastPage] = useState({});

  // Base url
  const REPOS_URL = `https://api.github.com/users/${user}/repos?page=${page}`;

  // Fetch repos for every change in page
  useEffect(() => {
    fetchRepos(REPOS_URL);
    // eslint-disable-next-line
  }, [page]);

  // Get last page number as components mounts
  useEffect(() => {
    const getLastPage = async () => {
      const res = await axios.get(REPOS_URL);
      await setLastPage(
        res.headers.link ? parseInt(parse(res.headers.link).last.page) : null // Last page number present in response's headers
      );
    };
    getLastPage();
    // eslint-disable-next-line
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div>
      {/* Top pagination for repos */}
      {lastPage && (
        <ReposPagination page={page} setPage={setPage} lastPage={lastPage} />
      )}
      <div className="mt-8 w-1/2 text-center text-lg text-gray-900 mx-auto">
        {repos.length} results
      </div>
      {/* Map through all repos */}
      {repos.map((repo) => (
        <Repo key={repo.id} repo={repo} />
      ))}
      {/* Bottom pagination for repos */}
      <div className="mb-12">
        {lastPage && (
          <ReposPagination page={page} setPage={setPage} lastPage={lastPage} />
        )}
      </div>
    </div>
  );
};

export default UserRepos;
