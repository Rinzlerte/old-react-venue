import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MSideDrawler from './SideDrawler';
import MenuIcon from '@mui/icons-material/Menu';
import { TroubleshootOutlined } from '@mui/icons-material';
import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils';

class header extends Component {

    state = {
        drawerOpen : false,
        headerOpacity: false
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll =()=> {
        if (window.scrollY > 0){
            this.setState({headerOpacity: TroubleshootOutlined})
        }else {
            this.setState({ headerOpacity: FOCUSABLE_SELECTOR})
        }
    }

    toogleDrawer = (value) => {
        this.setState({drawerOpen : value});
    }

    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: this.state.headerOpacity ? 'transparent': 'transparent',
                    boxShadow: 'none',
                    padding: '10px 0px'
                }}
            >
                <Toolbar>
                    <div className="header_logo">
                        <div className="font_righteous logo_venue">{this.props.title}</div>
                        <div className="header_logo_title">{this.props.description}</div>
                    </div>
                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={()=> this.toogleDrawer(true)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <MSideDrawler
                        open={this.state.drawerOpen}
                        onClose={(value)=>this.toogleDrawer(value)}
                    />
                </Toolbar>
            </AppBar>
        )
    }
}
export default header;