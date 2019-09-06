import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../redux/configureStore';
import App from './App';
import Home from './Home';
import '../styles/tran.css';
import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import Recommendation from "../components/Recommendation";

const store = configureStore();
const supportsHistory = 'pushState' in window.history;

const Root = () => (
  <Provider store={store}>
    <BrowserRouter forceRefresh={!supportsHistory}>
      <div>
        <main>
          <Route
            render={({location}) => {
              const {pathname} = location;
              return (
                <TransitionGroup>
                  <CSSTransition
                    key={pathname}
                    classNames="page"
                    timeout={{
                      enter: 1000,
                      exit: 1000,
                    }}
                  >
                    <Route
                      location={location}
                      render={() => (
                        <Switch>
                          <Route
                            exact
                            path="/"
                            component={Home}
                          />
                          <Route
                            path="/about"
                            component={App}
                          />
                          <Route
                            path="/recommendation"
                            component={Recommendation}
                          />
                        </Switch>
                      )}
                    />
                  </CSSTransition>
                </TransitionGroup>
              );
            }}
          />
        </main>
      </div>
    </BrowserRouter>
  </Provider>
);

export default Root;
