import {Profile} from "./Profile/Profile";
import {Statistics} from "./Statistics/Statistics"
import {Friend} from "./FriendsList/FriendList";
import {TransactionHistory} from "./TransactionHistory/TransactionHistory";

import user from "data/user.json"
import statistics from "data/statistics.json"
import friends from "data/friends.json"
import transactions from "data/transactions.json"

import {GlobalStyle} from "./GlobalStyle.styled";


export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics}/>
      <Friend friends={friends}/>
      <TransactionHistory items={transactions}/>

      <GlobalStyle/>
    </>

  );
};
