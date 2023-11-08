import React, { useState } from "react";
import axios from "axios";
import Photos from "./photos";

export default function Images(props) {
  let [photo, setPhoto] = useState([]);
  function api(response) {
    setPhoto(response.data.photos);
  }

  let apiKey = "eac360db5fc86ft86450f3693e73o43f";
  let apiUrl = `https://api.shecodes.io/images/v1/search?query=${props.image[0].word}&key=${apiKey}`;
  axios.get(apiUrl).then(api);

  return (
    <div>
      <Photos data={photo} />
    </div>
  );
}
