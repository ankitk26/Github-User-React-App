import { useUser } from "../context/UserContext";

const Avatar = () => {
  const { user } = useUser();

  return (
    <div className="py-5 md:px-10">
      <img
        src={user.avatar_url}
        alt="avatar"
        className="object-contain mx-auto mb-5 rounded-full shadow-lg w-52 h-52"
      />

      <h2 className="my-2 text-xl text-center text-gray-900">{user.name}</h2>

      <div className="flex flex-col justify-center w-10/12 gap-2 mx-auto text-center md:flex-row md:gap-8 md:w-auto">
        <div className="flex flex-col items-center gap-1">
          <strong className="text-blue-700 ">Following</strong>
          <div className="flex items-center">
            <i className="mr-2 text-gray-900 material-icons">people</i>
            <span>{user.following}</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <strong className="text-blue-700">Followers</strong>
          <div className="flex items-center">
            <i className="mr-2 text-gray-900 material-icons">people</i>
            <span>{user.followers}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
