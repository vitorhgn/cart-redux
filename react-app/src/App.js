import GlobalStyle from "./styles/global";

import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";
import Header from "./components/Header";

import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Rotas />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
