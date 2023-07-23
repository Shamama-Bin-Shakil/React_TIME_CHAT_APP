import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";
import GlobalStyle from "./GlobalStyled";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/chat/:name" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
