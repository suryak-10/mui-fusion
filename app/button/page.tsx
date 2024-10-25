"use client";
import React, { useState } from 'react'
import IconButtonTooltipLoading from '../components/IconButtonTooltipLoading'
import SaveIcon from '@mui/icons-material/Save';
import { IconButtonProps } from '@mui/material';
import { green, grey, pink, red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';

const sizes: Exclude<IconButtonProps['size'], undefined>[] = ['small', 'medium', 'large'];

const page = () => {
    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            {sizes.map(size => {
                const [loading, setLoading] = useState(false);
                return <IconButtonTooltipLoading
                    size={size}
                    key={size}
                    title={size}
                    loadingTitle={`${size} loading`}
                    isLoading={loading}
                    disabled={loading}
                    // CircularProgressProps={{ color: 'error' }}
                    Icon={<DeleteIcon />}
                    TooltipProps={{ placement: 'top' }}
                    onClick={() => {
                        setLoading(true);
                        setTimeout(() => {
                            setLoading(false);
                        }, 3000);
                    }}
                />
            })}
            <IconButtonTooltipLoading
                title=''
                // isLoading
                Icon={<DeleteIcon />}
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