import React, { useState } from 'react';
import Spinner from './Spinner'

const useSpinner = (props) => {

    const [visible, setVisible] = useState(false)

    const showSpinner = () => {
        console.log("spinning")
        setVisible(true)
    }
    const hideSpinner = () => setVisible(false);
    const spinner = visible ? <Spinner /> : null;

    return [spinner, showSpinner, hideSpinner]
}

export default useSpinner;