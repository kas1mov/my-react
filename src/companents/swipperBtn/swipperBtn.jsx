import { LeftBtnIcon, RightBtnIcon } from "../../assets/icon/icon";

export const SwipperBtn = () => {
  return (
    <div className="home__videos_footer_subs-btns">
      <button className="home__videos_btn">
        <RightBtnIcon />
      </button>
      <button className="home__videos_btn">
        <LeftBtnIcon />
      </button>
    </div>
  );
};
