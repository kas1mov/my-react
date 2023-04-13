import { NavLink } from "react-router-dom";
import AvatarImg from "../assets/image/Gta.jpg";
import { dataVideos } from "../utils/data";
import { HomeFooter } from "../companents/home__videos/Footer";
import { SwipperBtn } from "../companents/swipperBtn/swipperBtn";

export const Home = () => {
  return (
    <div className="home">
      <div className="home__videos_top">
        <div className="home__videos_channel">
          <NavLink className="home__videos_title" to={"/channel/*"}>
            <div className="home__videos_title-img">
              <img src={AvatarImg} alt="Avatar Girl" />
            </div>
            <h2 className="home__videos_title-text">GTA: San Andreas</h2>
          </NavLink>
          <SwipperBtn/>
        </div>
        <div className="home__videos">
          {dataVideos.map((item) => (
            <NavLink className="home__video" key={item.id} to={"/videos"}>
              <div className="home__video_img">
                <img src={item.img} alt="videoImg" />
              </div>
              <p className="home__video_title">{item.title}</p>
              <div className="home__video_name">
                <p className="home__video_name-text">{item.time}</p>
                <p className="home__video_name-text">{item.name}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="home__videos_main">
        <div className="home__videos_main_top">
          <h2 className="home__videos_main-title">Recommended</h2>
          <SwipperBtn/>
        </div>
        <div className="home__mains">
          {dataVideos
            .map((item) => (
              <NavLink className="home__main" key={item.id} to={"/videos"}>
                <div className="home__main_img">
                  <img src={item.img} alt="mainVideos" />
                </div>
                <p className="home__video_title">{item.title}</p>
                <div className="home__video_name">
                  <p className="home__video_name-text">{item.time}</p>
                  <p className="home__video_name-text">{item.name}</p>
                </div>
              </NavLink>
            ))
            .splice(0, 2)}
        </div>
      </div>
      <HomeFooter />
    </div>
  );
};
