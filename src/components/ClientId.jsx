import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";

function ClientId({ onCheckClientId }) {
  const [clientIdValue, setClientIdValue] = useState("");

  const handleClientIdChange = (event) => {
    setClientIdValue(event.target.value);
  };

  const handleClientIdCheck = (event) => {
    event.preventDefault();
    onCheckClientId(clientIdValue);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col sm:w-2/3 md:w-2/3 lg:w-1/2">
        {/* Top Section (2/3) */}
        <div className="h-2/3 rounded-t-lg bg-zinc-800 bg-opacity-70 p-4">
          <h2 className="text-left text-2xl font-bold text-gray-100">
            Get Started
          </h2>
          <p className="py-4 text-left text-sm text-gray-100">
            First follow{" "}
            <a
              className="text-blue-400"
              href="https://developer.spotify.com/documentation/web-api/concepts/apps"
              target="_blank"
              rel="noreferrer"
            >
              this
            </a>{" "}
            guide to setup a client id. Afterwards add
            https://cion318.github.io/tracktide/ to the Redirect URIs field
            inside of your app found in your dashboard.
          </p>
        </div>

        {/* Bottom Section (1/3) */}
        <div className="h-1/3 rounded-b-lg bg-blue-600 bg-opacity-50 p-4">
          <form onSubmit={handleClientIdCheck}>
            <div>
              <div className="flex">
                <input
                  className="focus:shadow-outline mr-1 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-100 shadow focus:outline-none"
                  type="text"
                  name="name"
                  autoComplete="off"
                  value={clientIdValue}
                  placeholder="Your Client Id"
                  onChange={handleClientIdChange}
                />
                <button
                  className="focus:shadow-outline ml-1 rounded bg-blue-500 px-4 py-2 font-bold text-gray-100 hover:bg-zinc-800 focus:outline-none"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faRightToBracket} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between"></div>
          </form>
        </div>
      </div>
    </div>
  );
}

ClientId.propTypes = {
  onCheckClientId: PropTypes.func.isRequired,
};

export default ClientId;
