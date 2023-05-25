"use client"
import { useState } from 'react';
import { signInEmailAndPassword } from './helper';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle login logic here
        console.log(email, password)
        setLoading(true)
        try {
            
            signInEmailAndPassword(email, password, setSuccess, setError);
        }
        catch (error) {
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
        
    };

    return (
        <div style={{backgroundImage: "url('bg-image.webp')"}} className="flex flex-col bg-center bg-cover items-center justify-center h-screen">
        <div className={`${error ! == "" && 'shadow bg-white my-3 p-3'}`}>
            <p className='text-red-500 text-sm'>{error || success}</p>
        </div>
        <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-medium mb-4">Login</h2>
            <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
            </label>
            <input
                className="border  focus:border-primary outline-none border-gray-300 p-2 w-full rounded-md"
                type="email"
                id="email"
                value={email}
                onChange={(event) => {
                    event.preventDefault();
                    setEmail(event.target.value)}}
                required
            />
            </div>
            <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                Password
            </label>
            <input
                className="border focus:border-primary outline-none border-gray-300 p-2 w-full rounded-md"
                type="password"
                id="password"
                value={password}
                onChange={(event: any) => {
                    event.preventDefault()
                    setPassword(event.target.value)}}
                required
            />
            </div>
            <button onClick={(e:any) => {
                handleSubmit(e)
            }} disabled={loading} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
            {loading ? "Loading" : "Login"}
            </button>
        </section>
        </div>
    );
};

export default Login;
