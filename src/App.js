import { Landing } from "./components/Landing";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Home } from "./components/Home";
import { Finance } from "./components/Finance";
import { Service } from "./components/Service";
import { Queries } from "./components/Queries";
import { Bookings } from "./components/Bookings";
import { Schedule } from "./components/Schedule";

import { Video } from "./components/Service/Video";
import { Text } from "./components/Service/Text";
import { Webinar } from "./components/Service/Webinar";
import { Add } from "./components/Service/Add";
import { Edit } from "./components/Service/Edit";
import { Basic } from "./components/Service/Edit/Basic";
import { Advanced } from "./components/Service/Edit/Advanced";
import { Share } from "./components/Service/Edit/Share";


import { Profile, loader } from "./components/Profile";
import Login from "./components/Login";

function App() {

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login/>
    },
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
          element: <Service/>,
          children: [
            {
              path: 'video',
              element: <Video/>
            },
            {
              path: 'text',
              element: <Text/>
            },
            {
              path: 'webinar',
              element: <Webinar/>
            }
          ]
        },
        {
          path: "dashboard/services/add",
          element: <Add/>
        },
        {
          path: "dashboard/services/edit",
          element: <Edit/>,
          children: [
            {
              path: 'basic/:serviceId',
              element: <Basic/>
            },
            {
              path: 'advanced/:serviceId',
              element: <Advanced/>
            },
            {
              path: 'share/:serviceId',
              element: <Share/>
            }
          ]
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
          path: "dashboard/schedule/",
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
