import './Aircraft.css'
import { React, useState } from 'react'
import { Button, Card, CardContent, CardActions, Grid, Modal, Typography } from '@material-ui/core'
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';

export default function Aircraft(props) {
    // console.log(props);
    const title = 'flight' in props ? `${props.flight} | ${props.hex}` : props.hex;
    // const [detailsOpen, setDetailsOpen] = useState(false);
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
                    <CardActions>
                        <Button size='small'
                            // onClick={()=>setDetailsOpen(true)}
                        >
                            <MapOutlinedIcon/>
                        </Button>
                    </CardActions>
            </Card>
            {/* <Modal open={detailsOpen} onClose={()=>setDetailsOpen(false)}>
                Test
            </Modal> */}
        </Grid>
    )
}