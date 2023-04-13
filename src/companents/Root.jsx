import { Route, Routes } from "react-router-dom";
import { Header } from "./Header/Header";
import { MenuBar } from "./MenuBar/MenuBar";
import { dataChannelMenu, dataMenu } from "../utils/data";
import { Channel } from "./Channel/Channel";
import { Videos } from "./Videos/videos";
// import { Home } from "../pages/Home"

export const Root = () => {
  return (
    <div className="root">
      <div className="root_menu">
        <div className="Header">
          <Header />
        </div>
        <div className="root_main">
          <Routes>
            {dataMenu.map((item) => (
              <Route path={item.path} element={<MenuBar />} key={item.id} />
            ))}
            <Route path={"/channel/*"} element={<MenuBar />} />
            {dataChannelMenu.map((item) => (
              <Route path={item.path} element={<MenuBar />} key={item.id}/>
            ))}
          </Routes>
          <div className="root__body">
            {/* <Home/>  */}
            <Routes>
              {dataMenu.map((item) => (
                <Route path={item.path} element={item.page} key={item.id} />
              ))}
              <Route path={"/channel/*"} element={<Channel />} />
              <Route path={"/videos"} element={<Videos />} />
              {dataChannelMenu.map((item) => (
                <Route path={item.path} element={<Channel />} key={item.id}/>
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};
