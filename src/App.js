import Profile from './components/Profile/Profile'
import user from './user.json'
import StatsList from './components/Statistics/StatistsList'
import statistics from './statistical-data.json'
import Statistics from './components/Statistics/Statistics'
import FriendList from './components/FriendList/FriendList'
import friends from './friends.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import transactions from './transactions.json'

function App() {
  return (
    <>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats">
        <StatsList stats={statistics} />
      </Statistics>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  )
}

export default App
