import React from 'react';
import {scroller} from 'react-scroll';
// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
import Fade from '@mui/material/Fade';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const MSideDrawler = (props) => {

    const scrollToElement=(element)=>{
        scroller.scrollTo(element,{
            duration : 1500,
            delay: 100,
            smoth: true,
            offset: -100
        });
        props.onClose(false);
    }

    return (
      <Drawer
        anchor="right"
        open={props.open}
        onClose={() => props.onClose(false)}
      >
        <List component="nav">
          <ListItem button onClick={() => scrollToElement("featured")}>
            Starting
          </ListItem>
          <ListItem button onClick={() => scrollToElement("venue-info")}>
           Info
          </ListItem>
          <ListItem button onClick={() => scrollToElement("highlights")}>
            Reception
          </ListItem>
          <ListItem button onClick={() => scrollToElement("pricing")}>
            Tickets
          </ListItem>
          <ListItem button onClick={() => scrollToElement("location")}>
            Location
          </ListItem>
        </List>
      </Drawer>
    );
};

export default MSideDrawler;