import React from 'react';

const toTitleCase = (text) => text
  ? text[0].toUpperCase() + text.substring(1)
  : "";

const toBookCase = (text) => {
  let texts = [];
  if (text) {
    for (const word of text.split(" ")) {
      texts.push(toTitleCase(word));
    }

    return texts.join(" ");
  }
  
  return "";
};

const Card = ({ user }) => {
  const {
    email,
    location: { street },
    login: { username },
    name: { first, last },
    phone,
    picture: { large }
  } = user;

  return (
    <div>
      <div className="card" style={{width: "20rem"}}>
        <img className="card-img-top" src={large} alt={username} />
          <div className="card-body">
            <h4 className="card-title">
              {`${toTitleCase(first)} ${toTitleCase(last)}`}
            </h4>
            <div className="card-text">
              <p><strong>Username:</strong> {username}</p>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Address:</strong> {toBookCase(street)}</p>
              <p><strong>Phone:</strong> {phone}</p>
            </div>
          </div>
      </div>
    </div>
  )
};

export default Card;