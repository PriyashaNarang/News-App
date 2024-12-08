import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navigationbar';
import News from './components/Newss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
export default function App() {
  const [progress,setProgress]=useState(0);
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Switch>
            <Route exact path="/"><News country="us" pageSize={12} category="general" setProgress={setProgress}/></Route>
            <Route exact path="/business"><News country="us" pageSize={12} category="business" setProgress={setProgress}/></Route>
            <Route exact path="/entertainment"><News country="us" pageSize={12} category="entertainment" setProgress={setProgress}/></Route>
            <Route exact path="/health"><News country="us" pageSize={12} category="health" setProgress={setProgress}/></Route>
            <Route exact path="/science"><News country="us" pageSize={12} category="science" setProgress={setProgress}/></Route>
            <Route exact path="/sports"><News country="us" pageSize={12} category="sports" setProgress={setProgress}/></Route>
            <Route exact path="/technology"><News country="us" pageSize={12} category="technology" setProgress={setProgress}/></Route>
          </Switch>
        </Router>
      </div>
    )
}
