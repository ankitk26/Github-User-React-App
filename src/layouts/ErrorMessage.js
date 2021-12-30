const ErrorMessage = ({ error }) => {
  return (
    <p className="w-10/12 p-2 mx-auto mt-10 text-lg text-center text-white bg-red-500 rounded lg:w-1/3">
      {error}
    </p>
  );
};

export default ErrorMessage;
