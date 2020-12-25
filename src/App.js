import "./App.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  // formControl: {
  //   margin: theme.spacing(1),
  //   minWidth: 120,
  // },
  // selectEmpty: {
  //   marginTop: theme.spacing(2),
  // },
}));

function App() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container className="App">
      <header>
        <h1>Exchange Rate</h1>
        <Divider />
      </header>

      <main>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <TextField
              id="standard-number"
              label="Amount"
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl
              variant="filled"
              className={classes.formControl}
              fullWidth
            >
              <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <IconButton>
              <EmojiEmotionsIcon />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="standard-number"
              label="Amount"
              type="number"
              fullWidth
            />
          </Grid>
        </Grid>
      </main>
    </Container>
  );
}

export default App;
