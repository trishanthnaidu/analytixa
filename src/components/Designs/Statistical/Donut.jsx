import React, { Fragment } from 'react';
import {
      Typography,
      Paper,
      useTheme,
      fade
} from '../../Core';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsPatternFill from 'highcharts-pattern-fill';
import HighchartsMore from 'highcharts-more';
import HighchartBoost from 'highcharts/modules/boost';
import HighchartVariablePie from 'highcharts/modules/variable-pie';
import { Styles } from '../../../styles/Designs/Lines';

HighchartBoost(Highcharts);
HighchartVariablePie(Highcharts);

export const Donut = () => (
      <Fragment>
            <SimpleDonutChart />
            <MonochromeDonutChart />
            <GradientDonutChart />
            <VariableChartDonutChart />
            <SemiCircleChart />
      </Fragment>
)

const SimpleDonutChart = () => {
      const classes = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "pie",
                  height: "100%"
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  startOnTick: true,
                  endOnTick: true,
                  showLastLabel: true,
            },
            tooltip: {
                  pointFormat: '<span>{series.name}</span>: <b>{point.percentage:.1f} %</b><br/>'
            },
            series: [
                  {
                        name: "Turnover",
                        minPointSize: 10,
                        innerSize: '50%',
                        zMin: 0,
                        data: [{
                              name: "Analytixa",
                              y: 40,
                        }, {
                              name: "Apple",
                              y: 15,
                        }, {
                              name: "Google",
                              y: 10,
                        }, {
                              name: "Amazon",
                              y: 15,
                        }, {
                              name: "Microsoft",
                              y: 5,
                        }, {
                              name: "Adobe",
                              y: 10,
                        }, {
                              name: "Disney",
                              y: 5
                        }],
                        marker: {
                              enabled: false
                        },
                  }
            ],
      }
      return (
            <div className={`${classes.root} ${classes.verticalAligned} ${classes.verticalAlignedFirst}`}>
                  <Typography className={classes.title} variant="h6" color="inherit">
                        Simple Donut Chart
                        </Typography>
                  <Paper className={classes.paperPieChart}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const MonochromeDonutChart = () => {
      const classes = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "pie",
                  height: "100%"
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  startOnTick: true,
                  endOnTick: true,
                  showLastLabel: true,
            },
            tooltip: {
                  pointFormat: '<span>{series.name}</span>: <b>{point.percentage:.1f} %</b><br/>'
            },
            series: [
                  {
                        name: "Turnover",
                        minPointSize: 10,
                        innerSize: '50%',
                        zMin: 0,
                        data: [{
                              name: "Analytixa",
                              y: 40,
                              color: Highcharts.color(theme.chartConfig.colors[0]).brighten(-0.42).get('rgb')
                        }, {
                              name: "Apple",
                              y: 15,
                              color: Highcharts.color(theme.chartConfig.colors[0]).brighten(-0.28).get('rgb')
                        }, {
                              name: "Google",
                              y: 10,
                              color: Highcharts.color(theme.chartConfig.colors[0]).brighten(-0.14).get('rgb')
                        }, {
                              name: "Amazon",
                              y: 15,
                              color: Highcharts.color(theme.chartConfig.colors[0]).brighten(0).get('rgb')
                        }, {
                              name: "Microsoft",
                              y: 5,
                              color: Highcharts.color(theme.chartConfig.colors[0]).brighten(0.14).get('rgb')
                        }, {
                              name: "Adobe",
                              y: 10,
                              color: Highcharts.color(theme.chartConfig.colors[0]).brighten(0.28).get('rgb')
                        }, {
                              name: "Disney",
                              y: 5,
                              color: Highcharts.color(theme.chartConfig.colors[0]).brighten(0.42).get('rgb')
                        }],
                        marker: {
                              enabled: false
                        },
                  }
            ],
      }
      return (
            <div className={`${classes.root} ${classes.verticalAligned}`}>
                  <Typography className={classes.title} variant="h6" color="inherit">
                        Monochromatic Donut Chart
                        </Typography>
                  <Paper className={classes.paperPieChart}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const GradientDonutChart = () => {
      const classes = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "pie",
                  height: "100%"
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  startOnTick: true,
                  endOnTick: true,
                  showLastLabel: true,
            },
            tooltip: {
                  pointFormat: '<span>{series.name}</span>: <b>{point.percentage:.1f} %</b><br/>'
            },
            series: [
                  {
                        name: "Turnover",
                        minPointSize: 10,
                        innerSize: '50%',
                        zMin: 0,
                        data: [{
                              name: "Analytixa",
                              y: 40,
                              color: {
                                    radialGradient: { cx: 0.5, cy: 0.5, r: 0.5 },
                                    stops: [
                                          [0, theme.chartConfig.colors[0]],
                                          [1, Highcharts.color(theme.chartConfig.colors[0]).brighten(-0.3).get('rgb')],
                                    ]
                              },
                        }, {
                              name: "Apple",
                              y: 15,
                              color: {
                                    radialGradient: { cx: 0.5, cy: 0.5, r: 0.5 },
                                    stops: [
                                          [0, theme.chartConfig.colors[1]],
                                          [1, Highcharts.color(theme.chartConfig.colors[1]).brighten(-0.3).get('rgb')],
                                    ]
                              },
                        }, {
                              name: "Google",
                              y: 10,
                              color: {
                                    radialGradient: { cx: 0.5, cy: 0.5, r: 0.5 },
                                    stops: [
                                          [0, theme.chartConfig.colors[2]],
                                          [1, Highcharts.color(theme.chartConfig.colors[2]).brighten(-0.3).get('rgb')],
                                    ]
                              },
                        }, {
                              name: "Amazon",
                              y: 15,
                              color: {
                                    radialGradient: { cx: 0.5, cy: 0.5, r: 0.5 },
                                    stops: [
                                          [0, theme.chartConfig.colors[3]],
                                          [1, Highcharts.color(theme.chartConfig.colors[3]).brighten(-0.3).get('rgb')],
                                    ]
                              },
                        }, {
                              name: "Microsoft",
                              y: 5,
                              color: {
                                    radialGradient: { cx: 0.5, cy: 0.5, r: 0.5 },
                                    stops: [
                                          [0, theme.chartConfig.colors[4]],
                                          [1, Highcharts.color(theme.chartConfig.colors[4]).brighten(-0.3).get('rgb')],
                                    ]
                              },
                        }, {
                              name: "Adobe",
                              y: 10,
                              color: {
                                    radialGradient: { cx: 0.5, cy: 0.5, r: 0.5 },
                                    stops: [
                                          [0, theme.chartConfig.colors[5]],
                                          [1, Highcharts.color(theme.chartConfig.colors[5]).brighten(-0.3).get('rgb')],
                                    ]
                              },
                        }, {
                              name: "Disney",
                              y: 5,
                              color: {
                                    radialGradient: { cx: 0.5, cy: 0.5, r: 0.5 },
                                    stops: [
                                          [0, theme.chartConfig.colors[6]],
                                          [1, Highcharts.color(theme.chartConfig.colors[6]).brighten(-0.3).get('rgb')],
                                    ]
                              },
                        }],
                        marker: {
                              enabled: false
                        },
                  }
            ],
      }
      return (
            <div className={`${classes.root} ${classes.verticalAligned} ${classes.verticalAlignedFirst}`}>
                  <Typography className={classes.title} variant="h6" color="inherit">
                        Gradient Donut Chart
                        </Typography>
                  <Paper className={classes.paperPieChart}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const VariableChartDonutChart = () => {
      const classes = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "variablepie",
                  height: "100%"
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  startOnTick: true,
                  endOnTick: true,
                  showLastLabel: true,
            },
            tooltip: {
                  pointFormat: '<span>{series.name}</span>: <b>{point.percentage:.1f} %</b><br/>'
            },
            series: [
                  {
                        name: "Turnover",
                        minPointSize: 10,
                        innerSize: '30%',
                        zMin: 0,
                        data: [{
                              name: "Analytixa",
                              y: 40,
                              z: 30
                        }, {
                              name: "Apple",
                              y: 15,
                              z: 20
                        }, {
                              name: "Amazon",
                              y: 15,
                              z: 25
                        }, {
                              name: "Google",
                              y: 10,
                              z: 30
                        }, {
                              name: "Microsoft",
                              y: 5,
                              z: 35
                        }, {
                              name: "Adobe",
                              y: 10,
                              z: 40
                        }, {
                              name: "Disney",
                              y: 5,
                              z: 10
                        }],
                        marker: {
                              enabled: false
                        },
                  }
            ],
      }
      return (
            <div className={`${classes.root} ${classes.verticalAligned}`}>
                  <Typography className={classes.title} variant="h6" color="inherit">
                        Variable Size Donut Chart
                        </Typography>
                  <Paper className={classes.paperPieChart}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}

const SemiCircleChart = () => {
      const classes = Styles();
      const theme = useTheme();
      const chartConfig = {
            ...theme.chartConfig,
            chart: {
                  ...theme.chartConfig.chart,
                  type: "pie",
                  height: "100%"
            },
            xAxis: {
                  ...theme.chartConfig.xAxis,
                  startOnTick: true,
                  endOnTick: true,
                  showLastLabel: true,
            },
            plotOptions: {
                  pie: {
                        ...theme.chartConfig.plotOptions.pie,
                        startAngle: -90,
                        endAngle: 90,
                        center: ['50%', '75%'],
                        size: '110%'
                  }
            },
            tooltip: {
                  pointFormat: '<span>{series.name}</span>: <b>{point.percentage:.1f} %</b><br/>'
            },
            series: [
                  {
                        name: "Turnover",
                        minPointSize: 10,
                        innerSize: '50%',
                        zMin: 0,
                        data: [{
                              name: "Analytixa",
                              y: 40,
                        }, {
                              name: "Apple",
                              y: 15,
                        }, {
                              name: "Google",
                              y: 10,
                        }, {
                              name: "Amazon",
                              y: 15,
                        }, {
                              name: "Microsoft",
                              y: 5,
                        }, {
                              name: "Adobe",
                              y: 10,
                        }, {
                              name: "Disney",
                              y: 5
                        }],
                        marker: {
                              enabled: false
                        },
                  }
            ],
      }
      return (
            <div className={`${classes.root} ${classes.verticalAligned} ${classes.verticalAlignedFirst}`}>
                  <Typography className={classes.title} variant="h6" color="inherit">
                        Rainbow Chart
                        </Typography>
                  <Paper className={classes.paperPieChart}>
                        <HighchartsReact
                              highcharts={Highcharts}
                              options={chartConfig}>
                        </HighchartsReact>
                  </Paper>
            </div>
      )
}