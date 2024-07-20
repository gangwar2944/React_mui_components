import React, { useState } from "react"; // Adjust the path as necessary
import MuiSelect from "../components/MuiSelect";

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

const Home = () => {
  // const [country, setCountry] = useState<string[]>([]);

  // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   setCountry(event.target.value as string[]);
  // };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {/* <MuiSelect
        dataList={countryListData}
        selectedValues={country}
        handleChange={handleChange}
        label="Select Country"
      /> */}
    </div>
  );
};

export default Home;
