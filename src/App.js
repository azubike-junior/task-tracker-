import React from 'react'
import './App.css';
import Header from './components/Header';
import styled from 'styled-components'
import Tasks from './pages/Tasks';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';
import About from './pages/About'; 
import Register from './pages/Register';
import Login from './pages/Login';
import { PrivateRoute } from './components/PrivateRoute';
import Home from './pages/Home';
import { PublicRoute } from './components/PublicRoute';
import NotFound from './pages/NotFound';



function App() {
 
  return (
    <div className="App">
      <Wrapper className='container'> 
       <Router>
       <Header/>
          <Switch>

          <PublicRoute exact path='/' component={Home}/>

          <PublicRoute exact path='/login' component={Login} />

          <PrivateRoute exact path='/addTask' component={Tasks} />

           <PublicRoute exact path={'/register'} component={Register}/>
      
          <PublicRoute exact path='/about' component={About} />

          <Route exact path='*' component={NotFound} />
          
          </Switch>
           <Footer />
         </Router>
      </Wrapper>
    </div>
  );  
}

export default App;

const Wrapper = styled.div`

`
