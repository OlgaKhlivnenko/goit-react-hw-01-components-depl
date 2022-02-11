import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import Statistics from './components/Statistics/Statistics';
import Transactions from "./components/Transactions/Transaction";
import './App.css';
import user from './path/to/user.json';
import friends from './path/to/friends.json';
import data from './path/to/data.json';
import transactions from './path/to/transactions.json';
export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      ;
      <FriendList friends={friends} />;
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />;
      <Transactions transactions={transactions} />;
    </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
