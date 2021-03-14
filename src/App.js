import './App.css';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from'./Component/Profile/ProfilePhoto';
import Address from './Component/Profile/Address';
import './Component/Profile/AboutMe.css'
function App() {
  return (
    <div>
    <div className="App">
        <ProfilePhoto />
      <div className="AboutMe">
        <FullName  / >
          <Address / >
      </div>
       </div>
         <h2 style={{color:'grey', textAlign:'center'}}>I hope you liked my Profile Page :) </h2></div>
  );
}



export default App;

