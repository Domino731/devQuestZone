import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import {Menu as MuiMenu} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import {menuStyles} from "./Menu.styles.ts";
import {MouseEvent} from "react";

export const Menu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={menuStyles}
            >
                Dashboard
            </Button>
            <MuiMenu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <div>
                        <Button
                            id="basic-button"
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            Dashboard
                        </Button>
                        <MuiMenu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </MuiMenu>
                    </div>
                </MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </MuiMenu>
        </div>
    );
}