import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

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