
import { useState } from 'react';
import { api } from "@/trpc/server";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.loginRouter.login.mutate({
        username
      })
      console.log(response); // Handle successful login
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
