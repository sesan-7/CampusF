
import './instyles.css';
import './index.css';
import Login from './Login';
import Institute from './Institute';



function App() {
  return (
    <div>
      {/* Header Section */}
      <div className="header">
            <div className="logo1">
             <img src="assets/logo.png" id="logo" alt="logo" className="logo" />
        </div>
        <h2 id="about">About</h2>
        <h2 id="service">service</h2>
        <h2 id="contact">contact</h2>
      </div>
     

      {/* Empty container section */}
      <div className="container2"></div>

      {/* Login Section */}
      <Login />

      {/* Institute Section */}
      <Institute />
    </div>
  );
}

export default App;
