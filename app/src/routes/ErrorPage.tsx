import { useRouteError } from "react-router-dom";
import RouterLink from "../componants/RouterLink";

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops! </h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>404 - NOT FOUND</p>
      <RouterLink route={`/players`} label={`Look at all players`} />
    </div>
  );
}
