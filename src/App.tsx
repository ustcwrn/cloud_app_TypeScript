import React from "react";
import { IconStyle } from "./assets/iconfont/iconfont";
import { GlobalStyle } from "./style";
import MyRoutes from "./routes";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        <MyRoutes />
      </HashRouter>
    </div>
  );
}

export default App;
