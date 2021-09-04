import React from 'react'
import { InputBase, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

const SearchBar = () => {
    const classes = useStyles();

    return (
        <>
          <div style={{width: '100%', textAlign: 'center', margin: '0 1em'}}>
            <div className={classes.search}>
              <InputBase
                placeholder="Search…"
                fullWidth={true}
                classes={{
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                style={{color: 'white',}}
              />
              <Button className={classes.searchIcon} type="button" variant="text">
                <SearchIcon />
              </Button>
            </div>
          </div>
        </>
    )
}

export default SearchBar
