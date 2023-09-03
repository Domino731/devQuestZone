import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import {Container} from "@mui/system";
import {allRoadmapsArray} from "@/modules/AllRoadmaps/AllRoadmaps.const";
import Link from "next/link";


export const AllRoadmaps = () => {
    return <Container maxWidth="xl">
        <nav aria-label="secondary mailbox folders">
            <List>
                {allRoadmapsArray.map(({label, link}) => <ListItem disablePadding key={`all-roadmaps-${label}`}>
                    <ListItemButton>
                        <Link href="/choose-topic/test">
                            jkiojioj
                        </Link>
                        <ListItemText primary={label}/>
                    </ListItemButton>
                </ListItem>)}
            </List>
        </nav>
    </Container>
}