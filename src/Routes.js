import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Register from './Pages/Register';

const Routes = () => {
   return(
      <BrowserRouter>
         <Switch>
            {/* <Route path="/" exact component={Landing}/> */}
            {/* <Route path="/produtos" component={Products}/> */}
            {/* <Route path="/contato" component={Contact}/> */}
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            {/* <Route path="/carrinho" component={LittleCart}/> */}
            {/* <Route path="/user" component={PersonalPage}/> */}
         </Switch>
      </BrowserRouter>
   );
}

export default Routes;