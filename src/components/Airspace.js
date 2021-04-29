import Grid from '@material-ui/core/Grid'
import Aircraft from './Aircraft'
import './Airspace.css'

export default function Airspace(props) {
    // console.log(aircrafts);
    return (
        <Grid container className='airspace' spacing={2}>
            {props.aircrafts.map((x) => <Aircraft {...x} />)}
        </Grid>
    )
}