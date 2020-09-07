import React from 'react';
import { Newest } from './views/Newest';
import { Front } from './views/Front';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';

export const Routes = () => {
  return (
   	<div className="container my-5">
      
    	<div className="card shadow">
        	<div className="card-header bg-color-1 text-color-4 size-1">
      			<Header />
      		</div>
    		<div className="card-body">
    			<Switch>
			        <Route exact path="/newest" component={Newest} />
			        <Route exact path="/">
			          <Redirect to="/newest" />
			        </Route>
			        <Route exact path="/front" component={Front} />
		      	</Switch>
        	</div>
      	</div>
    </div>
  );
};