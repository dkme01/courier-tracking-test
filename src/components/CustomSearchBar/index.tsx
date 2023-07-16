import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
import { useEffect, useState } from "react";
import { useSearchBarStyles } from "./styles";

interface CustomSearchBarProps {
  handleSearch: (textSearch: string) => void;
}

export function CustomSearchBar({ handleSearch }: CustomSearchBarProps) {
  const customClasses = useSearchBarStyles();
  const [searchString, setSearchString] = useState<string>("");

  function handleSearchTextChange(value: string) {
    setSearchString(value);
  }

  function onSearch() {
    handleSearch(searchString);
  }

  return (
    <Paper component="form" elevation={0} className={customClasses.root}>
      <TextField
        onChange={(e) => handleSearchTextChange(e.target.value)}
        placeholder="Type the tracking code here"
        variant="outlined"
        label="Tracking code"
        fullWidth
        value={searchString}
        onKeyPress={(event) => {
          if (event.key.toUpperCase() === "ENTER") {
            event.preventDefault();
            onSearch();
          }
        }}
      />
      <IconButton
        type="submit"
        className={customClasses.iconButton}
        aria-label="search"
        onClick={(e) => {
          e.preventDefault();
          onSearch();
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
}
