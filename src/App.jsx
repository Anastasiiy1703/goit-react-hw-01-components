import FriendList from './Components/FriendList';
import Profile from './Components/Profile';
import Statistics from './Components/Statistics';
import TransactionHistory from './Components/TransactionHistory';

const App = () => {
    return (
        <>
            <Profile />  
            <Statistics />
            <FriendList />
            <TransactionHistory />
        </>
    );
};

export default App;