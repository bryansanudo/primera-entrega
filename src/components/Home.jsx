import Navbar from "@/components/Navbar";
import GetFiles from "@/routes/GetFiles";
import GetStadistics from "@/routes/GetStadistics";
import PostFiles from "@/routes/PostFiles";
import RutaNueva from "@/routes/RutaNueva";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = ({ setAuth }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar setAuth={setAuth} />}>
          <Route path="/getFiles" element={<GetFiles />}></Route>
          <Route path="/getFiles/:id" element={<GetFiles />}></Route>
          <Route path="/getStadistics" element={<GetStadistics />}></Route>
          <Route path="/postFiles" element={<PostFiles />}></Route>
          <Route path="/rutaNueva" element={<RutaNueva />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
