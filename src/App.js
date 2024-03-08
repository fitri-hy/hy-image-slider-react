import logo from './logo.svg';
import './App.css';

import Slider from 'hy-image-slider-react';

function App() {
  return (
    <div className="App">
	  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<Slider interval={1000} buttonTextPrev="Prev" buttonTextNext="Next" images={['https://www.w3schools.com/howto/img_nature_wide.jpg', 'https://www.w3schools.com/howto/img_snow_wide.jpg', 'https://www.w3schools.com/howto/img_lights_wide.jpg']}/>
		<h2>Reload Pages To See</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/fitri-hy/hy-splash-screen-react.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Install Package
        </a>
      </header>
    </div>
  );
}

export default App;
