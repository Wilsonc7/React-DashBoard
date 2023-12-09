import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts";
import { ListMovies } from "./pages/List-movies";
import { Home } from "./pages/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movies",
        element: <ListMovies />,
      },
      {
        
      }
    ],
  },
]);
