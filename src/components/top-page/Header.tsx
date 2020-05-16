import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const Header:React.FC = () => (
    <AppBar position="static">
        <Toolbar>
            <h2>タイトル</h2>
        </Toolbar>
    </AppBar>
);

export default Header
