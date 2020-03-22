import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

// The variables within the curly braces - searchUsers, showClear etc are taken (deconstructed) out of the props 
// argument that normally expected here
// orig --> const Search = (props) => {}
const Search = () => {

  const githubContext = useContext(GithubContext);

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [text, setText] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  }

  const onChange = (event) => {
    setText(event.target.value);
    // text: event.target.value <== This does the same but is less flexible
  }

  return (
    <div>
      <form action="" className="form" onSubmit={onSubmit}>
        <input type="text" name="text" placeholder="Search User" value={text} onChange={onChange} />
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>

      {githubContext.users.length > 0 && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear Users</button>}


    </div>
  )

}

export default Search
