import React, {Component} from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component{

  render() {
      return (
          <div className="App">
            <Header />
              <div className="container">
                  <Contact name="John Doe" email="qeeerrr@qwee" phone="90987-6665-55"/>
                  <Contact name="Alex Hitch" email="1234@qwee" phone="937-99-9-2"/>
              </div>
          </div>
      );
  }
}


export default App;
