import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Signin, Signup } from "./pages";
import { Home } from "./pages/home";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  )
}