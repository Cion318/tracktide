import PropTypes from "prop-types";

const LoginInput = ({ setClientId }) => {
  const handleChange = (e) => {
    setClientId(e.target.value);
  };

  return (
    <input
      className="focus:shadow-outline mr-1 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-100 shadow focus:outline-none"
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
