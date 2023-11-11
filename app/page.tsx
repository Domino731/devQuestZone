import Image from 'next/image'
import styles from './page.module.css'
import {Card, Typography} from "@mui/material";
import {Header} from "@/modules/Header/Header";
import {Container} from "@mui/system";
import {TypeCard} from "@/components/TypeCard";
import {AllRoadmaps} from "@/modules/AllRoadmaps";
import {Question} from "@/modules/Question";

export default function Home() {
    return (
        <main>
            {/*<AllRoadmaps/>*/}
            <Question/>
        </main>
    )
}
