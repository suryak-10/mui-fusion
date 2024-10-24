"use client";
import React from 'react'
import IconButtonTooltipLoading from '../components/IconButtonTooltipLoading'
import SaveIcon from '@mui/icons-material/Save';
import { IconButtonProps } from '@mui/material';
import { green, grey, red } from '@mui/material/colors';

const sizes: Exclude<IconButtonProps['size'], undefined>[] = ['small', 'medium', 'large'];

const page = () => {
    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            {sizes.map(size => <IconButtonTooltipLoading
                size={size}
                key={size}
                title={size}
                // isLoading
                // disabled
                CircularProgressProps={{ color: 'error' }}
                color='primary'
                sx={{ backgroundColor: grey['100'] }}
                Icon={<SaveIcon />}
                TooltipProps={{ placement: 'top' }}
                onClick={() => {
                    console.log('click');
                }}
            />)}
            <IconButtonTooltipLoading
                title=''
                // isLoading
                Icon={<SaveIcon />}
                TooltipProps={{ placement: 'top' }}
                onClick={() => {
                    console.log('click');
                }}
            />
            <IconButtonTooltipLoading
                // title=''
                Icon={<SaveIcon />}
                TooltipProps={{ placement: 'top' }}
                onClick={() => {
                    console.log('click');
                }}
            />
        </div>
    )
}

export default page