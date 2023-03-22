import React, { useState, useEffect } from 'react';
import '../Search/Search.css';
import Data from '../../music.json';

const Search = () => {


  const [display, setDisplay] = useState({
    isOpen: false
  });

  const handleToggle = () => {
    if (display.isOpen) {
      setDisplay({
        isOpen: false
      });
    } else {
      setDisplay({
        isOpen: true
      });
    }
  };

  const [search, setSearch] = useState(null);
  const [data, setData] = useState({ bands: [] });

  useEffect(() => {
    setData({
      bands: Data[0].bands
    });
    myFunction(search);
  }, [search]);

  const myFunction = (query) => {
    if (query !== null) {
      const filteredResults = Data[0].bands.filter((band) => {
        return (
          band.artist.toLowerCase().includes(query)
        );
      });
      setData({
        bands: filteredResults,
      });
    }
  };

  return (
    <div>
      <input
        type="text"
        id="myInput"
        name='query'
        onChange={event => setSearch(event.target.value.toLocaleLowerCase())}
        placeholder="Search for names.."
      />
      <ul id="myUL">
        {data.bands.map(({ artist, albums }, i) => {
          return (
            <li key={artist} ><a href="#" className='bg text-primary' onClick={handleToggle}>{artist}</a></li>
          );
        })}
      </ul>
    </div>
  );
};
export default Search;