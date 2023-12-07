import PropTypes from "prop-types";

const LoginInput = ({ setClientId }) => {
  const handleChange = (e) => {
    setClientId(e.target.value);
  };

  return (
    <input
      className="mr-1 w-full appearance-none rounded border border-green-500 px-2 leading-tight text-gray-100"
      type="password"
      name="name"
      autoComplete="off"
      placeholder="Your Client Id"
      onChange={handleChange}
    />
  );
};

LoginInput.propTypes = {
  setClientId: PropTypes.func.isRequired,
};

export default LoginInput;
