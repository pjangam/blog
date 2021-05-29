import React from 'react';
import { Route } from 'react-router-dom';
import { Landing } from './Pages/Landing';
import { Resume } from './Pages/Resume';
import { Layout } from './components/Layout';
import { BrowserRouter as Router } from 'react-router-dom';

const MyRouter = () => {
  return (
    <Router>
      <Layout>
        <Route path="/" exact={true} component={Landing}></Route>
        <Route path="/resume" exact={true} component={Resume}></Route>
        <Route path="/layout" exact={true} component={Resume}></Route>
      </Layout>
    </Router>
  );
};

export { MyRouter };
