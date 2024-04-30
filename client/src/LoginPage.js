import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import { LucideArrowRightToLine, LucideLogIn } from 'lucide-react';
// import './LoginPage.css';
//import { useHistory } from 'react-router-dom';



export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(null);
  const { setUserInfo } = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (response.ok) {
        const userInfo = await response.json();
        setUserInfo(userInfo);
        setRedirect(true);
      } else {
        const errorMessage = await response.json();
        setError(errorMessage.message || 'Wrong credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login.');
    }
  }

  if (redirect) {
    return <Navigate to={'/editor'} />;
  }

  return (
    <div className="w-full min-h-screen mx-auto text-gray-700 bg-gray-50 ">
      <div className="px-4 py-10 mx-auto max-w-8xl ">
        <div className="min-h-[35vh] bg-[url('Loginpagebg.webp')] bg-center bg-cover bg-no-repeat relative rounded-xl md:min-h-[90vh]">
          <div className="absolute bottom-0 max-w-2xl p-6 mx-auto text-center start-0 end-0 md:start-auto md:text-start md:mx-0">
            {/* Card */}
            <div className="max-w-3xl mx-auto bg-slate-900 text-gray-400 border border-slate-700 shadow-2xl w-[30rem] h-[28rem] rounded-xl  ">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <h1 className="block text-4xl font-medium text-left text-gray-300 ">
                    Welcome Back!
                  </h1>
                  <p className="mt-3 text-xl text-left text-gray-600">
                    Sign in to continue to your account
                  </p>
                </div>
                <div className="mt-5">
                  {/* Form */}
                  <form onSubmit={login}>
                    <div className="grid gap-y-4">
                      {/* Form Group */}
                      <div>
                        <label
                          htmlFor="userName"
                          className="block font-normal text-md"
                        >
                          Username
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="userName"
                            name="userName"
                            className="block w-full px-4 py-3 text-sm text-gray-600 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                            required="Email address"
                            value={username}
                            onChange={(ev) => setUsername(ev.target.value)}
                            placeholder="Your Username"
                          />
                        </div>
                      </div>
                      {/* End Form Group */}
                      {/* Form Group */}
                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor="password"
                            className="block font-normal text-md"
                          >
                            Password
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="block w-full px-4 py-3 text-sm text-gray-600 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                            required=""
                            aria-describedby="password-error"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                            placeholder="*********"
                          />
                        </div>
                      </div>
                      {error && <p style={{ color: 'red' }}>{error}</p>}
                      <button
                        type="submit"
                        className="flex items-center justify-center px-4 py-3 mt-5 text-sm font-medium text-center text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none group"
                      >
                        <span>Sign in</span>
                        <LucideLogIn className="w-5 h-5 transition-transform group-hover:transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </form>
                  {/* End Form */}
                </div>
              </div>
            </div>
            {/* End Card */}
          </div>
        </div>
      </div>
    </div>
    // <form className="login" onSubmit={login}>
    //   <h1>Login</h1>
    //   <input
    //     type="text"
    //     placeholder="username"
    // value={username}
    // onChange={(ev) => setUsername(ev.target.value)}
    //   />
    //   <input
    //     type="password"
    //     placeholder="password"
    // value={password}
    // onChange={(ev) => setPassword(ev.target.value)}
    //   />
    //   <button>Login</button>
    //   {error && <p style={{ color: 'red' }}>{error}</p>}
    // </form>
  );
}




