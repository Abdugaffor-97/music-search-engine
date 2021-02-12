import React from "react";
import { ISingleMusicInterface } from "../../types/interfaces";

export default function SingleMusic(props: ISingleMusicInterface) {
  return (
    <div className="track-container">
      <div className="img-container">
        <img
          style={{ borderRadius: "10px", width: "85%" }}
          src={props.cover}
          alt="img-cover"
        />
      </div>

      <div className="track-body">
        <a href="#ss">{props.title}</a>
        <div>
          <span>{props.title}</span>
        </div>
      </div>
    </div>
  );
}
