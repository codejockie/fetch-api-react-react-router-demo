import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ users }) => {
  return (
    <div className="col s3 z-depth-1 App-col-all">
      <div className="row">
        <ul className="list-group">
          {
            users ? (
              users.map(user => {
                const { login: {username}, phone } = user;
                return (
                  <li
                    key={phone}
                    className="list-group-item"
                  >
                    <Link to={`${username}`}>{username}</Link>
                  </li>
                )
              })
            ) : (
              <div>Loading...</div>
            )
          }
        </ul>
      </div>
    </div>
  )
};

export default SideBar;