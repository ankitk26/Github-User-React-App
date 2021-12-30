import loader from "../assets/images/loader.svg";

const Loader = () => {
  return (
    <div>
      <img src={loader} alt="Loading..." className="mx-auto mt-32" />
    </div>
  );
};

export default Loader;
