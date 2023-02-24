import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import { getAllPlayers } from './requests/getAllPlayers';
import PlayersPage from './routes/Players/PlayersPage';
import PlayerDetailPage from './routes/Player/PlayerDetailPage';
import { getPlayerById } from './requests/getPlayerById';
import ErrorPage from './routes/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/players',
        loader: getAllPlayers,
        element: <PlayersPage />,
      },
      {
        path: '/players/:id',
        loader: getPlayerById,
        element: <PlayerDetailPage />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
