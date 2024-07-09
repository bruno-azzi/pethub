import React from "react";

import "swiper/css";
import "swiper/css/effect-cards";

const Search: React.FC = ({ onChange }) => {
  return (
    <div className="relative">
      <input
        type="text"
        onChange={onChange}
        className="border-2 rounded-full px-4 py-1 pl-9 border-blue-400 mb-2 w-full"
        placeholder="Procurar"
      />
      <span className="i-mdi-search w-6 h-6 absolute left-2 top-[6px] text-blue-400"></span>
    </div>
  );
};

export default Search;
