import React from 'react';
import '../css/App.css';
// import {Card, Button, Img} from 'bootstrap';
import {Router} from '@reach/router';

import Navigation from './Navigation.js';
import Banner from "./Banner.js";
import Skills from "./Skills.js";
import Portfolio from "./Portfolio.js";
import Footer from './Footer.js';
import MappingSPA from './projects/MappingSPA.js';
import ClienthubSPA from './projects/ClienthubSPA.js';



function App() {
  return (
    <main className="page bg-white" id="petratings">
      <Navigation />
      <Router>
        <Banner path="/" />
      </Router>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12 bg-white">
            <Router>
                <Skills path="/" />
            </Router>
            <Router>
                <Portfolio path="/"  />
            </Router>
            <Router>
                <MappingSPA path="/mappingspa" />
                <ClienthubSPA path="/clienthubspa" />
            </Router>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
