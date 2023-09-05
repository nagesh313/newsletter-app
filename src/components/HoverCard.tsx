import { useState } from "react";
import { Card, CardContent, IconButton, Popover, MenuItem } from '@mui/material';
import { MoreVert } from "@mui/icons-material";

export const HoverCard = (props:any) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (<div style={{ position: 'relative' }}>
        <Card>
            <IconButton
                aria-label="menu"
                aria-controls={id}
                aria-haspopup="true"
                onMouseEnter={handleClick}
                style={{ position: 'absolute', top: '8px', right: '-30px' }}
            >
                <MoreVert />
            </IconButton>
            <CardContent>
                {/* Content of your card */}
                {props.content}
            </CardContent>


            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Popover>
        </Card></div>
    );
}




