import React from 'react';
import ReactDOM from 'react-dom';
import UserOverview from './user-overview';

import AppActions from './actions/app-actions';

import './styles/main.scss';


class App extends React.Component {

  render() {
    return (
      <div className="app">
        <div className="sideNav">
        </div>
        <div className="mainContent">
          <UserOverview/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
