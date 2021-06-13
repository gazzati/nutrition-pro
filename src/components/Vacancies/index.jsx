import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"
import {
    Button,
    CircularProgress, Grid,
    Paper, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow,
} from "@material-ui/core"
import api from '../../api'
import {getDate} from '../../helpers/getDate'
import style from './style.module.scss'

const Vacancies = ({user}) => {
    const history = useHistory()
    const [vacancies, setVacancies] = useState(false)
    const [loading, setLoading] = useState()

    const getAllVacancies = async () => {
        setLoading(true)
        const response = await api.get('/vacancy')
        setVacancies(response.data.data)
        setLoading(false)
    }

    const createVacancy = () => {
        history.push('vacancy/create')
    }

    const handleVacancyClick = (id) => {
        history.push(`vacancy/:${id}`)
    }

    useEffect(() => {
        getAllVacancies()
    }, [])

    return (
        <Grid container>
            <Grid className={style.content}>
                {loading && <CircularProgress className='loading'/>}
                {user &&
                <div className={style.paper}>
                    <Button variant="contained" color="primary" onClick={createVacancy}>
                        Create
                    </Button>
                </div>
                }
                <TableContainer component={Paper}>
                    <Table className={style.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Tags</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>User</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {vacancies && vacancies.slice(0).reverse().map(row => (
                                <TableRow key={row._id}>
                                    <TableCell className={style.title} onClick={() => handleVacancyClick(row._id)}>
                                        {row.title}
                                    </TableCell>
                                    <TableCell>{row.description}</TableCell>
                                    <TableCell>{row.tags.map((tag, index) => index === row.tags.length - 1 ? `${tag}` : `${tag}, `)}</TableCell>
                                    <TableCell>{getDate(row.date)}</TableCell>
                                    <TableCell>{`${row.user.surname} ${row.user.name}`}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}

export default Vacancies
