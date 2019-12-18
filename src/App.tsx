import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configStore from './redux/store';
import UsersList from './components/users.list/users.list.component';
import UserInfo from './components/user.info/user.info.component';
import AddEditUser from './components/user.add-edit/user.add-edit.component';


const store = configStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={ UsersList } />
        <Route path='/user/:id' component={ UserInfo } />
        <Route path='/add_user_edit' component={ AddEditUser } />
      </Router>
    </Provider>
  );
}

export default App;
