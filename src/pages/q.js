// import React, { useState, useRef } from "react";
// import "./MyComponent.css";

// function MyComponent() {
//     const [isVisible, setIsVisible] = useState(false);
//     const myRef = useRef(null);

//     const handleScroll = () => {
//         if (myRef.current) {
//             const rect = myRef.current.getBoundingClientRect();
//             if (rect.top < window.innerHeight && rect.bottom >= 0) {
//                 setIsVisible(true);
//             } else {
//                 setIsVisible(false);
//             }
//         }
//     };
//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     return (
//         <div>
//             <div ref={myRef}>
//                 <p className={`fade-text ${isVisible ? "visible" : "invisible"}`}>My text</p>
//             </div>
//         </div>
//     );
// }

// export default MyComponent;


// // .fade - text {
// //     opacity: 0;
// //     transition: opacity 1s;
// // }
  
// //   .visible {
// //     opacity: 1;
// // }
