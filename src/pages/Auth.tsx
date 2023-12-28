import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography/Typography';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LanguageIcon from '@mui/icons-material/Language';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';

const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        height: "100vh",
        backgroundColor: "#fff",
        width: "100%"
    },
    imageBlock: {
        backgroundColor: "#0d5ceb",
        width: "50%",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonBlock: {
        display: "flex",
        width: "50%"
    },
    listItems: {
        listStyle: "none",
        padding: "0"
    },

    listItem: {
        display: "flex",
        alignItems: "center",
        marginBottom: '12px'
    },
    listTyp: {
        paddingLeft: "10px"
    }


})

function Auth() {

    const classes = useStyles();



    return (
        <div className={classes.wrapper}>
            <div className={classes.imageBlock}>
                <ul className={classes.listItems}>
                    <li className={classes.listItem}><AutoStoriesIcon /><Typography className={classes.listTyp}>Читайте</Typography></li>
                    <li className={classes.listItem}><LanguageIcon /><Typography className={classes.listTyp}>Узнавайте</Typography></li>
                    <li className={classes.listItem}><ConnectWithoutContactIcon /><Typography className={classes.listTyp}>Общайтесь</Typography></li>
                    <li className={classes.listItem}><CastForEducationIcon /><Typography className={classes.listTyp}>Развивайтесь</Typography></li>
                </ul>
            </div>
            <div className={classes.buttonBlock}>Buttons</div>
        </div >
    )
}

export default Auth;
