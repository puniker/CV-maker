import { useState } from "react"
import {Modal, Box, Button} from '@mui/material'
import {AddBox as AddBoxIcon} from '@mui/icons-material'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

export default () => {

    const [newUsername, setNewUsername] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const [modalOpen, setModalOpen] = useState(false)
    const handleModalOpen = () => setModalOpen(true)
    const handleModalClose = () => setModalOpen(false)
    
    return (
        <>
            <Button onClick={handleModalOpen} variant="contained" endIcon={<AddBoxIcon />}>Add user</Button>
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    Form to register new user.
                </Box>
            </Modal>
        </>
    )
}