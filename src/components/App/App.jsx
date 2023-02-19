import statData from 'data/data.json';
import transData from 'data/transactions.json';
import friendsData from 'data/friends.json';
import userData from 'data/user.json';

import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friendList/FriendList';
import { TransactionHistory } from 'components/transactions/TransactionHistory';
import { GlobalStyle } from 'components/constants/GlobalStyle';
import { Layout } from 'components/layout/Layout';

export const App = () => {
  return (
    <Layout>
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
      <GlobalStyle />
    </Layout>
  );
};
