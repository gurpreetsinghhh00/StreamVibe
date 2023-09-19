import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import store from "./Utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import SearchPage from "./Components/SearchPage";
import Error from "./Components/Error";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="h-screen overflow-hidden">
        <Header />
        <Body />
      </div>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "search",
        element: <SearchPage />,
        children: [
          {
            path: "",
            element: <SearchPage />,
          },
        ],
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

export default App;
