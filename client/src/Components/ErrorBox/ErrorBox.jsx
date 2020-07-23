import React from 'react'
import { Alert } from '@material-ui/core'

const ErrorBox = props => {
    return (

        <Modal
            open={open}
            onClose={handleClose}
        >
            <Alert variant="filled" severity="error">
                test
            </Alert>
        </Modal>
    )
}

export default ErrorBox