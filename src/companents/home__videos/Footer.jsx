import { NavLink } from "react-router-dom"
import { dataVideos } from "../../utils/data"
import HomeFooterImg from "../../assets/image/girl.jpg";
import { LeftBtnIcon, RightBtnIcon } from "../../assets/icon/icon";

export const HomeFooter = () =>{
    return(
        <div className="home__videos_footer">
            <div className="home__videos_footer_channel">
               <NavLink className="home__videos_footer_name" to={"/channel/*"}>
                   <div className="home__videos_footer_name-img">
                       <img src={HomeFooterImg} alt="channelImg" />
                   </div>
                   <h2 className="home__videos_footer_name-title">Food & Drink</h2>
                   <p className="home__videos_footer_name-text">Recommended channel for you</p>
               </NavLink>
               <div className="home__videos_footer_subs">
                   <button className="home__videos_footer_subs-btn">Subscribe 2.3m</button>
                   <div className="home__videos_footer_subs-btns">
                     <button className="home__videos_btn"><RightBtnIcon/></button>
                     <button className="home__videos_btn"><LeftBtnIcon/></button>
                   </div>
               </div>
            </div>
            <div className="home__videos_footer_videos">
                {dataVideos.map(item =>(
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
    )
}