import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";
import Bnavbar from "./Bnavbar";
import Card from "./Card";

function Search() {
  const [search, setSearch] = useState("");
  const [gameData, setGameData] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    searchGame();
  }, []);
  const searchGame = (e) => {
    setDisplay(!display);
    console.log("hey hii");
    axios
      .get("https://www.cheapshark.com/api/1.0/games?title=" + search + "")
      .then((res) => setGameData(res.data))
      .catch((err) => console.log(err));
    console.log(gameData);
    setSearch("");
  };
  return (
    <>
      <Bnavbar />
      <div className="">
        <div className="s005">
          <h1>WHAT ARE YOU LOOKING FOR ?</h1>
          <br />

          <div className="input-field">
            <input
              className="form-control"
              id="choices-text-preset-values"
              value={search}
              type="text"
              placeholder="Search your games..."
              // onKeyPress={searchGame}
              onChange={(e) => setSearch(e.target.value)}
            />
            <a className="asearch" href="#card">
              <button className="btn-search" type="button" onClick={searchGame}>
                Search
              </button>
            </a>
          </div>
        </div>
        {display && search !== " " ? (
          <div className="greet">
            <h1>
              <span>&#8964;</span>
              welcome to your result <span>&#8964;</span>
            </h1>
          </div>
        ) : null}
        <div id="card" className="maincard">
          <Card game={gameData} />
        </div>
      </div>
    </>
  );
}
export default Search;
