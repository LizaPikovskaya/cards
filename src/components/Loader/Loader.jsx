import { Backdrop, WrapperForLoader } from "./Loader.styled";
import RiseLoader from "react-spinners/RiseLoader";

export const Loader = () => {
  return (
    <Backdrop>
      <WrapperForLoader>
        <RiseLoader color="rgba(87, 54, 163, 1)" size={20} />
      </WrapperForLoader>
    </Backdrop>
  );
};
