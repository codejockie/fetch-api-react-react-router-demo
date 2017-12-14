import React from 'react';
import { Route } from 'react-router-dom';
import Card from './Card';


const Main = ({ users }) => {
  return (
    <div className="col s9">
      {
        users && 
        <Route path="/:userId" render={({ match }) => (
          <Card
            user={users.find(u => u.login.username === match.params.userId)}
          />
        )} />
      }
    </div>
  )
};

export default Main;