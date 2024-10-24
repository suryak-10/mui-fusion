import CircularProgress from '@mui/material/CircularProgress';
import { Box, CircularProgressProps, IconButton, IconButtonProps, Tooltip, TooltipProps } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import { grey } from '@mui/material/colors';

type IconButtonTooltipLoadingProps = {
    TooltipProps?: Partial<TooltipProps>,
    Icon: React.ReactNode,
    CircularProgressProps?: CircularProgressProps,
    title?: string,
    isLoading?: boolean,
} & IconButtonProps

const sizes: Exclude<IconButtonProps['size'], undefined>[] = ['small', 'medium', 'large'];

const loaderSize: Record<Exclude<IconButtonProps['size'], undefined>, string> = {
    small: '34px',
    medium: '40px',
    large: '48px',
}

const IconButtonTooltipLoading = ({
    TooltipProps,
    CircularProgressProps,
    Icon,
    title,
    isLoading = false,
    size = 'small',
    sx = {},
    ...restButtonProps
}: IconButtonTooltipLoadingProps) => {

    const IconButtonNode = <Box sx={{ position: 'relative' }}>
        <IconButton size={size}
            sx={{
                backgroundColor: grey[50],
                ...sx,
            }}
            {...restButtonProps}>
            {Icon}
        </IconButton>
        {isLoading && <CircularProgress size={loaderSize[size]} sx={{ position: 'absolute', top: 0, left: 0 }} {...CircularProgressProps} />}
    </Box>

    if (title == undefined) return IconButtonNode;

    return (
        <Tooltip placement='top' title={title} {...TooltipProps}>
            {IconButtonNode}
        </Tooltip>
    )
}

export default IconButtonTooltipLoading