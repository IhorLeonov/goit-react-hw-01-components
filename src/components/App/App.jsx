import statData from 'components/Statistics/data.json';
import transData from 'components/Transactions/transactions.json';
import friendsData from 'components/FriendList/friends.json';
import userData from 'components/Profile/user.json';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/Transactions/TransactionHistory';
import { GlobalStyle } from 'components/constants/GlobalStyle';
import { Layout } from 'components/Layout/Layout';

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
