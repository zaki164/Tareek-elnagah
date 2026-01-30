import { images } from "../Constants";
import Image from "./Image";

const Navbar = () => {

  return (
    <div className="w-full shadow-md bg-lightBg text-white">
      <div className="custom-container flex_center gap-4">
        <Image
          src={images.logo}
          alt="logo"
          // width={80}
          className="w-[100px] h-[100px]"
        />
      </div>
    </div>
  );
};

export default Navbar;
