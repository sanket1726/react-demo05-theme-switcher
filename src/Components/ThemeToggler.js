import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

// const ThemeToggler = () => {
//   const [themeMode, setThemeMode] = useContext(ThemeContext);

//   return (
//     // <div
//     //   onClick={() => {
//     //     setThemeMode(themeMode === "light" ? "dark" : "light");
//     //   }}
//     // >

//       // <div
//       // onClick={() => {
//       //   if(themeMode==="contrast"){
//       //     setThemeMode("dark")
//       //   } else if(themeMode==="dark"){
//       //     setThemeMode("light")
//       //   } else {
//       //     setThemeMode("contrast")
//       //   }
//       // }}>

//       <div
//       onClick={() => {
//         setThemeMode(themeMode==="contrast" ? "dark" : themeMode==="dark" ? "light" : "contrast")
//       }}>

//       <span>{themeMode === "contrast" ? "Lights Are Awesome" : themeMode==="dark" ? "Lights Off" : "Lights ON"}</span>

//     </div>
//   );
// };

// export default ThemeToggler;


// My Try

const ThemeToggler = () => {

  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
    onClick={ () => {
      setThemeMode(themeMode==="contrast" ? "dark" : themeMode==="dark" ? "light" : "contrast")
    }}>

    <span>{themeMode==="contrast" ? "Awesome Lights" : themeMode==="dark" ? "Lights OFF" : "Lights On"} </span>
    </div>
  )
}

export default ThemeToggler;