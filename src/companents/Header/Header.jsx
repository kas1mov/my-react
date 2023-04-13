import { NavLink } from "react-router-dom";
import { BurgerIcon, MenuIcon, RingIcon, SearchIcon, VideoIcon } from "../../assets/icon/icon";
import Logo from "../../assets/image/YouTube.png";
import Avatar from "../../assets/image/Avatar.jpeg";

export const Header = () =>{
    return(
        <div className="header">
            <div className="menu__top">
               <button className="menu__burger" onClick={transition}>
                   <BurgerIcon/>
               </button>
               <NavLink className="menu__logo">
                   <img src={Logo} alt="YouTubeLogo" />
               </NavLink>
            </div>
            <div className="header__top">
                <div className="header__search">
                   <input type="text" placeholder="Search"  />
                   <button className="header__search__icon"><SearchIcon/></button>
                </div>
                <div className='header__setting'>
                <NavLink to={"/videos"}>
                    <button className='header__video'>
                        <VideoIcon />
                    </button>
                </NavLink>
                <NavLink to={"/menu"}>
                    <button className='header__menu'>
                        <MenuIcon />
                    </button>
                </NavLink>
                <NavLink to={"/ring"}>
                    <button className='header__ring'>
                        <RingIcon />
                    </button>
                </NavLink>
                <div className='header__avatar'>
                    <img src={Avatar} alt='avatar' />
                </div>
            </div>
            </div>
        </div>
    )
}

const transition = () =>{
    const menu  = document.querySelector("menu");
    menu.classList.toggle("transition");
}