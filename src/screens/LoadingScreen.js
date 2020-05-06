import React, { useEffect, useContext } from 'react';
import { Context as authContext } from '../context/authContext';

//CHECKS USER IS SIGNED IN
const LoadingScreen = () => {
    const { tryLocalSignin } = useContext(authContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);

    return null;
};

export default LoadingScreen;