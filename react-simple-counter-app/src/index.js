import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {

    state = {
      counter: 0
    }
  
    up = () => {
      this.setState({counter: this.state.counter + 1});
    }
  
    down = () => {
      if(this.state.counter > 0)
        this.setState({counter: this.state.counter - 1});
    }
  
    render() {
      return (
        <div className="App">
            <button onClick={this.down} className="counter-btn">-</button>
            <div className="counter-card card-hover">
                {this.state.counter}
            </div>
            <button onClick={this.up} className="counter-btn">+</button>
        </div>
      );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
