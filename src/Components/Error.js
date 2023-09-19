import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  // console.log(err);
  return (
    <div className="flex justify-center items-center h-screen font-verela font-bold">
      <div className="gap-1">
        <h1>Opps!!</h1>
        <h2>Something went wrong</h2>
        <h3>{status + ": " + statusText}</h3>
      </div>
    </div>
  );
};

export default Error;
