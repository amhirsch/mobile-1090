import './Aircraft.css'
import React from 'react'
import { Card, CardContent, Grid, Typography } from '@material-ui/core'

export default function Aircraft(props) {
    // console.log(props);
    const title = 'flight' in props ? `${props.flight} | ${props.hex}` : props.hex;
    return (
        <Grid item>
            <Card>
                <CardContent align='center'>
                    <Typography align='center' variant='h6'>
                        {title}
                    </Typography>
                    <Typography>
                        {`${props.alt_baro} ft`}
                    </Typography>
                    <Typography>
                        {`${props.gs} kts | ${props.track}\xB0`}
                    </Typography>
                    </CardContent>
            </Card>
        </Grid>
    )
}