/**
 *
 * App
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import { Redirect, Route, Switch } from 'react-router-dom';
import Home from 'containers/Home/Loadable';
import Account from 'containers/Account/Loadable';
import JobSeek from 'containers/JobSeek/Loadable';
import SearchResults from 'containers/SearchResults/Loadable';
import Talent from 'containers/Talent/Loadable';
import Modals from 'containers/Modals/Loadable';
import withMainLayout from 'layouts/MainLayout';
import withOnlyBody from 'layouts/OnlyBody';
// import messages from './messages';

export function App() {
  return (
    <>
      <Helmet>
        <title>App</title>
        <meta name="description" content="Description of App" />
      </Helmet>
      <>
        <Switch>
          <Route exact path="/" component={withMainLayout(Home)} />
          <Route exact path="/account" component={withOnlyBody(Account)} />
          <Route exact path="/jobseek" component={JobSeek} />
          <Route exact path="/searchresults" component={SearchResults} />
          <Route exact path="/talent" component={Talent} />
          <Redirect to="/" />
        </Switch>
      </>

      <Modals />
    </>
  );
}

App.propTypes = {
  // dispatch: PropTypes.func,
};

export default App;
