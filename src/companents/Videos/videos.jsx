import { NavLink } from "react-router-dom";
import {
  DezLikeIcon,
  MoreIcon,
  ShareIcon,
  VidLikeIcon,
} from "../../assets/icon/icon";
import Video from "../../assets/image/gta.mp4";
import { dataVideos } from "../../utils/data";
import ChannelAvatar from "../../assets/image/Gta.jpg";

export const Videos = () => {
  return (
    <div className="Videos">
      <div className="Videos__video">
        <video src={Video} controls className="video"></video>
        <h1 className="video__title">Gta - San Andreas</h1>
        <div className="video__likes-btn">
          <p className="video__text">123k views</p>
          <div className="video__btns">
            <button className="video__like">
              <VidLikeIcon />
              123k
            </button>
            <button className="video__dezlike">
              <DezLikeIcon />
              123k
            </button>
            <button className="video__share">
              <ShareIcon />
              Share
            </button>
            <button className="video__more">
              <MoreIcon />
            </button>
          </div>
        </div>
        <hr
          style={{
            background: "rgba(216, 216, 216, 0.5)",
            height: "1px",
            border: "none",
          }}
        />
        <div className="video__channels">
          <div className="video__channel">
            <div className="video__channel__img">
              <img src={ChannelAvatar} alt="ChannelImg" />
            </div>
            <div className="video__channel__name">
              <NavLink className="video__channel__title" to={"/channel"} >GTA: San Andreas</NavLink>
              <p className="video__channel__data">Published on 14 Jun 2019</p>
              <p className="video__channel__text">
                A successful marketing plan relies heavily on the pulling-power
                of advertising copy. Writing result-oriented ad copy is
                difficult, as it must appeal to, entice, and convince consumers
                to take action. There is no magic formula to write perfect ad
                copy; it is based on a number of factors, including ad
                placement, demographic, even the consumer’s mood when they see
                your ad...
              </p>
              <p className="video__channel__more">Show more</p>
            </div>
          </div>
          <div className="video__channel__btn">
            <button className="home__videos_footer_subs-btn">
              Subscribe 2.3m
            </button>
          </div>
        </div>
      </div>
      <div className="Videos__videos">
        <div className="videos__top">
          <h1 className="videos__text">Next</h1>
          <div className="videos__autoplay">
            <p className="videos__autoplay_text">AUTOPLAY</p>
            <div className="videos__autoplay_btn">
              <button className="videos__btn"></button>
            </div>
          </div>
        </div>
        <div className="videos">
          {dataVideos.map((item) => (
            <NavLink className="videos__video" key={item.id} to={"/videos"}>
              <div className="videos__img">
                <img src={item.img} alt="videoImg" />
              </div>
              <p className="videos__title">{item.title}</p>
              <div className="videos__name">
                <p className="videos__name-text">{item.time}</p>
                <p className="videos__name-text">{item.name}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
