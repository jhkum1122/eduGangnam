/*
import React from "react";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

const Page = ({ isDark, setIsDark }) => {
  console.log("Page : ");
  console.log("isDark : ", isDark, ", setIsDark : ", setIsDark);

  return (
    <div>
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
};

export default Page;
*/
import React from "react";
import Content from "./content";
import Footer from "./footer";
import Header from "./header";

// const Page = (isDark, setIsDark) => {
//     return (
//         <div className="page">
//             <Header isDark={isDark} />
//             <Content isDark={isDark} />
//             <Footer isDark={isDark} setIsDark={setIsDark} />
//         </div>
//     );
// };

// const Page = (isDark, setIsDark) => {
//     const { isDark,setIsDark } = useContext(ThemeContext);

//     return (
//         <div className="page">
//             <Header isDark={isDark} />
//             <Content isDark={isDark} />
//             <Footer isDark={isDark} setIsDark={setIsDark} />
//         </div>
//     );
// };

// 중간 컴포넌트가 많아지면 많아질수록 관리가 어려워진다.
const Page = () => {
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Page;
