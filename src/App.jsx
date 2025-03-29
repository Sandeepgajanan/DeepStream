import Header from "./components/Header";
import Body from "./components/Body";
import "remixicon/fonts/remixicon.css";
import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchContainer from "./components/WatchContainer";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-50 px-2 ">
      <Header />
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<MainContainer />} />
          <Route path="watch/:id" element={<WatchContainer />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
