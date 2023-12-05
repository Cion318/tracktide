import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faTailwind from "../assets/faTailwind.png";
import faVite from "../assets/faVite.svg";

const Footer = () => {
  return (
    <div className="fixed bottom-6 right-8 flex items-center justify-end">
      <h1 className="text-sm text-dimWhite">Created with</h1>
      <img className="w-6 pl-1" src={faVite} />
      <FontAwesomeIcon className="pl-1 text-xl" icon={faReact} />
      <img className="pl-1 text-xl" src={faTailwind} />
    </div>
  );
};

export default Footer;
