import React from 'react'
import { Box, IconButton, Typography, colors, useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { tokens } from "../../theme";

const TopBar = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const colors = tokens(theme.palette.mode);
    return (
        <Box display="flex" justifyContent="space-between" p={2} >
            <Box>
                <Typography
                    variant="h3"
                    fontWeight="500"
                    sx={{ m: "0 0 5px 0" }}
                >
                    {"ERP System"}
                </Typography>

            </Box>

            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>

            </Box>
        </Box>
    )
}

export default TopBar