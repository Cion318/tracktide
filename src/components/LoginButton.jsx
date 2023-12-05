import PropTypes from "prop-types";

import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginButton = ({ onClick }) => {
  return (
    <button
      className="focus:shadow-outline bg-green-gradient ml-1 rounded px-4 py-2 font-bold text-gray-100"
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
