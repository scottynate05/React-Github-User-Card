import React from 'react';
import axios from 'axios';
import FollowingCard from './FollowingCard';
import './App.css';

class App extends React.Component {

  state = {
    user: [],
    followers: [],
    following: []
  }
  // constructor() {
  //   super();
  //   console.log('nb: App.js: App: constructor run')
  //   this.state = {
      
  //   }
  // }
  
  componentDidMount() {
    axios
      .get('https://api.github.com/users/scottynate05')
      .then(res => {
        console.log('nb: App.js: App: CDM: user data: ', res.data)
        this.setState({ user: res.data })
      })
      .catch(err => {
        console.log('nb: App.js: App: CDM: profile request failed: ', err)
      })
    axios
      .get('https://api.github.com/users/scottynate05/followers')
      .then(res => {
        console.log('nb: App.js: App: CDM: followers data: ', res.data)
        this.setState({ followers: res.data })
      })
      .catch(err => {
        console.log('nb: App.js: App: CDM: followers request failed: ', err)
      })
    // I don't have any followers, so I added following as well
    axios
      .get('https://api.github.com/users/scottynate05/following')
      .then(res => {
        console.log('nb: App.js: App: CDM: following data: ', res.data)
        this.setState({ following: res.data })
      })
      .catch(err => {
        console.log('nb: App.js: App: CDM: following request failed: ', err)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="headline">
          <h1>Github User Cards</h1>
        </header>
        <div className="user">
          <img src={this.state.user.avatar_url} alt="user img" />
          <h1>{this.state.user.name}</h1>
          <h2>Username: {this.state.user.login}</h2>
        </div>
        {/* <FollowingCard following={this.following} /> */}
        {this.state.followers.map(item => (
          <FollowingCard following={item} key={item.id} />
        ))}
        {this.state.following.map(item => (
          <FollowingCard following={item} key={item.id} />
        ))}
      </div>
    );
  }
}

export default App;
