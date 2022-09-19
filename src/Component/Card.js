import React, { useState } from "react";
import "./Card.css";
import Page from "./Page";

function Card({ game, id }) {
  const [show, setShow] = useState(false);

  const [gameItem, setGameItem] = useState();

  return (
    <>
      {game.map((item, index) => {
        let imglink = item.thumb;
        let id = item.gameID;
        let gameName = item.external;
        if (imglink !== undefined && gameName !== undefined) {
          return (
            <>
              <div
                className="card card-width"
                onClick={() => {
                  setShow(true);
                  setGameItem(item);
                }}
              >
                <div className="cardimg">
                  <img src={imglink} alt="Logo" className="card-image" />
                </div>
                <div className="card-header">
                  <h3 className="card-title">{gameName}</h3>
                </div>
              </div>
              <Page
                show={show}
                item={gameItem}
                id={id}
                onClose={() => setShow(false)}
              />
            </>
          );
        }
      })}
    </>
  );
}

export default Card;
