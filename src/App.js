import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Home from './Pages/home'
import Login from './Pages/login'
import SubjectPage from './Pages/subjectPage'
import Files from './Pages/files'
import Slides from './Pages/slides';
import Books from './Pages/books'
import Questions from './Pages/questions'
import Lectures from './Pages/lectures'
import Sessionals from './Pages/sessionals'
import Cp from './Pages/cp'
import Classes from './Pages/classes'



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/subject/:id' exact component={SubjectPage}/>
        <Route path='/books/:id' exact component={Books}/>
        <Route path='/classes/:id' exact component={Classes}/>
        <Route path='/questions/:id' exact component={Questions}/>
        <Route path='/slides/:id' exact component={Slides}/>
        <Route path='/lectures/:id' exact component={Lectures}/>
        
        

      
      </Switch>
    </BrowserRouter>
  );
}

export default App;
