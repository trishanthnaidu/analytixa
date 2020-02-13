import React, { useEffect, useReducer, useState, Fragment } from 'react';
import { AppHeader } from "./AppHeader";
import { AppDrawer } from "./AppDrawer";
import { Playground } from './Playground';
import { Styles } from "../styles/Master";
import { AppTheme } from '../theme/App';
import CssBaseline from "@material-ui/core/CssBaseline";
import { OopsSomethingWentWrong, windowErrorHandler } from './ErrorPage';
import { Route, Link, BrowserRouter as Router, withRouter } from 'react-router-dom';
import {
      DashboardRounded,
      SubjectRounded,
      NotificationImportantRounded,
      SettingsEthernetRounded,
      CategoryRounded,
      AccountTreeRounded,
      GroupRounded,
      TheatersRounded,
      NaturePeopleRounded,
      TimelineRounded,
      BlurLinearRounded,
      AddRounded as AddIconRounded,
      DoneRounded,
      EditRounded,
      RemoveRounded,
      AttachMoneyRounded,
      ShowChartRounded,
      BarChartRounded,
      FilterHdrRounded,
      EqualizerRounded,
      BubbleChartRounded,
      ScatterPlotRounded,
      BlurOnRounded,
      PieChartRounded,
      DonutLargeRounded,
      MapRounded,
      ViewCompactRounded
} from '@material-ui/icons';

const defaultTheme = "light";

export const Master = ({ filter }) => {
      const initialState = {
            didSomethingWentWrong: false,
            errorDetails: "",
            route: { title: "Studio" },
            activeSection: "Lines",
            sections: {
                  Studio: {
                        Categorial: ['Lines', 'Bars', 'Area'],
                        Coordinate: ['Scatter Plot', 'Bubble Plot'],
                        Statistical: ['Pie', 'Donut'],
                        Spacial: ['Heat Maps', 'World Maps']
                  },
                  Insights: {
                        Collabrate: ['Dashboard'],
                        Audience: ['Demographics', 'Geo'],
                        Analysis: ['Predictive', 'Performance', ''],
                  }
            },
            iconSvgMappings: {
                  Studio: {
                        "Lines": ShowChartRounded,
                        "Bars": BarChartRounded,
                        "Area": FilterHdrRounded,
                        "Scatter Plot": ScatterPlotRounded,
                        "Bubble Plot": BubbleChartRounded,
                        "Pie": PieChartRounded,
                        "Donut": DonutLargeRounded,
                        "Heat Maps": ViewCompactRounded,
                        "World Maps": MapRounded,
                        "Section 9": BlurLinearRounded,
                        "Section 10": AttachMoneyRounded
                  },
                  Insights: {

                  }
            }
      }
      const [theme, setTheme] = useState(defaultTheme);
      const [menu, setMenu] = useReducer(
            (state, newState) => ({ ...state, ...newState }),
            false
      );
      const [state, setState] = useReducer(
            (state, newState) => ({ ...state, ...newState }),
            initialState
      );
      const [app, setApps] = useState({

      });
      const onErrorOccured = (err, stack) => {
            setState({ ...state, didSomethingWentWrong: true, errorDetails: err });
      }
      const onReloadPage = () => {
            setState({ ...state, didSomethingWentWrong: false });
      }
      const onListItemClicked = activeSection => {
            setState({ ...state, activeSection })
      }
      const Home = () => <MasterComponent
            menu={menu}
            setMenu={setMenu}
            setTheme={setTheme}
            onReloadPage={onReloadPage}
            onListItemClicked={onListItemClicked}
            {...state}
      />
      const Designs = withRouter(() => <DesignsComponent
            setTheme={setTheme}
            onReloadPage={onReloadPage}
            {...state}
      />)
      const Insights = withRouter(() => <InsightComponent
            setTheme={setTheme}
            onReloadPage={onReloadPage}
            {...state}
      />)

      useEffect(() => {
            windowErrorHandler(onErrorOccured);
      }, []);

      return (
            <AppTheme theme={theme} forComponent="APP">
                  <MasterComponent
                        menu={menu}
                        setMenu={setMenu}
                        setTheme={setTheme}
                        onReloadPage={onReloadPage}
                        onListItemClicked={onListItemClicked}
                        {...state}
                  />
                  {/* <Router>
                        <Route path="/" component={Home} />
                        <Route path="/designs" component={Designs} />
                        <Route path="/insights" component={Insights} />
                  </Router> */}
            </AppTheme>
      )
}

const MasterComponent = props => {
      const classes = Styles();
      return (
            <div className={classes.root} >
                  <CssBaseline />
                  <AppHeader {...props} />
                  {
                        !props.didSomethingWentWrong ?
                              <Fragment>
                                    <AppDrawer {...props} />
                                    <Playground {...props} />
                              </Fragment>
                              :
                              <OopsSomethingWentWrong onReload={props.onReloadPage} details={props.errorDetails} />
                  }
            </div>
      )
}

const DesignsComponent = props => {
      const classes = Styles();
      return (
            <div className={classes.root} >
                  <CssBaseline />
                  <AppHeader {...props} />
                  {
                        !props.didSomethingWentWrong ?
                              <Fragment>
                                    <AppDrawer {...props} />
                                    <Playground {...props} />
                              </Fragment>
                              :
                              <OopsSomethingWentWrong onReload={props.onReloadPage} details={props.errorDetails} />
                  }
            </div>
      )
}

const InsightComponent = props => {
      const classes = Styles();
      return (
            <div className={classes.root} >
                  <CssBaseline />
                  <AppHeader {...props} />
                  {
                        !props.didSomethingWentWrong ?
                              <Fragment>
                                    <AppDrawer {...props} />
                                    <Playground {...props} />
                              </Fragment>
                              :
                              <OopsSomethingWentWrong onReload={props.onReloadPage} details={props.errorDetails} />
                  }
            </div>
      )
}