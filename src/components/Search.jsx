// import { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../authentication/firebase'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = () => {
  // {searching}

  // const [searchValue, setSearchValue] = useState('');

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   setSearchValue(e.target.value);
  //   searching(searchValue);
  //};

 
  // Log out
  const history = useNavigate()
  const handleLogOut = () => {
    signOut(auth)
    .then(val =>
      history('/')
    )
  }
  return (
    // value={searchValue}
    //       onChange={handleSearch} 
    <section className='s-logout'>
        <div className='search-wrapper'>
          <input type="search" name="" id="search" placeholder='Search'/>
          <FontAwesomeIcon icon="fa-solid fa-search" />
      </div>
      <div className="user-btn">
        <FontAwesomeIcon icon="fa-solid fa-user" />
        <button onClick={handleLogOut}>Log out</button>
      </div>
     
    </section>
    
  )
}

export default Search