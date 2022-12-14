import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ISearchInput {
  onChange: (value: string) => void;
}

const SearchInput = ({ onChange }: ISearchInput) => {
  return (
    <div className="w-11/12 md:w-full flex items-center justify-center mb-16 px-4">
      <div className="w-full h-14 flex items-center justify-start md:max-w-760 shadow-custom-4 px-4">
        <FontAwesomeIcon icon={faSearch} className="text-brand-grey-2" />
        <input
          className="w-full h-full outline-none pr-2 placeholder:text-brand-grey-2"
          type="text"
          onChange={(event) => onChange(event.target.value)}
          placeholder="جستجو کنید..."
        />
      </div>
    </div>
  );
};

export default SearchInput;
