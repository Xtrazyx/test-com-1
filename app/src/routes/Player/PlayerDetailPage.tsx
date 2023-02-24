import { useLoaderData, Link } from "react-router-dom";
import RouterLink from "../../componants/RouterLink";
import { Player } from "../../types";

export default function PlayerDetailPage(): JSX.Element {
  const player = useLoaderData() as Player;

  return (
    <div>
      <div className="card">
        <div>
          <img className="card-img" alt="a nice picture" src={player.picture} />
        </div>
        <div>
          <div className="player-name">
            {player.firstname} {player.lastname}
          </div>
          <div>{player.data.age} years</div>
          <div>#{player.data.rank}</div>
          <div>{player.data.points} points</div>
        </div>
      </div>
      <RouterLink route={`/players`} label={`Look at all players`} />
    </div>
  );
}
