import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Image/logo.png'
import { auth } from '../../firebase.init';
const Header = () => {
    const [user,setUser] = useState({})
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              // User is signed out
              // ...
              setUser({})
            }
          });
    },[])

    const handleLogOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .catch(error => {
            
        })
    }
  return (
        <div className='flex justify-between px-10 bg-slate-500 items-center text-white'>
            <div>
                <img src={logo} alt=""/>
            </div>
            <div>
                <Link to={'/home'} className='mx-2 text-xl font-semibold'>Home</Link>
                <Link to={'/videos'} className='mx-2 text-xl font-semibold'>Videos</Link>
                {
                    user.uid ? <button onClick={handleLogOut} className='bg-gradient-to-r from-slate-700 to-slate-600 mx-2 p-2 rounded-md'>Logout</button> : <Link to='/' className='mx-2 text-xl font-semibold'>Login</Link> 
                }
            </div>
        </div>
    );
};

export default Header;