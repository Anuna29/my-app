import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Home, Joke, Posts, Signin, Signup } from "./pages";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/joke" element={<Joke />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
      </Routes>
    </BrowserRouter>
  )
}