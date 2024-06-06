/* eslint-disable */
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import HomePage from "./pages/HomePage" 
import SearchResultsPage from "./pages/SearchResultsPage" 
import AddNewRecord from "./pages/AddNewRecord";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes >
          <Route exact path="/" element={< HomePage /> } />
          <Route exact path="/search-results/:id" element={<SearchResultsPage/>} />
          <Route path="/add-new-record" element={<AddNewRecord />} />
          <Route path="/*"  element={<NotFound />} />
        </Routes >
      </Router>
    </div>
  );
}

export default App;
