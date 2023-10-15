import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/HomePage/Home";
import { Tweets } from "./pages/TweetsPage/Tweets";
import { GlobalStyle } from "./components/GlobalStyles/GlobalStyles.styled";
import { Layout } from "./components/Layout/Layout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
