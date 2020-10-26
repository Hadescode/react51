import React from "react";
import KetQuaTrochoiF from "./KetQuaTrochoiF";

import XucXacF from "./XucXacF";

export default function GameXucXacReactF() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(./img/BaiTapXucXac/bgGame.png)",
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          fontFamily: "fontGame",
        }}
      >
        <h1 className="display-4 text-center">Bai Tap Game Xuc Xac</h1>
        <XucXacF />
        <KetQuaTrochoiF />
      </div>
    </div>
  );
}
