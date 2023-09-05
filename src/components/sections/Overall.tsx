import { Box, Card, CardContent, Typography } from '@mui/material';
import { MajorSection } from '../Newsletter';
export const Overall = () => {
    return <Box sx={{
        mb: 2, p: 2
    }} >
        <Box sx={{
            mb: 2,
        }}  >
            <MajorSection text={"Overall"}></MajorSection>
        </Box>
        <Card sx={{
            mb: 2,
        }} elevation={4}>
            <CardContent>
                {/* <Grid container >
                    <Grid item xs={6}>
                        <Typography variant="h5" color="text.secondary">
                            230+ API's
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h5" color="text.secondary">
                            230+ API's
                        </Typography>
                    </Grid>
                </Grid> */}
                <Typography variant="h5" color="text.secondary">
                    230+ API's
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{
            mb: 2,
        }} elevation={4}>
            <CardContent>
                <Typography variant="h5" color="text.secondary">
                    68 Containerized services in OpenShift platform
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{
            mb: 2,
        }} elevation={4}>
            <CardContent>
                <Typography variant="h5" color="text.secondary">
                    2 AI/ML models in Azure databricks
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{
            mb: 2,
        }} elevation={4}>
            <CardContent>
                <Typography variant="h5" color="text.secondary">
                    2 java Services on Azure VM's
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{
            mb: 2,
        }} elevation={4}>
            <CardContent>
                <Typography variant="h5" color="text.secondary">
                    40+ Learning Hours
                </Typography>
            </CardContent>
        </Card>
    </Box >
}

