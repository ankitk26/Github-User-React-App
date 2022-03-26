import { useSnackbar } from "react-simple-snackbar";
import useCopyClipboard from "react-use-clipboard";

const Repo = ({ repo }) => {
  const [, setCopied] = useCopyClipboard(repo.clone_url);
  const [openSnackbar] = useSnackbar();

  const copyUrl = () => {
    setCopied();
    openSnackbar("Copied to clipboard");
  };

  return (
    <div className="w-full p-5 my-6 bg-gray-200 text-md" key={repo.id}>
      <div className="flex items-center max-w-full gap-12 mt-2">
        <i className="hidden text-gray-800 md:block fa-5x fab fa-git-alt" />
        <div className="flex flex-col w-full max-w-full">
          {/* Link to the repository */}
          <h1 className="text-2xl font-semibold text-blue-500 break-words hover:underline">
            <a
              href={`https://github.com/${repo.owner.login}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.name}
            </a>
          </h1>

          {/* Repository description */}
          <p className="">{repo.description}</p>

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
            <span className="font-semibold text-gray-900">Clone URL: </span>
            <button
              className="text-left text-gray-600 break-words hover:underline"
              type="button"
              onClick={copyUrl}
            >
              {repo.clone_url}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repo;
