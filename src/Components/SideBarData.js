import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StoreIcon from '@mui/icons-material/Store';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export const SideBarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link:  "/"
    },
    {
        title: "NFTs",
        icon: <PersonIcon />,
        link:  "/Account"
    },
    {
        title: "Token",
        icon: <AttachMoneyIcon />,
        link:  "/Token"
    },
    {
        title: "Marketplace",
        icon: <StoreIcon />,
        link:  "/Marketplace"
    },
    {
        title: "Game",
        icon: <SportsEsportsIcon />,
        link:  "/Game"
    },
    {
        title: "Docs",
        icon: <MenuBookIcon />,
        link:  "/Whitepaper"
    }
]

