import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import { useState } from 'react';



function App() {

const [darkMode,setDarkMode] = useState(false)

function turnOnDarkMode () {
  setDarkMode(!darkMode)
  //console.log(darkMode)
}

 return (
    <Router>
      <div className={darkMode? "App-dark" : "App"}>
        <Navbar darktest={turnOnDarkMode}/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path={'*'}>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;