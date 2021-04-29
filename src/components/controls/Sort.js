import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Sort(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    props.setSortBy(event.target.value);
  };

  return (
    <div>
        <IconButton onClick={() => props.setSortOrder(!props.sortOrder)} >
            {props.sortOrder ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
        </IconButton>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="sort-by">Sort By</InputLabel>
        <Select
          labelId="sort-by"
          id="sort-by"
          value={props.sortBy}
          onChange={handleChange}
          label="sort-by"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'altitude'}>Altitude</MenuItem>
          <MenuItem value={'heading'}>Heading</MenuItem>
        </Select>
      </FormControl>

      <FormControlLabel
        control={
          <Checkbox
            checked={props.sortKeepNull}
            onChange={() => props.setSortKeepNull(!props.sortKeepNull)}
            name="checkedB"
            color="primary"
          />
        }
        label="Keep Aircraft with Null Field"
      />
    </div>
  );
}
