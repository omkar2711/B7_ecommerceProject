import React , {useState , useEffect } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import {userLogin} from '../../api/authApi.js';


const Login = () =>{

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');


const handleLogin = async (e) => {
  console.log("Login form submitted with email:", email);
  console.log("Login form submitted with password:", pass);
      e.preventDefault();
      try {
        const response = await userLogin(email, pass);
        console.log("Response from userLogin:", response);
        if (!response || !response.data || !response.data.token) {
          throw new Error('Invalid response from server');
        }
        console.log('Login successful:', response.data);
        // Store the token in localStorage
        localStorage.setItem('token', response.data.token);
        // Redirect to home or homepage
        window.location.href = '/';
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials and try again.');
      }
    }



  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && token !== undefined) {
      // If token exists, redirect to home or homepage
      window.location.href = '/';
    }


  }, []);

  return (
    <div className='bg-gray-900 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">
                  Password
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Not a member?{' '}
            <Link to="/register" className="font-semibold text-indigo-400 hover:text-indigo-300">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login;
