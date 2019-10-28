import React from 'react';
import {createStore} from "redux";
import rootReducer from './store/reducers'
import {Provider} from "react-redux";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

// components
import TasksContainer from './tasks/tasksContainer'
import AuthContainer from './auth/authContainer';
import CreateTaskContainer from "./createTask/createTaskContainer";

const store = createStore(rootReducer);


function App() {
  return (
      <Provider store={store}>
          <Router>
              <Route exact path="/" component={TasksContainer}/>
              <Route path="/auth"  component={AuthContainer}/>
              <Route path="/create" component={CreateTaskContainer} />
          </Router>
      </Provider>
  );
}

export default App;
