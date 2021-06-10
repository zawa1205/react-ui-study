import './App.css';
import './scss/style.scss';
import Header from './components/Header';
import Home from './components/Home';
import SliderPage from './components/SliderPage';
import TabPage from './components/TabPage';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/storage";
import'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_ApiKey,
  authDomain: process.env.REACT_APP_AuthDomain,
  databaseURL: process.env.REACT_APP_DatabaseURL,
  projectId: "react-ui-study",
  storageBucket: process.env.REACT_APP_StorageBucket,
  messagingSenderId: process.env.REACT_APP_MessagingSenderId,
  appId: process.env.REACT_APP_AppId,
  measurementId: process.env.REACT_APP_MeasurementId
};

// Firebaseの初期化
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route path="/Slider-page" render={ () => <SliderPage name={"hoge"}/>} />
          <Route path="/Tab-page" render={ () => <TabPage/>} />
        </div>
      </Router>
    </div>
  );
}

export default App;
