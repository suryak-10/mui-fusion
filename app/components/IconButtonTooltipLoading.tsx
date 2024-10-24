import CircularProgress from '@mui/material/CircularProgress';
import { Box, CircularProgressProps, IconButton, IconButtonProps, Tooltip, TooltipProps } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import { blue, grey } from '@mui/material/colors';

type IconButtonTooltipLoadingProps = {
    TooltipProps?: Partial<TooltipProps>,
    Icon: React.ReactNode,
    CircularProgressProps?: CircularProgressProps,
    title?: string,
    color?: CircularProgressProps['color'],
    loadingTitle?: string,
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
    loadingTitle,
    isLoading = false,
    size = 'small',
    color = 'inherit',
    sx = {},
    ...restButtonProps
}: IconButtonTooltipLoadingProps) => {
    const { color: btnColor = 'none', ...btnRestStyles } = sx;
    const IconButtonNode = <Box sx={{ position: 'relative', color: btnColor, }}>
        <IconButton
            size={size}
            sx={{
                // zIndex: 1110,
                // backgroundColor: 'blue',
                ...sx,
            }}
            color={color}
            {...restButtonProps}>
            {Icon}
        </IconButton>
        {isLoading && <CircularProgress
            size={loaderSize[size]}
            color={color}
            sx={{ position: 'absolute', top: 0, left: 0 }}
            {...CircularProgressProps} />}
    </Box>

    if (title == undefined) return IconButtonNode;

    return (
        <Tooltip
            placement='top'
            title={isLoading && loadingTitle != undefined ? loadingTitle : title}
            {...TooltipProps}>
            {IconButtonNode}
        </Tooltip>
    )
}

export default IconButtonTooltipLoading