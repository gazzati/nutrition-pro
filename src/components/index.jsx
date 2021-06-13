import React, {useState} from 'react'
import {Switch, Route, useHistory} from "react-router-dom"
import {CircularProgress, Container} from '@material-ui/core'
import api from '../api'
import AuthCheck from "../hoc/AuthCheck"
import Header from "./Header"
import Login from "./Login"
import Register from "./Register"
import Vacancies from "./Vacancies"
import Vacancy from "./Vacancy"
import CreateVacancy from "./CreateVacancy"

const App = () => {
    const history = useHistory()

    const [user, setUser] = useState()
    const [loading, setLoading] = useState()

    const auth = async (data, method) => {
        setLoading(true)
        const response = await api.post(`auth/${method}`, data)
        if (response.data.error) {
            alert(response.data.message)
            return setLoading(false)
        }
        setUser(response.data.data)
        history.push('/vacancies')
        setLoading(false)
    }


    const register = async (data) => {
        await auth(data, 'register')
    }

    const login = async (data) => {
        await auth(data, 'login')
    }

    const logout = async () => {
        setUser(null)
    }

    return (
        <Container>
            {loading && <CircularProgress className='loading'/>}
            <Header logout={logout} user={user}/>
            <Switch>
                <Route path='/login' exact>
                    <Login login={login}/>
                </Route>
                <Route path='/register' exact>
                    <Register register={register}/>
                </Route>
                <Route path='/vacancies'>
                    <AuthCheck user={user}>
                        <Vacancies user={user}/>
                    </AuthCheck>
                </Route>
                <Route path='/vacancy/create'>
                    <AuthCheck user={user}>
                        <CreateVacancy user={user}/>
                    </AuthCheck>
                </Route>
                <Route path='/vacancy/:id'>
                    <AuthCheck user={user}>
                        <Vacancy/>
                    </AuthCheck>
                </Route>
                <Route path='*'>
                    <AuthCheck user={user}>
                        <Vacancies user={user}/>
                    </AuthCheck>
                </Route>
            </Switch>
        </Container>
    )
}

export default App