import { Link } from "react-router-dom";

export default function RouterLink({ route, label }: { route: string, label: string }) {
   return (
    <div className="link-container">
      <Link className="link" to={route}>
        {label}
      </Link>
    </div>
  );
}
