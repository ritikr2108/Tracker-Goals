import React, { useState } from 'react';
import TodoItem from '../TodoItem';
import './Search.css';

const Search = ({ todos }) => {
  const [query, setQuery] = useState('');
  const [searchedResults, setSearchedResults] = useState([]);
  const [searchedPriority, setSearchedPriority] = useState([]);

  const handlePriority = (event) => {
    const value = event.target.value;
    setSearchedPriority(value);

    // Filter todos where the "priority" matches the selected priority
    const results = todos.filter(
      (task) =>
        task.priority &&
        typeof task.priority === 'string' &&
        task.priority.toLowerCase() === value.toLowerCase()
    );
    setSearchedResults(results);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    // Show all tasks if query is empty
    if (value.length === 0) {
      setSearchedResults([]);
      return;
    }

    // Filter todos where the "title" includes the query string
    const results = todos.filter(
      (task) =>
        task.title &&
        typeof task.title === 'string' &&
        task.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchedResults(results);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    // Filter todos where the "title" includes the query string
    const results = todos.filter(
      (task) =>
        task.title &&
        typeof task.title === 'string' &&
        query.length > 0 &&
        task.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchedResults(results);
  };

  return (
    <>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search the task title"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-button">Search</button>

        {/* Priority filter dropdown */}
        <select onChange={handlePriority} className="priority-select">
          <option value="">Filter by Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </form>

      {/* Display search results */}
      <div className="search-results">
        {searchedResults.length > 0 ? (
          <ul>
            {searchedResults.map((todo, index) => (
              <li key={index} className="search-result-item">
                <TodoItem key={todo.id} todo={todo} />
              </li>
            ))}
          </ul>
        ) : (
          query && <p className="no-results">No matching tasks found.</p>
        )}
      </div>
    </>
  );
};

export default Search;
