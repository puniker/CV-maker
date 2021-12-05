import { useEffect, useState } from "react"
import axios from 'axios'
import {Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table} from '@mui/material'
import AddUser from '../AddUser'

export default () => {


    const [users, setUsers] = useState()
    const [loaded, setLoaded] = useState(false)

    useEffect( async () => {

        axios.get('http://localhost:3080/api/admin/users/list')
        .then(function (response) {
            setUsers(response.data)
            setLoaded(true)
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })

    }, [])

    return (
        <>
            {(!loaded)
            ? 'Cardando datos'
            : 
            <>
                <AddUser />
                <h6>Listado de todos los usuarios que tenemos disponibles en la APP</h6>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Username</TableCell>
                                <TableCell>Is admin</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>id</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map(item => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell > {item.username} </TableCell>
                                    <TableCell>{item.is_admin}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                    <TableCell>{item.id}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
            }
        </>
    )
}