import { useUser } from "../context/UserContext";
import ErrorMessage from "../layouts/ErrorMessage";
import Loader from "../layouts/Loader";
import Avatar from "./Avatar";
import BasicInfo from "./BasicInfo";

const UserInfo = () => {
  const { error, loading, user } = useUser();

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return null;
  }

  // Show any error
  return (
    <div className="w-screen p-5 mx-auto my-10 bg-gray-200 shadow-2xl md:w-10/12">
      <div className="md:grid md:grid-cols-2 md:gap-10">
        {/* Avatar Section of user */}
        <Avatar />
        <hr className="h-px bg-gray-500 md:hidden" />
        {/* Other Details of user */}
        <BasicInfo />
      </div>
    </div>
  );
};

export default UserInfo;
