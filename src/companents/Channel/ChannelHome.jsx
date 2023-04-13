import { NavLink } from "react-router-dom";
import { dataSubs, dataVideos } from "../../utils/data";
import { SwipperBtn } from "../swipperBtn/swipperBtn";
import PageImg from "../../assets/image/Channel.jpg";

export const ChannelMenuHome = () => {
  return (
    <div className="channel__menu_home">
      <div className="channel__menu_video">
        <NavLink to={"/videos"}>
          <div className="channel__menu_page_video">
            <div className="channel__menu_page_video_img">
              <img src={PageImg} alt="" />
            </div>
            <div className="channel__menu_page_video_data">
              <h1 className="channel__menu_page_video_title">
                Choosing The Best Audio Player <br /> Software For Your Computer
              </h1>
              <p className="channel__menu_page_video_text">
                Your cheap internet-based banner advertising will become one of
                the sought for ads there are. Today, the world of Internet
                advertising is rapidly evolving beyond banner ads and intrusive
                pop-ups. Bayles A common medium for advertising on the Internet
                is the use of banner ads.
              </p>
              <p className="channel__menu_page_video_time">
                11k views · 6 months ago
              </p>
            </div>
          </div>
        </NavLink>
        <div className="ChannelHome">
          <div className="channel__list">
            <p className="channel__list_text">Recommended channel</p>
            <div className="channel__items">
              {dataSubs
                .map((item) => (
                  <NavLink
                    className="channel__item"
                    key={item.id}
                    to={"/channel/*"}
                  >
                    <div className="channel__item_img">
                      <img src={item.img} alt="" />
                    </div>
                    <h2 className="channel__item_name">{item.name}</h2>
                  </NavLink>
                ))
                .slice(0, 3)}
            </div>
          </div>
        </div>
      </div>
      <div className="channel__videos_footer">
        <div className="channel__videos_top">
          <h1 className="channel__videos_title">Margaret Phelps videos</h1>
          <SwipperBtn />
        </div>
        <div className="channel__videos">
          {dataVideos.map((item) => (
            <NavLink className="channel__video" to={"/videos"} key={item.id}>
              <div className="channel__video_img">
                <img src={item.img} alt="" />
              </div>
              <h2 className="channel__video_title">{item.title}</h2>
              <div className="channel__video_text">
                <p className="channel__video_time">{item.time}</p>
                <p className="channel__video_time">{item.name}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
