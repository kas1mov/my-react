import { Route, Routes } from "react-router-dom";
import { dataChannelMenu } from "../../utils/data";

export const RoutesChannel = () => {
  return (
    <Routes>
      {dataChannelMenu.map((item) => (
        <Route path={item.path} element={item.page} key={item.id} />
      ))}
    </Routes>
  );
};
