import { Add } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { useState } from 'react';
import { CommitsAndMore } from './sections/CommitsAndMore';
// import { HoverCard } from './HoverCard';
import { Overall } from './sections/Overall';
import { TechChapter } from './sections/TechChapter';
import { ConnectSessions } from './sections/ConnectSessions';
export const MajorSection = ({ text }: any) => {
    return <Typography variant="h4" color="teal" gutterBottom
    // textAlign={'left'}
    >
        {text}
    </Typography>
}

export const Newsletter = () => {
    const [leftSectionCards, setLeftSectionCards] = useState<any[]>([]);
    const [midSectionCards, setMidSectionCards] = useState<any[]>([]);
    const [rightSectionCards, setRightSectionCards] = useState<any[]>([]);

    const addCard = (section: string) => {
        console.log(section);
        if (section === "left") {
            let newSection = leftSectionCards;
            newSection.push(newSection.length + 1);
            setLeftSectionCards(Array.from(newSection));
        }
        else if (section === "mid") {
            let newSection = midSectionCards;
            newSection.push(newSection.length + 1);
            setMidSectionCards(Array.from(newSection));
        } else if (section === "right") {
            let newSection = rightSectionCards;
            newSection.push(newSection.length + 1);
            setRightSectionCards(Array.from(newSection));
        }

    }
    return (
        <main>
            <Box
                sx={{
                    p: 4,
                }}
            >
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <CommitsAndMore></CommitsAndMore>
                        <MajorSection text={"Tech Chapter"}></MajorSection>
                        {leftSectionCards.map((card: any) => (
                            <TechChapter card={card}></TechChapter>
                        ))}
                        <Fab color="primary" aria-label="add" size='small' onClick={() => addCard("left")}>
                            <Add />
                        </Fab>
                    </Grid>
                    <Grid item xs={4}>
                        <Overall></Overall>
                        <MajorSection text={"Brown Bag Session"}></MajorSection>
                        {midSectionCards.map((card: any) => (
                            <TechChapter card={card}></TechChapter>
                        ))}
                        <Fab color="primary" aria-label="add" size='small' onClick={() => addCard("mid")}>
                            <Add />
                        </Fab>
                    </Grid>
                    <Grid item xs={4}>
                        <MajorSection text={"Engineering 2.0"}></MajorSection>
                        {rightSectionCards.map((card: any) => (
                            <TechChapter card={card}></TechChapter>
                        ))}
                        <Fab color="primary" aria-label="add" size='small' onClick={() => addCard("right")}>
                            <Add />
                        </Fab>
                        <ConnectSessions></ConnectSessions>
                    </Grid>
                </Grid>
            </Box>
            {/* <Box
                sx={{
                    p: 4,
                }}
            >
                <HoverCard content={<ConnectSessions></ConnectSessions>}></HoverCard>
            </Box> */}
        </main>
    );
}