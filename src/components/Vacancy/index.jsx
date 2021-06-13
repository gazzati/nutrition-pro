import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {CircularProgress, Container, CssBaseline, Typography} from "@material-ui/core"
import api from "../../api"
import style from './style.module.scss'
import {getDate} from "../../helpers/getDate"

const Vacancy = () => {
    const vacancyId = useParams().id
    const [vacancy, setVacancy] = useState(null)
    const [loading, setLoading] = useState()

    const getVacancy = async () => {
        setLoading(true)
        const response = await api.get(`/vacancy/${vacancyId.slice(1)}`)
        setVacancy(response.data.data)
        setLoading(false)
    }

    useEffect(() => {
        getVacancy()
    }, [])

    return (
        <div className='vacancy'>
            <Container component="main" maxWidth="s">
                {loading && <CircularProgress className='loading'/>}
                <CssBaseline/>
                {vacancy &&
                <div className={style.paper}>
                    <Typography component="h1" variant="h3" align='center'>
                        Vacancy
                    </Typography>
                    <Typography component="h3" variant="h5">
                        User: {`${vacancy.user.surname} ${vacancy.user.name}`}
                    </Typography>
                    <Typography component="h3" variant="h5">
                        User email: {vacancy.user.email}
                    </Typography>
                    <Typography component="h3" variant="h5">
                        Title: {vacancy.title}
                    </Typography>
                    <Typography component="h3" variant="h5">
                        Description: {vacancy.description}
                    </Typography>
                    <Typography component="h3" variant="h5">
                        Tags: {vacancy.tags.map((tag, index) => index === vacancy.tags.length - 1 ? `${tag}` : `${tag}, `)}
                    </Typography>
                    <Typography component="h3" variant="h5">
                        Created date: {getDate(vacancy.date)}
                    </Typography>
                </div>}
            </Container>
        </div>
    )
}

export default Vacancy
