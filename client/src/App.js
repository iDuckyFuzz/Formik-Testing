import React from 'react';
import Navbar from './Components/Nav/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import AnnualReport from './Pages/AnnualReport';
import Blogs from './Pages/Blogs';
import SignUp from './Pages/SignUp';
import styled from 'styled-components'
import './App.css'

const StyledContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 80%;
margin-left: auto;
margin-right: auto;
`;

const AppContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&family=Raleway&family=Work+Sans:wght@200&display=swap');
height:100%;
font-family: 'Raleway', sans-serif;
`;

const App = () => (
  <AppContainer className={'appContainer'}>
    <Router>
      <Navbar />
      <Switch>
        <StyledContainer className={'navContainer'}>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/annual' component={AnnualReport} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/sign-up' component={SignUp} />
        </StyledContainer>
      </Switch>
    </Router>
  </AppContainer>
);

export default App;
