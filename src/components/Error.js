import { useRouteError } from "react-router-dom";

const Error = () => {
const err = useRouteError()

  return (
    <div>
      <h1>Error hai biro! check it "_"</h1>
      <h1>{err.status +" : "+err.statusText}</h1>
    </div>
  );
};

export default Error;
