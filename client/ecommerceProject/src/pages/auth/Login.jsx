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
    <div className='bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000'></div>
      </div>
      
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 relative z-10">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className='w-16 h-16 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 3.129 3l1.94-.485a1.5 1.5 0 0 1 1.852 1.329l.159 1.591A.75.75 0 0 0 7.83 6h.974a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v3c0 .414.336.75.75.75h.974a.75.75 0 0 0 .75-.75l.159-1.591a1.5 1.5 0 0 1 1.852-1.329l1.94.485a1.5 1.5 0 0 1 1.06.629l1.189 1.19a3.004 3.004 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
            </svg>
          </div>
          <h2 className="mt-8 text-center text-4xl font-extrabold tracking-tight text-white">Welcome Back</h2>
          <p className='mt-2 text-center text-gray-300'>Sign in to your account</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className='bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20'>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    className="block w-full pl-10 pr-3 py-3 rounded-xl bg-white/20 text-white border border-white/30 placeholder:text-gray-400 focus:bg-white/30 focus:border-indigo-400 focus:outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required
                    autoComplete="current-password"
                    className="block w-full pl-10 pr-3 py-3 rounded-xl bg-white/20 text-white border border-white/30 placeholder:text-gray-400 focus:bg-white/30 focus:border-indigo-400 focus:outline-none transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-3 py-3 text-sm font-semibold text-white hover:from-indigo-600 hover:to-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>

          <p className="mt-8 text-center text-sm text-gray-300">
            Not a member?{' '}
            <Link to="/register" className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login;
