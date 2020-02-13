import React, { useState, Fragment } from 'react';
import logo from '../assets/images/logo.svg';
import Store, { StoreManager } from '@rootzjs/store';
import {
      Drawer,
      Button,
      List,
      ListSubheader,
      ListItem,
      Divider,
      ListItemIcon,
      ListItemText,
      InputBase,
      IconButton,
      DashboardRounded,
      useTheme,
      SwipeableDrawer,
      Typography
} from './Core';
import { Styles } from "../styles/AppDrawer";

const AppDrawerComponent = ({ props, state }) => {
      const { sections, route, iconSvgMappings, activeSection, onListItemClicked } = props;
      const { isMenuOpen } = state;
      const classes = Styles();
      const theme = useTheme();
      const generateSections = () => {
            const keys = Object.keys(sections[route.title]);
            return keys.map(key => {
                  const component = [];
                  component.push(
                        <Fragment>
                              <Divider className={classes.divider} />
                              <List>
                                    <ListSubheader component="div" className={classes.listSubHeader}>
                                          {key}
                                    </ListSubheader>
                                    {sections[route.title][key].map((text, index) => {
                                          const MappedIcons = iconSvgMappings[route.title][text];
                                          return (
                                                <ListItem button className={`${classes.listItem} ${activeSection === text && classes.activeSection}`} onClick={() => onSectionClick(text)}>
                                                      <ListItemIcon className={classes.icons}>
                                                            <MappedIcons className={classes.iconSvg} />
                                                      </ListItemIcon>
                                                      <ListItemText primary={text} className={classes.sectionText} />
                                                </ListItem>
                                          )
                                    })}
                              </List>
                        </Fragment>
                  )
                  return component;
            })
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
      const onSectionClick = item => {
            onMenuClose();
            onListItemClicked(item);
      }
      const sideList = side => (
            <div
                  className={classes.list}
                  role="presentation"
            >
                  <div className={classes.logoSectionDrawer}>
                        <div className={classes.logoContainer}>
                              <IconButton className={classes.iconContainer} disabled>
                                    <img className={classes.logo} src={logo} alt="logo" />
                              </IconButton>
                        </div>
                        <Typography className={classes.title} variant="h6" color="inherit">
                              Analytixa
                        </Typography>
                  </div>
                  <Divider className={classes.dividerMain} />
                  <List>
                        <ListItem button className={`${classes.listItem} ${activeSection === "Dashboard" && classes.activeSection}`} onClick={() => onSectionClick("Dashboard")}>
                              <ListItemIcon className={classes.icons}>
                                    <DashboardRounded />
                              </ListItemIcon>
                              <ListItemText primary="Dashboard" className={classes.sectionText} />
                        </ListItem>
                  </List>
                  {generateSections()}
            </div>
      )
      return (
            <div className={classes.root}>
                  {
                        theme.isMobile ?
                              <SwipeableDrawer
                                    className={classes.drawer}
                                    classes={{ paper: classes.drawerPaperMobile }}
                                    open={isMenuOpen}
                                    onOpen={onMenuOpen}
                                    onClose={onMenuClose}
                              >
                                    {sideList('left')}
                              </SwipeableDrawer>
                              :
                              <Drawer
                                    className={classes.drawer}
                                    variant="permanent"
                                    classes={{ paper: classes.drawerPaper }}
                              >

                                    <div className={classes.toolbar} />
                                    <List>
                                          <ListItem button className={`${classes.listItem} ${activeSection === "Dashboard" && classes.activeSection}`} onClick={onSectionClick}>
                                                <ListItemIcon className={classes.icons}>
                                                      <DashboardRounded />
                                                </ListItemIcon>
                                                <ListItemText primary="Dashboard" className={classes.sectionText} />
                                          </ListItem>
                                    </List>
                                    {generateSections()}
                              </Drawer>
                  }
            </div>
      );
}

export const AppDrawer = Store.add(AppDrawerComponent, { isMenuOpen: false }, "AppDrawer");