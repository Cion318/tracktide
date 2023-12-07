import PropTypes from "prop-types";

import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginButton = ({ onClick }) => {
  return (
    <button
      className="bg-green-gradient ml-1 rounded px-2 py-1 font-bold text-white"
      type="button"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faRightToBracket} />
    </button>
  );
};

LoginButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoginButton;
