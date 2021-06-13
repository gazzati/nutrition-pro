import React, {useState} from "react"
import {Button, Container, CssBaseline, TextField, Typography} from "@material-ui/core"
import style from './style.module.scss'

const Register = ({register}) => {
    const [registerData, setRegisterData] = useState({
        email: '',
        password: '',
        submitPassword: '',
        name: '',
        surname: ''
    })

    const onRegistration = (e) => {
        e.preventDefault()
        if(registerData.password !== registerData.submitPassword) {
            return alert("Passwords is not equal")
        }
        register(registerData)
    }

    return (
        <div className='register'>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={style.paper}>
                    <Typography component="h1" variant="h5">
                        Регистрация
                    </Typography>
                    <form onSubmit={onRegistration}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Name"
                            autoFocus
                            value={registerData.name}
                            onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Surname"
                            id="password"
                            value={registerData.surname}
                            onChange={(e) => setRegisterData({...registerData, surname: e.target.value})}
                        />
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
                            value={registerData.email}
                            onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
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
                            value={registerData.password}
                            onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="submit password"
                            label="Submit password"
                            type="password"
                            id="submit password"
                            value={registerData.submitPassword}
                            onChange={(e) => setRegisterData({...registerData, submitPassword: e.target.value})}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={style.submit}
                            type='submit'
                        >
                            Register
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Register
