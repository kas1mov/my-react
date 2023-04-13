import ChannelImg from "../../assets/image/color.jpg";
import ChannelAvatar from "../../assets/image/Avatar.jpeg";
import { RingIcon, SearchIcon } from "../../assets/icon/icon";
import { NavLink} from "react-router-dom";
import { dataChannelMenu } from "../../utils/data";
import { RoutesChannel } from "./routes";
// import { ChannelMenuHome } from "./ChannelHome";

export const Channel = () => {
  return (
    <div className="channel">
      <div className="channel__img">
        <img src={ChannelImg} alt="ChannelImg" />
      </div>
      <div className="channel__subs">
        <div className="channel__subs_title">
          <div className="channel__subs_img">
            <img src={ChannelAvatar} alt="AvatarImg" />
          </div>
          <div className="channel__subs_text">
            <h1 className="channel__title">Margaret Phelps</h1>
            <p className="channel__text">245K subscribed</p>
          </div>
        </div>
        <div className="channel__subs_btns">
          <NavLink to={"/ring"}>
            <RingIcon />
          </NavLink>
          <button className="home__videos_footer_subs-btn">
            Subscribe 2.3m
          </button>
        </div>
      </div>
      <div className="channel__menus">
        <div className="channel__flex">
          <div className="channel__menu">
            {dataChannelMenu.map((item) => (
              <NavLink to={item.path} key={item.id}>
                <h1 className="channel__menu_title">{item.text}</h1>
              </NavLink>
            ))}
            <NavLink to={"/search"}>
              <SearchIcon />
            </NavLink>
          </div>
          <div className="channel__menu_page">
            <RoutesChannel/>
            {/* <ChannelMenuHome/> */}
          </div>
        </div>
      </div>
    </div>
  );
};
