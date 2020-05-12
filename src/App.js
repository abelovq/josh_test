import React, { useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';


import './App.css';

const initialFakeData = {
  staff: [
    { id: 1, userType: 'client', firstName: 'Alexa', lastName: 'Richard', address: { country: '', town: '', st: '' }, fullName: 'Alexa Richard', phone: '', created: new Date(Date.now()) },
    { id: 2, userType: 'client', firstName: 'Cao', lastName: 'Cy', address: { country: '', town: '', st: '' }, fullName: 'Cao Cy', phone: '', created: new Date(Date.now()) },
    { id: 3, userType: 'client', firstName: 'Ava', lastName: 'Greg', address: { country: '', town: '', st: '' }, fullName: 'Ava Greg', phone: '', created: new Date(Date.now()) },
    { id: 4, userType: 'client', firstName: 'Merrie', lastName: 'Burget', address: { country: '', town: '', st: '' }, fullName: 'Merrie Burget', phone: '', created: new Date(Date.now()) },
  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}


const FakeDataContext = React.createContext(null);

function App() {
  const history = createBrowserHistory();
  const [state, dispatch] = useReducer(reducer, initialFakeData)
  return (
    <Router history={history}>
      <FakeDataContext.Provider value={{ dispatch, state }}>
        <Layout header={<Header />}>
          <Sidebar />
          <Switch>

          </Switch>
        </Layout>
      </FakeDataContext.Provider>
    </Router>
  );
}

export default App;
