import {
      PRIMARY_COLOR,
      SECONDARY_COLOR,
      LIGHT_THEME_PROPS,
} from './Master';

export const lightThemeStyles = {
      theme: LIGHT_THEME_PROPS.TYPE,
      palette: {
            primary: {
                  main: PRIMARY_COLOR
            },
            secondary: {
                  main: SECONDARY_COLOR
            }
      },
      text: LIGHT_THEME_PROPS.TEXT,
      background: LIGHT_THEME_PROPS.BACKGROUND,
      reverse: {
            background: LIGHT_THEME_PROPS.REVERSE.BACKGROUND,
      },
      shadow: LIGHT_THEME_PROPS.SHADOW
}