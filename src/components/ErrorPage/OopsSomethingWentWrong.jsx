import React from 'react';
import { Styles } from '../../styles/ErrorPage';
import {
      Paper,
      useTheme,
      Button
} from '../Core';
import somethingWentWrongLightSVG from '../../assets/images/somethingWentWrongLight.svg';
import somethingWentWrongDarkSVG from '../../assets/images/somethingWentWrongDark.svg';

const errorText = {
      oopsTitle: "Sorry, something went wrong",
      oopsContent: "Try reloading the page. We're working hard to fix Prism for you as soon as possible"
}

export const OopsSomethingWentWrong = ({ onReload, details }) => {debugger;
      const classes = Styles();
      const theme = useTheme();
      const isLight = theme.theme === "light";
      const onGetDetails = () => { 
            console.log(details);
      }
      return (
            <div className={classes.root}>
                  <Paper elevation="0" className={classes.oopsSomethingWentWrongContianer}>
                        <img className={classes.logo} src={isLight ? somethingWentWrongLightSVG : somethingWentWrongDarkSVG} alt="logo" />
                  </Paper>
                  <div className={classes.errorTextTitleContainer}>
                        <div className={classes.title}>{errorText.oopsTitle}</div>
                        <div className={classes.content}>{errorText.oopsContent}</div>
                  </div>
                  <div className={classes.btnContainer}>
                        <Button
                              color="primary"
                              variant="contained"
                              className={classes.btnReload}
                              onClick={onReload}
                        >Reload</Button>
                        <Button
                              color="primary"
                              className={classes.btnDetails}
                              onClick={onGetDetails}
                        >Details</Button>
                  </div>
            </div>
      )
}