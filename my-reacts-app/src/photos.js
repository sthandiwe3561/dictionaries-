import React from "react";
import "./App.css";

export default function Photos(props) {
  return (
    <div className="photo">
      <div className="row">
        {props.data.map(function (photos, index) {
          if (index < 6) {
            return (
              <div className="col-4" key={index}>
                <a
                  href={photos.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={photos.src.landscape}
                    className="img-fluid"
                    alt={photos.photographer}
                  />
                </a>
              </div>
            );
          } else {
            return <div></div>;
          }
        })}
      </div>
    </div>
  );
}
