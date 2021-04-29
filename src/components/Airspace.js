import Grid from '@material-ui/core/Grid'
import Aircraft from './Aircraft'
import './Airspace.css'

function sortByAltitude(a, b, sortOrder) {
    const a_alt = a.alt_baro || 0;
    const b_alt = b.alt_baro || 0;
    if (sortOrder) {
        return a_alt - b_alt
    }
    return b_alt - a_alt;
}

function sortByHeading(a, b, sortOrder) {
    const a_heading = a.track || 0;
    const b_heading = b.track || 0;
    if (sortOrder) {
        return a_heading - b_heading;
    }
    return b_heading - a_heading;
}

export default function Airspace(props) {
    let aircraftList = [...props.aircrafts];
    if (!props.sortKeepNull) {
        switch (props.sortBy) {
            case 'altitude':
                aircraftList = aircraftList.filter((x) => 'alt_baro' in x)
                break;
            case 'heading':
                aircraftList = aircraftList.filter((x) => 'track' in x)
                break;
            default:
        }
    }
    switch (props.sortBy) {
        case 'altitude':
            aircraftList.sort((a, b) =>
                sortByAltitude(a, b, props.sortOrder)
            )
            break;
        case 'heading':
            aircraftList.sort((a, b) =>
                sortByHeading(a, b, props.sortOrder)
            )
        default:
    }
    // console.log(aircrafts);
    return (
        <Grid container className='airspace' spacing={2}>
            {aircraftList.map((x) => <Aircraft {...x} />)}
        </Grid>
    )
}