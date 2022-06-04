import { CircularProgress } from '@mui/material';
import React from 'react';

const Spiner = () => {
    return (
        <div className='loading'>
            <CircularProgress />
        </div>
    );
}

export default Spiner;
