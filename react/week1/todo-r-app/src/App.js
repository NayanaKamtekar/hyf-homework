import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Inbox } from './index';
import { Today } from './Today';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';

function App() {
  return (
    <React.Fragment>
    <Router>
      <NavigationBar />
      <Layout>
        <Switch>
          <Route exact path="/" component={Inbox} />
          <Route path="/today" component={Today} />
          <Route component={NoMatch} />
        </Switch>
      </Layout>
    </Router>
  </React.Fragment>
  );
}

export default App;
