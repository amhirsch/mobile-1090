import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import './Sort.css'

export default function Sort(props) {
    return (
        <FormControl variant='outlined'>
            <InputLabel>Sort By</InputLabel>
            <Select>
                <MenuItem value=''>None</MenuItem>
                <MenuItem value='altitude'>Altitude</MenuItem>
                <MenuItem value='heading'>Heading</MenuItem>
            </Select>
        </FormControl>
    )
}