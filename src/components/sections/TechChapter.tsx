import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

export const TechChapter = (card: any) => {
    const [imageAlignment, setImageAlignment] = useState('left');
    const test = (event: any) => {
        console.log(event.currentTarget.textContent);
        console.log(setImageAlignment);
    }
    const cardToDisplay = () => {
        switch (imageAlignment) {
            case "top": return <Card sx={{ display: 'flex', flexDirection: 'column' }} >
                <CardMedia style={{ cursor: 'pointer' }}
                    sx={{
                        pt: '56.25%',
                    }}
                    image="/photo.jpeg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography contentEditable gutterBottom variant="h5" component="h2" textAlign={'left'}>
                        &lt;Tech Chapter heading&gt;
                    </Typography>
                    <Typography contentEditable component="div" variant="subtitle1" gutterBottom textAlign={'left'}>
                        -&lt;Presenter Name&gt;
                    </Typography>
                    <Typography contentEditable component="div" variant="subtitle1" textAlign={'left'} >
                        &lt;Content&gt;
                    </Typography>
                </CardContent>
            </Card>;
            case "bottom": return <Card sx={{ display: 'flex', flexDirection: 'column' }} >
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography contentEditable gutterBottom variant="h5" component="h2" textAlign={'left'}>
                        &lt;Tech Chapter heading&gt;
                    </Typography>
                    <Typography contentEditable component="div" variant="subtitle1" gutterBottom textAlign={'left'}>
                        -&lt;Presenter Name&gt;
                    </Typography>
                    <Typography contentEditable component="div" variant="subtitle1" textAlign={'left'} >
                        &lt;Content&gt;
                    </Typography>
                </CardContent>
                <CardMedia style={{ cursor: 'pointer' }}
                    sx={{
                        pt: '56.25%',
                    }}
                    image="/photo.jpeg"
                />
            </Card>;
            case "left": return <Box sx={{ display: 'flex', direction: 'rtl' }} >
                <CardContent sx={{ flex: 1 }}>
                    <Typography contentEditable component="h2" variant="h5" textAlign={'left'} onInput={test}>
                        &lt;Tech Chapter heading&gt;
                    </Typography>
                    <Typography contentEditable component="div" variant="subtitle1" color="text.secondary" textAlign={'left'} sx={{ display: 'flex', direction: 'ltr' }} >
                        -&lt;Presenter Name&gt;
                    </Typography>
                    <Typography contentEditable component="div" variant="subtitle1" paragraph textAlign={'left'}>
                        &lt;Content&gt;
                    </Typography>
                </CardContent>

            </Box>;
            case "right": return <Card sx={{ display: 'flex' }} >
                <CardContent sx={{ flex: 1 }}>
                    <Typography contentEditable component="h2" variant="h5" textAlign={'left'}>
                        &lt;Tech Chapter heading&gt;
                    </Typography>
                    <Typography contentEditable component="div" variant="subtitle1" color="text.secondary" textAlign={'left'}>
                        -&lt;Presenter Name&gt;
                    </Typography>
                    <Typography contentEditable component="div" variant="subtitle1" paragraph textAlign={'left'}>
                        &lt;Content&gt;
                    </Typography>
                </CardContent>
                <CardMedia style={{ cursor: 'pointer' }}
                    component="img"
                    sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                    image={"/photo.jpeg"}
                    alt={"iMAGE"}
                />
            </Card>;
            case "no-image": return <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <Typography contentEditable gutterBottom variant="h5" component="h2" textAlign={'left'}>
                        &lt;Tech Chapter heading&gt;
                    </Typography>
                    <Typography contentEditable component="div" variant="subtitle1" gutterBottom textAlign={'left'}>
                        -&lt;Presenter Name&gt;
                    </Typography>
                    <Typography contentEditable component="div" variant="subtitle1" textAlign={'left'} >
                        &lt;Content&gt;
                    </Typography>
                </CardContent>
            </Card>;
        }

    }

    return <Box sx={{ marginBottom: 4 }}>
        {cardToDisplay()}
    </Box>
}