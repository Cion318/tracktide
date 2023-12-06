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
    <div className="flex sm:py-3">
      <input
        className="mr-2 w-full appearance-none rounded border border-green-400 bg-[#3b3b3b] px-3 py-2 text-white"
        type="text"
        name="name"
        autoComplete="off"
        placeholder="Search for title, artist, album, ..."
        onChange={handleSearchTermChange}
      />
      <button
        className="bg-green-gradient ml-2 rounded px-4 py-2"
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
