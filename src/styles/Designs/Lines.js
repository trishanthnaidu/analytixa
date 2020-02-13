import { makeStyles, fade } from "@material-ui/core/styles";

export const Styles = makeStyles(theme => ({
      root: {
            marginBottom: 80,
      },
      title: {
            padding: "10px 5px",
            color: theme.text[20],
            fontWeight: 400,
            fontSize: 18
      },
      paperSimpleLine: {
            width: theme.isMobile ? "92vw" : "75vw",
            height: 300,
            padding: 10,
            borderRadius: 5,
            backgroundColor: theme.background[20],

            "& div.highcharts-container": {
                  marginTop: -10
            },

            "& div.highcharts-container svg .highcharts-background": {
                  fill: "transparent",
            },

            "& div.highcharts-container svg path.highcharts-crosshair": {
                  stroke: fade(theme.palette.primary.main, 0.075),
            }
      },
      paperSimpleBar: {
            width: theme.isMobile ? "92vw" : "75vw",
            height: 300,
            padding: 10,
            borderRadius: 5,
            backgroundColor: theme.background[20],

            "& div.highcharts-container": {
                  marginTop: theme.isMobile ? 0 : -10
            },

            "& div.highcharts-container svg .highcharts-background": {
                  fill: "transparent",
            },

            "& div.highcharts-container svg path.highcharts-crosshair": {
                  stroke: fade(theme.palette.primary.main, 0.075),
            }
      },
      paperSimpleArea: {
            width: theme.isMobile ? "92vw" : "75vw",
            height: 300,
            padding: 10,
            borderRadius: 5,
            backgroundColor: theme.background[20],

            "& div.highcharts-container": {
                  marginTop: theme.isMobile ? 0 : -10
            },

            "& div.highcharts-container svg .highcharts-background": {
                  fill: "transparent",
            },

            "& div.highcharts-container svg path.highcharts-crosshair": {
                  stroke: fade(theme.palette.primary.main, 0.075),
            }
      },
      paperSimpleTree: {
            width: theme.isMobile ? "92vw" : "75vw",
            height: theme.isMobile ? 350 : 500,
            padding: 10,
            borderRadius: 5,
            backgroundColor: theme.background[20],

            "& div.highcharts-container": {
                  marginTop: theme.isMobile ? -20 : -10
            },

            "& div.highcharts-container svg .highcharts-background": {
                  fill: "transparent",
            },

            "& div.highcharts-container svg path.highcharts-crosshair": {
                  stroke: theme.text["00"],
            }
      },
      paperSimpleHeat: {
            width: theme.isMobile ? "92vw" : "75vw",
            height: 500,
            padding: 10,
            borderRadius: 5,
            backgroundColor: theme.background[20],

            "& div.highcharts-container": {
                  marginTop: -10
            },

            "& div.highcharts-container svg .highcharts-background": {
                  fill: "transparent",
            },

            "& div.highcharts-container svg path.highcharts-crosshair": {
                  stroke: theme.text["00"],
            }
      },
      paperSimpleTile: {
            width: theme.isMobile ? "92vw" : "50vw",
            height: theme.isMobile ? 275 : 500,
            padding: 7,
            borderRadius: 5,
            backgroundColor: theme.background[20],

            "& div.highcharts-container": {
                  marginTop: -10
            },

            "& div.highcharts-container svg .highcharts-background": {
                  fill: "transparent",
            },

            "& div.highcharts-container svg path.highcharts-crosshair": {
                  stroke: theme.text["00"],
            }
      },
      paperContrastLine: {
            width: theme.isMobile ? "92vw" : "75vw",
            height: 300,
            padding: 10,
            borderRadius: 5,
            backgroundColor: fade(theme.palette.primary.main, 0.7),

            "& div.highcharts-container": {
                  marginTop: -10,
            },

            "& div.highcharts-container svg .highcharts-background": {
                  fill: "transparent",
            },

            "& div.highcharts-container svg .highcharts-grid-line": {
                  stroke: "transparent"
            },
      },
      paperContrastSpline: {
            width: theme.isMobile ? "92vw" : "75vw",
            height: 300,
            padding: 10,
            borderRadius: 5,
            backgroundColor: fade("#368bf4", 0.9),

            "& div.highcharts-container": {
                  marginTop: -10,
            },

            "& div.highcharts-container svg .highcharts-background": {
                  fill: "transparent",
            },

            "& div.highcharts-container svg .highcharts-grid-line": {
                  stroke: "transparent"
            },
      },
      paperContrastArea: {
            width: theme.isMobile ? "92vw" : "75vw",
            height: 300,
            padding: 10,
            borderRadius: 5,
            backgroundColor: fade("#009694", 0.75),

            "& div.highcharts-container": {
                  marginTop: -10,
            },

            "& div.highcharts-container svg .highcharts-background": {
                  fill: "transparent",
            },

            "& div.highcharts-container svg .highcharts-grid-line": {
                  stroke: "transparent"
            },
      },
      paperContrastAreaSpline: {
            width: theme.isMobile ? "92vw" : "75vw",
            height: 300,
            padding: 10,
            borderRadius: 5,
            backgroundColor: fade("#330096", 0.75),

            "& div.highcharts-container": {
                  marginTop: -10,
            },

            "& div.highcharts-container svg .highcharts-background": {
                  fill: "transparent",
            },

            "& div.highcharts-container svg .highcharts-grid-line": {
                  stroke: "transparent"
            },
      },
      verticalBarChart: {
            width: theme.isMobile ? "92vw" : "35vw",
            height: theme.isMobile ? 500 : 600,
            padding: 10,
            borderRadius: 5,
            backgroundColor: theme.background[20],

            "& div.highcharts-container": {
                  marginTop: theme.isMobile ? 0 : -10
            },

            "& div.highcharts-container svg .highcharts-background": {
                  fill: "transparent",
            },

            "& div.highcharts-container svg path.highcharts-crosshair": {
                  stroke: fade(theme.palette.primary.main, 0.075),
            }
      },
      verticalAligned: {
            display: "inline-block"
      },
      verticalAlignedFirst: {
            marginRight: 72,

            [theme.breakpoints.down('md')]: {
                  marginRight: 50
            },

            [theme.breakpoints.down('sm')]: {
                  marginRight: 33,
            }
      },
      paperclusteredBubble: {
            width: theme.isMobile ? "92vw" : "35vw",
            height: theme.isMobile ? 350 : 500,
            padding: 15,
            borderRadius: 5,
            backgroundColor: theme.background[20],

            "& div.highcharts-container": {
                  marginTop: -10
            },

            "& div.highcharts-container svg .highcharts-background": {
                  fill: "transparent",
            },

            "& div.highcharts-container svg path.highcharts-crosshair": {
                  stroke: fade(theme.palette.primary.main, 0.075),
            }
      },
      paperPieChart: {
            width: theme.isMobile ? "92vw" : "35vw",
            height: theme.isMobile ? 375 : 500,
            padding: 15,
            borderRadius: 5,
            backgroundColor: theme.background[20],

            "& div.highcharts-container": {
                  marginTop: -10
            },

            "& div.highcharts-container svg .highcharts-background": {
                  fill: "transparent",
            },

            "& div.highcharts-container svg path.highcharts-crosshair": {
                  stroke: fade(theme.palette.primary.main, 0.075),
            }
      }
}))