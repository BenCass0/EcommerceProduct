import { ButtonCounter } from './ButtonCounter';
import { Box, Badge } from '@mui/material';
import { Icons } from '../utils/icons';
import React, { useContext } from 'react';
import { CountContext } from './CountContext';

export function BoxCounter() {
    const { add, setAdd } = useContext(CountContext);

    return (
        <div style={{ display: 'flex' }}>
            <Box sx={{ backgroundColor: 'hsl(223, 64%, 98%)' }}>
                <ButtonCounter
                    arialabel='Minus'
                    operation={Icons.Minus}
                    onClick={() => {
                        setAdd(Math.max(add - 1, 0));
                    }}
                />
            </Box>
            <Box sx={{ backgroundColor: 'hsl(223, 64%, 98%)', width: '60px', height: '42px' }}>
                <Badge
                    badgeContent={add}
                    color='primary'
                    showZero
                    sx={{
                        marginLeft: '30px',
                        marginTop: '13px',
                        '& .MuiBadge-badge': {
                            fontSize: '15px',
                            fontWeight: '700',
                            backgroundColor:'transparent',
                            color:'black'
                        }
                    }}
                />
            </Box>
            <Box sx={{ backgroundColor: 'hsl(223, 64%, 98%)' }}>
                <ButtonCounter
                    arialabel='Plus'
                    operation={Icons.Plus}
                    onClick={() => {
                        setAdd(add + 1);
                    }}
                />
            </Box>
        </div>
    );
}
