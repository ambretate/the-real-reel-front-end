import React, { useState } from "react";
import { getMovieByTitle } from "../../Services/movies.js";
import "./Search.css";
import { Link } from "react-router-dom";
import { getUser } from "../../Services/users.js";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [userResults, setUserResults] = useState([]);

  const handleSearch = async () => {
    try {
      const formattedQuery = toTitleCase(query);
      const data = await getMovieByTitle(formattedQuery);
      const userData = await getUser(formattedQuery);
      setResults(data || []);
      setUserResults(userData ? [userData] : []);
      console.log(userData)
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };
  
  const toTitleCase = (str) => {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="SEARCH"
          value={query}
          onChange={handleChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          GO
        </button>
      </form>
      <div className="search-result">
        {results &&
          results.map((result) => (
            <div key={result.id} className="results">
              <p>{result.title}</p>
              <Link to={`/movies/${result._id}`}>
                <img
                  src={result.image}
                  className="search-result-image"
                  alt={result.title}
                />
              </Link>
            </div>
          ))}
      </div>
      {userResults.length > 0 && (
        <div>
          <h2>Users</h2>
          {userResults.map((result) => (
            <div key={result.id} className="results">
              <p>{result.username}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default SearchBar;
