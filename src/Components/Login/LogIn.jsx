import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Image/google.svg'
import { auth } from '../../firebase.init';
const LogIn = () => {
    const [user,setUser] = useState({})
    const [error,setError] = useState('')
    const handleLogIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signInWithEmailAndPassword(auth,email,password)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => {
            setError(error.message)
            toast.error('wrong password',{id: 'error'})
        })
    }
    console.log(user)
    console.log(error)
    return (
        <div className='my-20 flex flex-col justify-center items-center'>
            <div className='w-[400px] py-4'>
                <form onSubmit={handleLogIn} className='text-blue-900 flex flex-col items-center'>
                    <h1 className='text-center text-3xl font-sans'>Sign Up</h1>
                    <div className='my-3'>
                        <label className='block text-xl my-1' htmlFor="">Email</label>
                        <input type="email" name="email" id="" className='border-2 w-[350px] border-blue-900 py-2 rounded-md focus:outline-none px-2 text-xl'/>
                    </div>
                    <div className='my-3'>
                        <label className='block text-xl my-1'  htmlFor="">Password</label>
                        <input type="password" name="password" id="" className='border-2 w-[350px] border-blue-900 py-2 rounded-md focus:outline-none px-2 text-xl'/>
                    </div>
                    <div className='my-8'>
                        <button type='submit' className='block m-auto w-[350px] py-2 rounded-md text-xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white'>Login</button>
                        <p className='text-center my-1'>
                            Already have an account?
                            <Link to='/' className='underline mx-1'>create a new account</Link>
                        </p>
                    </div>
                    <div className='flex items-center my-4 justify-center'>
                        <div className='w-[165px] bg-blue-800 h-[2px]'></div>
                        <p className='mx-2 text-xl text-blue-800'>or</p>
                        <div className='w-[165px] bg-blue-800 h-[2px]'></div>
                    </div>
                </form>
            </div>
            <button  className='flex items-center border-2 border-blue-800 py-2 w-[350px] rounded-md'>
                <img src={logo} alt="" className='ml-2'/>
                <p className='font-semibold mx-auto'>Continue with Google</p>
            </button>
        </div>
    );
};

export default LogIn;