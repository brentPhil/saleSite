import React from 'react'
import { Button, Card, Paper, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
import '../../../assets/mainStyle/mainStyle.css';


const SearchBar = ( {products, filter, name} ) => {
    const classes = useStyles();

    return (
        <>
          <div className='Scon'>
            <div className={classes.search}>
            <Autocomplete
              freeSolo
              autoHighlight
              blurOnSelect='mouse'
              id='search'
              disableListWrap
              disableClearable
              classes={{ root: classes.inputRoot, input: classes.inputInput,}}
              PaperComponent={({ children }) => (<Paper className='dropDown'>{children}</Paper>)}
              fullWidth={true}
              options={products.map((products) => products.name)}
              renderOption={(option) => <Typography id='search' noWrap>{option}</Typography>}
              renderInput={(params) => (
                <TextField
                  style={{padding: '0 1em',}}
                  {...params}
                  value={name}
                  placeholder="Search…" 
                  onChange={filter}
                  margin="dense"
                  disabled={true}
                  InputProps={{ ...params.InputProps, disableUnderline: true }}
                />
              )}
            />
          <Button component={Link} to="/SearchRe"  className={classes.searchIcon} type="button" variant="text">
            <SearchIcon />
          </Button>
          </div>
        <Card className={classes.result}>
        </Card>
      </div>
    </>
  )
}
 
export default SearchBar
