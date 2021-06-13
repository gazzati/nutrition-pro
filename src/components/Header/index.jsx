import React, {useState} from "react"
import {NavLink} from "react-router-dom"
import {AppBar, IconButton, Menu, MenuItem, Toolbar, Typography} from "@material-ui/core"
import {AccountCircle} from "@material-ui/icons"
import style from './style.module.scss'

const Header = ({user, logout}) => {
    const [anchorEl, setAnchorEl] = useState(null)

    const handleLogout = () => {
        setAnchorEl(null)
        logout()
    }

    return (
        <AppBar position="fixed" className={style.appBar}>
            <Toolbar className={style.headWrap}>
                <div className={style.leftBlock}>
                    {user && <>
                        <NavLink to='/vacancies' className={style.headLink} activeClassName={style.headLinkActive}>
                            Vacancies
                        </NavLink>
                    </>}
                </div>
                <div className={style.rightBlock}>
                    {user
                        ? <div className={style.profileBlockWrap}>
                            <Typography variant="h6" noWrap>{user && `${user.name} ${user.surname}`}</Typography>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={(e) => setAnchorEl(e.currentTarget)}
                            >
                                <AccountCircle/>
                            </IconButton>

                            <Menu
                                anchorEl={anchorEl}
                                anchorOrigin={{vertical: "top", horizontal: "center"}}
                                transformOrigin={{vertical: "top", horizontal: "center"}}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={() => setAnchorEl(null)}
                            >
                                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                            </Menu>
                        </div>
                        : <NavLink to='/login' className={style.headLink} activeClassName={style.headLinkActive}>
                            Log in
                        </NavLink>
                    }
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header
