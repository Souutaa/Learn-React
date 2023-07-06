import React from "react";
import AlbumList from "../components/AlbumList";
import { Route, Routes } from "react-router-dom";

AlbumFeatures.propTypes = {};

function AlbumFeatures(props) {
  const albumList = [
    {
      id: 1,
      title: "The Beatles",
      thumpnail:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/4/a/5/a4a5f7d375e373d2856aa75185e5a615.jpg",
    },
    {
      id: 2,
      title: "The Beatles1",
      thumpnail:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/0/0/d/900d29d81f4ab570c451fec9ae384f55.jpg",
    },
    {
      id: 3,
      title: "The Beatles23",
      thumpnail:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/2/e/3/92e34e8a92ba589ba41c078bfbbf57f0.jpg",
    },
    {
      id: 4,
      title: "The Beatles4",
      thumpnail:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg",
    },
  ];

  return (
    <Routes>
      <Route path="albums">
        <Route index element={<AlbumList albumList={albumList} />} />
      </Route>
    </Routes>
  );
}

export default AlbumFeatures;
