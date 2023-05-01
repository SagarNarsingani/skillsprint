import { Landing } from "./components/Landing";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Home } from "./components/Home";
import { Finance } from "./components/Finance";
import { Service } from "./components/Service";
import { Queries } from "./components/Queries";
import { Bookings } from "./components/Bookings";
import { Schedule } from "./components/Schedule";

import { Profile, loader } from "./components/Profile";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing/>,
      children: [
        {
          path: "dashboard/home",
          element: <Home/>
        },
        {
          path: "dashboard/finance",
          element: <Finance/>
        },
        {
          path: "dashboard/services",
          element: <Service/>
        },
        {
          path: "dashboard/queries",
          element: <Queries/>
        },
        {
          path: "dashboard/Upcoming Bookings",
          element: <Bookings/>
        },
        {
          path: "dashboard/schedule",
          element: <Schedule/>
        }
      ]
    },

    {
      path: '/:username',
      element: <Profile/>,
      loader: loader
    }
])
  return (
      <div className="App">
        <RouterProvider router={router}/>
      </div>
  );
}

export default App;
