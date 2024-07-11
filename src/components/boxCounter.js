import { Box, Badge } from '@mui/material';
import React, { useContext } from 'react';
import { CountContext } from './CountContext';
import { ButtonCounterMinus } from './ButtonCounterMinus';
import { ButtonCounterPlus } from './ButtonCounterPlus';

export function BoxCounter() {
    const { add } = useContext(CountContext);
    return (
        <div style={{ display: 'flex' }}>
            <Box sx={{ backgroundColor: 'hsl(223, 64%, 98%)' }}>
                <ButtonCounterMinus/>
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
                <ButtonCounterPlus/>
            </Box>
        </div>
    );
}
