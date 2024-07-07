import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddBook from './components/Admin/AddBook';
import RemoveBook from './components/Admin/RemoveBook';
import IssueBook from './components/Admin/IssueBook';
import ReturnBook from './components/Admin/ReturnBook';
import UserTransactions from './components/User/UserTransactions';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/add-book" component={AddBook} />
          <Route path="/remove-book" component={RemoveBook} />
          <Route path="/issue-book" component={IssueBook} />
          <Route path="/return-book" component={ReturnBook} />
          <Route path="/user-transactions/:userId" component={UserTransactions} />
          {/* Add more routes as needed */}
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
