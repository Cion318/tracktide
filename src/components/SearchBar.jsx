import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useCallback, useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const search = useCallback(() => {
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);

  return (
    <div className="flex">
      <input
        className="focus:shadow-outline mr-1 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-100 shadow focus:outline-none"
        type="text"
        name="name"
        autoComplete="off"
        placeholder="Search for title, artist, album, ..."
        onChange={handleSearchTermChange}
      />
      <button
        className="focus:shadow-outline bg-green-gradient ml-1 rounded px-4 py-2 font-bold text-gray-100"
        type="button"
        onClick={search}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
