import { RouterProvider } from "react-router";
import "./App.css";
import { routers } from "./Pages/Routers/Router/Router";

function App() {
  return (
    <div className="">
      <div>
        <RouterProvider router={routers} />
      </div>
    </div>
  );
}

export default App;
