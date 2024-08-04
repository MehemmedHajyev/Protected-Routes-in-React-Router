import React from 'react'
import { useState } from 'react'
import './login.css'
import axios from 'axios'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async (e) => {
        e.priventDefault();
        const res = await axios.post('', {
            username: username,
            password: password,
            languageID: 1000000
        });

        if (res.status == 200) {
            localStorage.setItem("user", JSON.stringify(res.data))

        }
    }
    return (
        <div>
            <form onSubmit={loginUser}   >
                <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"
                        onChange={(e) => { setUsername(e.targer.value) }}

                    />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"

                        onChange={(e) => { setPassword(e.targer.value) }}

                    />
                    <label for="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
            </form>
        </div>
    )
}

export default Login
