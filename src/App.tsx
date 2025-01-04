import { BrowserRouter, Route, Routes } from "react-router";

import QR from "./components/QR";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<QR />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
