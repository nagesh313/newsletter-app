import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export const Header = () => {
    return (
        <Paper
            sx={{
                color: '#fff',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundImage: `url(/images/4.png)`,
            }}
        >
            <Grid container justifyContent={'center'}>
                <Grid item >
                    <Box
                        sx={{
                            position: 'relative',
                            p: { md: 6 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color="black" gutterBottom>
                            Product Enablement Engineering Newsletter - <span contentEditable>&lt;Month&gt;</span>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}