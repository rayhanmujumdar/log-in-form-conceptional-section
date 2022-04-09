import React, { useState } from 'react';
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { auth } from '../../firebase.init';
import logo from '../../Assets/Image/google.svg'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const SignUp = () => {
    const [user,setUser] = useState({})
    const [error,setError] = useState('')
    const [email,setEmail] = useState({value: '' , error: ''})
    const [password,setPassword] = useState({value: '', error: ''})
    const [confirmPassword,setConfirmPassword] = useState({value: '',error: ''})
    const navigate = useNavigate()
    // google handle
    const googleAuth = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    // signup handle
    const handleSingUp = (event) => {
        event.preventDefault()
        if(email.value === ''){
            setEmail({value: '',error: 'required'})
        }
        if(password.value === ''){
            setPassword({value: '',error: 'required'})
        }
        if(confirmPassword.value === ''){
            setConfirmPassword({value: '',error: 'required'})
        }
        if(email.value && password.value && confirmPassword.value === password.value){
            console.log(email.value,password.value)
            createUserWithEmailAndPassword(auth,email.value,password.value)
            .then(result =>  {
                setUser(result.user)
                navigate('/home')
                toast.success('Successfully login')
            })
            .catch(error => {
                setError(error.message)
                toast.error('already exist',{id: 'error'})
                if(error.includes('email-already-in-use')){
                    toast.error('already exist')
                }
            })
        }
        
    }
    // email handle
    const handleEmail = (email) => {
        if(/(?=.*[@])/.test(email)){
            setEmail({value: email,error: ''})
        }
        else{
            setEmail({value: '', error: 'Invalid email'})
        }
    }
    console.log(email)
    // password handle
    const handlePassword = (password) => {
        // if(password === ''){
        //     setPassword({value: '',error: 'empty password'})
        // }
        if(password.length < 7){
            setPassword({value: "", error: 'Too shots'})
        }
        else if(password.length > 6 && !/(?=.*[!@#$%^&*])/.test(password)){
            setPassword({value: '',error: 'Miss one special character'})
        }
        else{
            setPassword({value: password,error: ''})
        }
    }
// confirm password handle
    const handleConfirmPassword = (confirmPassword) => {
        if(confirmPassword === password.value){
            setConfirmPassword({value: confirmPassword,error: ''})
        }else{
            setConfirmPassword({value: '',error: 'password Missmatch'})
        }
    }
    console.log(user)
    console.log(error)
    return (
        <div className='my-20 flex flex-col justify-center items-center'>
            <div className='w-[400px] py-4'>
                <form onSubmit={handleSingUp} className='text-blue-900 flex flex-col items-center'>
                    <h1 className='text-center text-3xl font-sans'>Sign Up</h1>
                    <div className='my-3'>
                        <label className='block text-xl my-1' htmlFor="">Email</label>
                        <input onBlur={(event) => handleEmail(event.target.value)} type="email" name="email" id="" className='border-2 w-[350px] border-blue-900 py-2 rounded-md focus:outline-none px-2 text-xl'/>
                        {
                            email.error && <p className='text-red-700'>{email.error}</p>
                        }
                    </div>
                    <div className='my-3'>
                        <label className='block text-xl my-1'  htmlFor="">Password</label>
                        <input onBlur={(event) => handlePassword(event.target.value)} type="password" name="password" id="" className='border-2 w-[350px] border-blue-900 py-2 rounded-md focus:outline-none px-2 text-xl'/>
                        {
                            password?.error && <p className='text-red-700'>{password.error}</p>
                        }
                    </div>
                    <div className='my-3'>
                        <label className='block text-xl my-1'  htmlFor="">Confirm Password</label>
                        <input onBlur={(event) => handleConfirmPassword(event.target.value)} type="password" name="confirmPassword" id="" className='border-2 w-[350px] border-blue-900 py-2 rounded-md focus:outline-none px-2 text-xl'/>
                        {
                            confirmPassword.error && <p className='text-red-700'>{confirmPassword.error}</p>
                        }
                    </div>
                    <div className='my-8'>
                        <button type='submit' className='block m-auto w-[350px] py-2 rounded-md text-xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white'>Sign Up</button>
                        <p className='text-center my-1'>
                            Already have an account?
                            <Link to='/login' className='underline'>Login</Link>
                        </p>
                    </div>
                    <div className='flex items-center my-4 justify-center'>
                        <div className='w-[165px] bg-blue-800 h-[2px]'></div>
                        <p className='mx-2 text-xl text-blue-800'>or</p>
                        <div className='w-[165px] bg-blue-800 h-[2px]'></div>
                    </div>
                </form>
            </div>
            <button onClick={googleAuth} className='flex items-center border-2 border-blue-800 py-2 w-[350px] rounded-md'>
                <img src={logo} alt="" className='ml-2'/>
                <p className='font-semibold mx-auto'>Continue with Google</p>
            </button>
        </div>
    );
};

export default SignUp;