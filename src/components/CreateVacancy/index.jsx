import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import {Button, Container, CssBaseline, TextField, Typography} from "@material-ui/core"
import api from '../../api'
import style from './style.module.scss'

const Create = ({user}) => {
    const history = useHistory()
    const [vacancy, setVacancy] = useState({
        title: '',
        description: '',
        tags: ''
    })

    const onCreate = (e) => {
        e.preventDefault()
        api.post('vacancy/', {
            ...vacancy,
            date: new Date,
            userId: user._id,
            tags: vacancy.tags.replace(/\s/g, "").split(",").filter(tag => tag)
        }).then(() => history.push(''))
    }

    return (
        <div className='create'>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={style.paper}>
                    <Typography component="h1" variant="h5">
                        Create vacation
                    </Typography>
                    <form onSubmit={onCreate}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="title"
                            label="Title"
                            name="title"
                            type='text'
                            autoFocus
                            value={vacancy.title}
                            onChange={(e) => setVacancy({...vacancy, title: e.target.value})}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="description"
                            label="Description"
                            id="description"
                            value={vacancy.description}
                            onChange={(e) => setVacancy({...vacancy, description: e.target.value})}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="tags"
                            label="Tags comma separated"
                            id="tags"
                            value={vacancy.tags}
                            onChange={(e) => setVacancy({...vacancy, tags: e.target.value})
                            }
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={style.submit}
                            type='submit'
                        >
                            Create
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Create
