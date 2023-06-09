import React from "react";
import { IconStyle } from "./assets/iconfont/iconfont";
import { GlobalStyle } from "./style";
import MyRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    // 为项目注入store
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        <MyRoutes />
      </HashRouter>
    </Provider>
  );
}

export default App;
