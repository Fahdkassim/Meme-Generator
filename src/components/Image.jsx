import React from "react";

export default function Image(props) {
  return (
    <div>
      <img src={props.item.data.memes.url} />
    </div>
  );
}
