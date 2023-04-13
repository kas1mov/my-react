import { Favarits } from "../pages/Favarrits";
import { Games } from "../pages/Games";
import { History } from "../pages/History";
import { Home } from "../pages/Home";
import { Library } from "../pages/Library";
import { Like } from "../pages/Like";
import { Music } from "../pages/Music";
import { Subc } from "../pages/Subs";
import { Trending } from "../pages/Trending";
import { Watch } from "../pages/Watch";
import {
  FavaritIcon,
  GameIcon,
  HistoryIcon,
  HomeIcon,
  LibIcon,
  LikeIcon,
  MusicIcon,
  ShowIcon,
  SubcIcon,
  TradingIcon,
  WatchIcon,
} from "../assets/icon/icon";
import { ChannelMenuHome } from "../companents/Channel/ChannelHome";
import { ChannelVideos } from "../companents/Channel/Videos";
import { ChannelPlay } from "../companents/Channel/Playlist";

export const dataMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
    page: <Home />,
  },
  {
    id: 2,
    title: "Trending",
    path: "/trending",
    icon: <TradingIcon />,
    page: <Trending />,
  },
  {
    id: 3,
    title: "Subscriptions",
    path: "/subscriptions",
    icon: <SubcIcon />,
    page: <Subc />,
  },
  {
    id: 4,
    title: "Library",
    path: "/library",
    icon: <LibIcon />,
    page: <Library />,
  },
  {
    id: 5,
    title: "History",
    path: "/history",
    icon: <HistoryIcon />,
    page: <History />,
  },
  {
    id: 6,
    title: "Watch later",
    path: "/watch",
    icon: <WatchIcon />,
    page: <Watch />,
  },
  {
    id: 7,
    title: "Favourites",
    path: "/farourites",
    icon: <FavaritIcon />,
    page: <Favarits />,
  },
  {
    id: 8,
    title: "Liked videos",
    path: "/liked",
    icon: <LikeIcon />,
    page: <Like />,
  },
  {
    id: 9,
    title: "Music",
    path: "/music",
    icon: <MusicIcon />,
    page: <Music />,
  },
  {
    id: 10,
    title: "Games",
    path: "/games",
    icon: <GameIcon />,
    page: <Games />,
  },
  {
    id: 11,
    title: "Show more",
    path: "/show",
    icon: <ShowIcon />,
    page: "/",
  },
];

export const dataVideos = [
  {
    id: 1,
    img: "https://pic.rutubelist.ru/video/1e/e1/1ee171bacf6734348c4705e11cc166e5.jpg",
    title: "Gta - San Andreas",
    time: "80k views  ·  3 days ago",
    name: "Dollie Blair",
  },
  {
    id: 2,
    img: "https://www.brodyaga.com/pages/photos/Russia/Sochi%20Russia%201530837082(www.brodyaga.com).jpg",
    title: "A Brief History Of Creation",
    time: "80k views  ·  3 days ago",
    name: "Dollie Blair",
  },
  {
    id: 3,
    img: "https://avatars.mds.yandex.net/i?id=7b248cbe2f57e8711b126881065a236299761a9d-8500949-images-thumbs&n=13",
    title: "Asteroids",
    time: "80k views  ·  3 days ago",
    name: "Dollie Blair",
  },
  {
    id: 4,
    img: "https://avatars.mds.yandex.net/i?id=34ce921f67ec99394935aa41efee9ebbb9635902-7718735-images-thumbs&n=13",
    title: "A Brief History Of Creation",
    time: "80k views  ·  3 days ago",
    name: "Dollie Blair",
  },
  {
    id: 5,
    img: "https://static17.tgcnt.ru/posts/_0/2c/2cc03577ca208f6d1ab15b71af52c012.jpg",
    title: "Medical Care Is Just",
    time: "80k views  ·  3 days ago",
    name: "Dollie Blair",
  },
  // {
  //     id:6,
  //     img:"https://static17.tgcnt.ru/posts/_0/2c/2cc03577ca208f6d1ab15b71af52c012.jpg",
  //     title: "Medical Care Is Just",
  //     time:"80k views  ·  3 days ago",
  //     name:"Dollie Blair",
  // }
];

export const dataSubs = [
  {
    id: 1,
    img: "https://www.kindpng.com/picc/m/172-1725179_transparent-man-hair-png-man-white-teeth-png.png",
    name: "Gussie Singleton",
  },
  {
    id: 2,
    img: "https://avatars.mds.yandex.net/i?id=d3a595c58738530ce73bf27134650c80697704ab-9243216-images-thumbs&n=13",
    name: "Nora Francis",
  },
  {
    id: 3,
    img: "https://live.staticflickr.com/7422/12589075755_ec0f494f95_b.jpg",
    name: "Belle Briggs",
  },
  {
    id: 4,
    img: "https://75276bc03af26d7c1f58-72b421883bb5b133f34e068afdd7cb11.ssl.cf3.rackcdn.com/2015/11/man-in-suit2.jpg",
    name: "Eunice Cortez",
  },
  {
    id: 5,
    img: "https://www.thefashionisto.com/wp-content/uploads/2019/03/Fashionable-Man-800x575.jpg",
    name: "Emma Hanson",
  },
  {
    id: 6,
    img: "https://www.thefashionisto.com/wp-content/uploads/2019/03/Fashionable-Man-800x575.jpg",
    name: "Leah Berry",
  },
];

export const dataChannelMenu = [
  {
    id: 1,
    text: "Home",
    path: "*/",
    page: <ChannelMenuHome />,
  },
  {
    id: 2,
    text: "Videos",
    path: "*/videos",
    page: <ChannelVideos />,
  },
  {
    id: 3,
    text: "Playlists",
    path: "*/playlist",
    page: <ChannelPlay />,
  },
  {
    id: 4,
    text: "Channels",
    path: "*/channels",
    page: <ChannelMenuHome />,
  },
  {
    id: 5,
    text: "Discussion",
    path: "*/discussion",
    page: <ChannelMenuHome />,
  },
  {
    id: 6,
    text: "About",
    path: "*/about",
    page: <ChannelMenuHome />,
  },
];
