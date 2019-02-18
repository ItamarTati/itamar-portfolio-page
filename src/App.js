import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import resumeData from './resumeData';
import ReactGA from 'react-ga';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

  ReactGA.initialize('UA-134640199-1');
  ReactGA.pageview('itamartati.github.io/itamar-portfolio-page/');

export default App;

