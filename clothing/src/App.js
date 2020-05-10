import React from 'react'; 
import './App.css';
import  HomePage  from './pages/homepage.component';
import  SignInAndSignUp  from './pages/sign-in-sign-up/sign-in-sign-up.component';
import  ShopPage  from './pages/shop/shoppage.component';
import {Route, Switch} from 'react-router-dom'
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
