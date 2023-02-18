import userData from 'components/profile/user.json';
import statData from 'components/statistics/data.json';
import transData from 'components/transactions/transactions.json';
import friendsData from 'components/friendList/friends.json';

import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friendList/FriendList';
import { TransactionHistory } from 'components/transactions/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transData} />
    </div>
  );
};
