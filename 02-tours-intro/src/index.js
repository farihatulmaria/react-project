import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

/* function userName(user) {

  return user.firstName + ' ' + user.lastName;
}
function greeting(user) {
if (user) {
  return React.createElement('h1',null,`Hello , ${userName(user)} 🙂`)
  //<h1>Hello, {userName(user)}!</h1>;
}
return React.createElement('h1',null,`Hello , Stranger 🙂`)
}

const user = {
  firstName: 'Jhon',
  lastName: 'Doe'
};

const element = (
  <div>
   {greeting(user)}
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
); */

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);
reportWebVitals();
