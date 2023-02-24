import { useLoaderData, Link } from "react-router-dom";
import { PlayerList } from "../../types";

export default function PlayersPage(): JSX.Element {
  const payload = useLoaderData() as PlayerList;

  return (
    <div className="grid">
      {payload?.map((player, index) => (
        <Link className="grid-item" key={index} to={`/players/${player.id}`}>
          <img className="grid-image" alt="a nice picture" src={player.picture} />
          <div>{player.firstname} {player.lastname}</div>
        </Link>
      ))}
    </div>
  );
}
