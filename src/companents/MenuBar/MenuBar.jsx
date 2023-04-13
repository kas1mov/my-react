import { NavLink } from "react-router-dom";
import { dataMenu, dataSubs } from "../../utils/data";
import { SettingIcon } from "../../assets/icon/icon";

export const MenuBar = () =>{
    return(
        <div className="menu">
            <div className="menu__all">
                {
                   dataMenu.map((item)=>(
                     <div className="menu__list" key={item.id}>
                        <NavLink to={item.path} className="menu__link">
                           <div className="menu__icon">
                               {item.icon}
                           </div>
                           <p className="menu_title">{item.title}</p>
                        </NavLink>
                     </div>
                   ))
                }
            </div>
            <div className="menu__channels">
                <h2 className="menu__channels_title">Subscriptions</h2>
                {dataSubs.map(item =>(
                    <NavLink className="menu__channel" to={"/channel/*"} key={item.id}>
                        <div className="menu__channel_img">
                            <img src={item.img} alt="channelImg" />
                        </div>
                        <p className="menu__channel_name">{item.name}</p>
                    </NavLink>
                ))}
            </div>
                <NavLink to={"/setting"} className="menu__setting">
                    <SettingIcon/>
                    <p className="menu__setting_text">Setting</p>
                </NavLink>
        </div>
    )
}
