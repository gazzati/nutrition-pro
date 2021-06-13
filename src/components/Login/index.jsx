import React, {useState} from "react"
import {NavLink} from "react-router-dom"
import {Button, Container, CssBaseline, TextField, Typography} from "@material-ui/core"
import style from './style.module.scss'

const Login = ({login}) => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const onLogin = (e) => {
        e.preventDefault()
        login(loginData)
    }

    return (
        <div className='login'>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={style.paper}>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form onSubmit={onLogin}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            type='email'
                            autoFocus
                            value={loginData.email}
                            onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={loginData.password}
                            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={style.submit}
                            type='submit'
                        >
                            Log in
                        </Button>
                        <Typography className={style.register}>or
                            <NavLink to='register'> Register</NavLink>
                        </Typography>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Login
