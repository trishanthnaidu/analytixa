import React, { Fragment } from 'react';
import logo from '../assets/images/logo.svg';
import Store, { StoreManager } from '@rootzjs/store';
import {
      Switch,
      Brightness3Rounded,
      Brightness7Rounded,
      useTheme,
      SearchRounded,
      TrackChangesRounded,
      InputBase,
      Typography,
      IconButton,
      Toolbar,
      AppBar,
      Tooltip,
      Icon,
      Divider,
      ViewModuleRounded,
      MenuOpenRounded,
      MenuRounded
} from './Core';

import { Styles } from "../styles/AppHeader";

export const AppHeader = ({ setTheme, route }) => {
      const { isMenuOpen } = StoreManager.getState("AppDrawer");
      const classes = Styles();
      const theme = useTheme();
      const isLight = theme.theme === "light";
      const onThemeChange = evt => {
            setTheme(evt.target.checked ? "dark" : "light");
      }
      const onMenuClose = () => {
            Store.update("AppDrawer")({
                  isMenuOpen: false
            });
      }
      const onMenuOpen = () => {
            Store.update("AppDrawer")({
                  isMenuOpen: true
            });
      }
      const MobileToolbar = () =>
            <div className={classes.logoContainer}>
                  <Tooltip title={`open filter section`} >
                        <IconButton component="span" className={classes.hamburger}>
                              <MenuRounded onClick={onMenuOpen} />
                        </IconButton>
                  </Tooltip>
            </div>
      const DesktopToolbar = () =>
            <Fragment>
                  <div className={classes.logoContainer}>
                        <IconButton className={classes.iconContainer} disabled>
                              <img className={classes.logo} src={logo} alt="logo" />
                        </IconButton>
                  </div>
                  <Typography className={classes.title} variant="h6" color="inherit">
                        Analytixa
                  </Typography>
                  <Divider className={classes.divider} orientation="vertical" />
            </Fragment>

      return (
            <div className={classes.root}>
                  <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar variant="dense">
                              {
                                    theme.isMobile ?
                                          <MobileToolbar />
                                          :
                                          <DesktopToolbar />
                              }
                              <Typography className={classes.routeTitle} variant="h6" color="inherit">
                                    {route.title}
                              </Typography>
                              {
                                    theme.isMobile ||
                                    <div className={classes.search}>
                                          <div className={classes.searchIcon}>
                                                <SearchRounded />
                                          </div>
                                          <InputBase
                                                placeholder="Search…"
                                                classes={{
                                                      root: classes.inputRoot,
                                                      input: classes.inputInput,
                                                }}
                                                inputProps={{ 'aria-label': 'search' }}
                                          />
                                    </div>
                              }
                              <Tooltip title={`More Apps`} >
                                    <IconButton component="span" className={classes.moreApps}>
                                          <ViewModuleRounded />
                                    </IconButton>
                              </Tooltip>
                              <Tooltip title={`toggle to ${theme.theme === "light" ? "dark" : "light"} theme`} >
                                    <Switch
                                          className={classes.checkbox}
                                          checked={!isLight}
                                          onChange={onThemeChange}
                                          color="primary"
                                          size="small"
                                          icon={<Brightness3Rounded className={classes.themeTogglerDay} />}
                                          checkedIcon={<Brightness7Rounded className={classes.themeTogglerNight} />}
                                          classes={{
                                                track: classes.checkBoxTrack
                                          }}
                                    />
                              </Tooltip>
                        </Toolbar>
                  </AppBar>
            </div>
      );
}
