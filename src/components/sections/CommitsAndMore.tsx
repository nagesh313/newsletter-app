import { Box, Card, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { MajorSection } from "../Newsletter";
const useStyles: any = makeStyles((theme: any) => ({
    card: {
        position: 'relative',
        // backgroundImage: `url('images/1.png')`, // Replace with your image path
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        zIndex: 1, // Set a higher z-index value for the card
    },
    content: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    otherComponent: {
        position: 'relative',
        zIndex: 2, // Set a lower z-index value for the other components
        // Add any other styles you need for the other components
    },
}));

export const CommitsAndMore = () => {
    console.log(useStyles);
    return <Box sx={{ mb: 2, p: 2 }}>
        <MajorSection text={"Commits and More"}></MajorSection>
        <Card sx={{ mb: 2 }} elevation={4} className='pattern-1'>
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="teal" gutterBottom>
                    People Contributing
                </Typography>
                <Typography variant="h4" color="text.secondary">
                    168
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{ mb: 2 }} elevation={4} className='pattern-2'>
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="teal" gutterBottom>
                    Commits
                </Typography>
                <Typography variant="h4" color="text.secondary">
                    3741
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{ mb: 2 }} elevation={4} className='pattern-3'>
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="teal" gutterBottom>
                    Active Repos
                </Typography>
                <Typography variant="h4" color="text.secondary">
                    149+
                </Typography>
            </CardContent>
        </Card>
    </Box>
}