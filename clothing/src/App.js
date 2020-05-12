import React from 'react'; 
import './App.css';
import  HomePage  from './pages/homepage.component';
import  SignInAndSignUp  from './pages/sign-in-sign-up/sign-in-sign-up.component';
import  ShopPage  from './pages/shop/shoppage.component';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //
      //createUserProfileDocument(user);

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({currentUser: {
            id: snapshot.id,
            ...snapshot.data()
          }});
          
        });
      }

      this.setState({currentUser: userAuth});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

export default App;
