import {
  AppBar,
  SvgIcon,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Brightness3, Brightness7 } from "@material-ui/icons";
import ToggleIcon from "material-ui-toggle-icon";
import { useColorSchemeContext } from "../../hooks/ColorSchemeContext";

export function CustomAppBar() {
  const { customClasses, darkState, handleThemeChange } =
    useColorSchemeContext();
  return (
    <AppBar position="absolute" className={customClasses.appBar}>
      <Toolbar className={customClasses.toolbar}>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={customClasses.title}
        >
          <img
            src={require("../../assets/delivery.png").default}
            width="48"
            height="48"
          />
        </Typography>
        <ToggleIcon
          style={{ marginLeft: 20 }}
          on={darkState}
          onIcon={<Brightness3 />}
          offIcon={<Brightness7 />}
        />
        <Switch checked={darkState} onChange={handleThemeChange} />
      </Toolbar>
    </AppBar>
  );
}
