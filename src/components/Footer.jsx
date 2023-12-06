import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faTailwind from "../assets/faTailwind.png";
import faVite from "../assets/faVite.svg";

const Footer = () => {
  return (
    <div className="mt-20 flex items-center justify-end sm:mx-6 sm:mt-4 xl:mx-10 xl:px-6 2xl:mx-40">
      <h1 className="text-sm text-dimWhite">Build with</h1>
      <img className="w-6 pl-1" src={faVite} />
      <FontAwesomeIcon className="pl-1 text-xl" icon={faReact} />
      <img className="pl-1 text-xl" src={faTailwind} />
    </div>
  );
};

export default Footer;
