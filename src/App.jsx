import Home from "@/components/Home";
import Login from "@/components/Login";
import { useState } from "react";

const App = () => {
  const [auth, setAuth] = useState(false);
  console.log(auth);

  return <>{auth ? <Home setAuth={setAuth} /> : <Login setAuth={setAuth} />}</>;
};

export default App;
