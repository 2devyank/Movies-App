
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./components/Home/Home"
import PageNotFound from "./components/PageNotfound/PageNotFound"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import MovieDetail from "./components/MovieDetail/MovieDetail"
// import home from "./components/"
function App() {
  return  (
    
<Router>
<Header/>
<div className="app">
  <Routes>
    
    
    <Route path="/" element={<Home/>}/>
    <Route path="/movie/:imdbID" element={<MovieDetail/>}/>
    <Route element={<PageNotFound/>}/>
    {/* <Route path="/" element={<App />}/> */}
  </Routes>
    </div>
<Footer/>
</Router>
  )
  
}

export default App;
