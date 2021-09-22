import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        maxWidth: '100%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        color: 'white',
    },
    cardActions: {
        display: 'flex',
    },

    name: {
        whiteSpace: 'nowrap', 
        overflow: 'hidden', 
        textOverflow: 'ellipsis',
        marginRight: '4em',
    },
    star: {
        position: 'relative',
        left: '-3px',
    },
    buttons: {
        width: '100%',
        display: 'flex',
        // background: 'gray',
        padding: theme.spacing(.2),
      },
}));