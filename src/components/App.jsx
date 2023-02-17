import userData from 'components/profile/user.json';
import statData from 'components/statistics/data.json';
import transData from 'components/transactions/transactions.json';
import friends from 'components/friendList/friends.json';

import { Profile } from 'components/profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statData} />
      {/* <Statistics stats={data} /> */}
      <FriendList friends={friends} />
    </div>
  );
};
