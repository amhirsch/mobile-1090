import Grid from '@material-ui/core/Grid'
import Aircraft from './Aircraft'
import './Airspace.css'

export default function Airspace(props) {
    // console.log(aircrafts);
    return (
        <Grid container spacing={3}>
            {props.aircrafts.map((x) => <Aircraft {...x} />)}
        </Grid>
    )
}