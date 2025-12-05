import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { userRegister } from '../../api/authApi';



const Register = () => {


  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }
    try {
      const response = await userRegister(userName, email, password);
      console.log('Registration successful:', response.data);
      // Redirect to login page after successful registration
      window.location.href = '/login';
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
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
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className='w-16 h-16 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>
          </div>
          <h2 className="mt-8 text-center text-4xl font-extrabold tracking-tight text-white">Create Account</h2>
          <p className='mt-2 text-center text-gray-300'>Join us today</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
          <div className='bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20'>
            <form onSubmit={handleRegister} className="space-y-6">

              <div>
                <label htmlFor="userName" className="block text-sm font-medium text-gray-200 mb-2">
                  User Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                  <input
                    id="userName"
                    name="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    required
                    autoComplete="username"
                    className="block w-full pl-10 pr-3 py-3 rounded-xl bg-white/20 text-white border border-white/30 placeholder:text-gray-400 focus:bg-white/30 focus:border-indigo-400 focus:outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
              </div>

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

              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                    className="block w-full px-3 py-3 rounded-xl bg-white/20 text-white border border-white/30 placeholder:text-gray-400 focus:bg-white/30 focus:border-indigo-400 focus:outline-none transition-all"
                    placeholder="••••••"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-200 mb-2">
                    Confirm
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                    className="block w-full px-3 py-3 rounded-xl bg-white/20 text-white border border-white/30 placeholder:text-gray-400 focus:bg-white/30 focus:border-indigo-400 focus:outline-none transition-all"
                    placeholder="••••••"
                  />
                </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-3 py-3 text-sm font-semibold text-white hover:from-indigo-600 hover:to-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>

          <p className="mt-8 text-center text-sm text-gray-300">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
//           </form>

//           <p className="mt-10 text-center text-sm/6 text-gray-400">
//             Not a member?{' '}
//             <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
//               Start a 14 day free trial
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }


export default Register;

