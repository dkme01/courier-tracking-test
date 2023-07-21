import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@material-ui/core";
import {
  ChevronLeft,
  ChevronRight,
  Inbox,
  MailOutline,
} from "@material-ui/icons";
import { useStyles } from "./styles";

function CustomDrawer({ handleDrawerClose, open }: any) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <Inbox /> : <MailOutline />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <Inbox /> : <MailOutline />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
export default CustomDrawer;
