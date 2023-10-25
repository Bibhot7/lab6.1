import { useState } from "react"
import { TextField, Checkbox, Select, MenuItem, Button } from "@mui/material";
import { FormControl, FormControlLabel, InputLabel } from "@mui/material";
export default function MUIForm() {
const [age, setAge] = useState(10);
const onSubmit = function (e) {
  e.preventDefault();
  console.log('submit', age);
};
return (
<form onSubmit={onSubmit}>
<TextField required id="outlined-required"
label="Greeting" defaultValue="Hello World" />
<FormControlLabel control={<Checkbox defaultChecked />}
label="Uncheck Me" />

<FormControl>
<InputLabel>Age</InputLabel>
<Select value={age} onChange={e => setAge(e.target.value)}>
<MenuItem value={10}>Ten</MenuItem>
<MenuItem value={20}>Twenty</MenuItem>
<MenuItem value={30}>Thirty</MenuItem>
</Select>
</FormControl>
<Button type = "submit" variant="contained">Submit</Button>
</form>
)
}
// ++ Build a MUI version of your LoginForm component