import { AppBar, Button, Toolbar } from "@material-ui/core";
import { LocalShipping } from "@material-ui/icons";
import { useColorSchemeContext } from "../../hooks/ColorSchemeContext";
import { footers } from "../../utils/footers";

export function CustomAppBar() {
  const { customClasses, handleThemeChange } = useColorSchemeContext();

  return (
    <AppBar position="absolute" className={customClasses.appBar}>
      <Toolbar className={customClasses.toolbar}>
        <div>
          <LocalShipping style={{ fontSize: "3em", color: "#EECB57" }} />
          {/* <img
            src={require("../../assets/delivery.png").default}
            width="48"
            height="48"
          /> */}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "32vw",
          }}
        >
          {footers.map((footer) => (
            <Button
              style={{ color: "#EECB57", fontWeight: 600 }}
              fullWidth
              key={footer.title}
              onClick={() => {}}
            >
              {footer.title}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}
