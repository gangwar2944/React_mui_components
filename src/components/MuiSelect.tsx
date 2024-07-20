import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState<string[]>([]);
  console.log(country);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountry(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="select country"
        variant="standard"
        value={country}
        select
        fullWidth
        onChange={handleChange}
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="IN"> India </MenuItem>
        <MenuItem value="US"> Usa </MenuItem>
        <MenuItem value="AUS"> Australia </MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;


// import { Box, Checkbox, MenuItem, TextField, ListItemText } from "@mui/material";
// import React, { useState } from "react";

// interface Names {
//   id: string;
//   name: string;
// }

// const countryListData: Names[] = [
//   {
//     id: "1",
//     name: "India",
//   },
//   {
//     id: "2",
//     name: "Australia",
//   },
//   {
//     id: "3",
//     name: "Canada",
//   },
//   {
//     id: "4",
//     name: "China",
//   },
//   {
//     id: "5",
//     name: "America",
//   },
// ];

// const MuiSelect = () => {
//   const [country, setCountry] = useState<string[]>([]);
  
//   const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
//     setCountry(event.target.value as string[]);
//   };

//   return (
//     <Box width="250px">
//       <TextField
//         label="Select country"
//         variant="standard"
//         value={country}
//         select
//         fullWidth
//         onChange={handleChange}
//         SelectProps={{
//           multiple: true,
//           renderValue: (selected) => (selected as string[]).map(id => {
//             const country = countryListData.find(country => country.id === id);
//             return country ? country.name : '';
//           }).join(', '),
//         }}
//       >
//         {countryListData.map((item) => (
//           <MenuItem key={item.id} value={item.id}>
//             <Checkbox checked={country.indexOf(item.id) > -1} />
//             <ListItemText primary={item.name} />
//           </MenuItem>
//         ))}
//       </TextField>
//     </Box>
//   );
// };

// export default MuiSelect;
