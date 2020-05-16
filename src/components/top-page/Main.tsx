import React, {useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";


import pencil from "../../assets/images/pencil.png"

const useStyle = makeStyles(() =>
    createStyles({
        background: {
            backgroundImage: `url(${pencil})`,
            backgroundSize: 'cover',
            height: '100vh',
        },
        paper: {
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            top: '35%',
            width: '45%',
        }
    }),
)

const Main:React.FC = () => {
    const classes = useStyle();
    const [keyword, setKeyword] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    };

    return (
        <div className={classes.background}>
            <Paper className={classes.paper}>
                <IconButton type="submit">
                    <SearchIcon/>
                </IconButton>
                <InputBase placeholder="無料素材を検索" onChange={handleChange}/>
            </Paper>
        </div>
    );
}

export default Main