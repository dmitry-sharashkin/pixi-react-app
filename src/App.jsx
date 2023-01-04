// import "./App.css";
// import { Container, Graphics, Sprite, Stage, useTick } from "@inlet/react-pixi";
// import cardTemplate from "./assets/images/Base-minion-premium.webp";
// import React from "react";

// const nft =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUbH8zv4QxkYnF1WdKSB5WyESih0vnL3cNaw&usqp=CAU";
// function App() {
//   const draw = React.useCallback((g) => {
//     g.beginFill(0xffff0b, 0.2);
//     g.drawEllipse(0, 0, 90, 180);
//     g.endFill();
//   }, []);
//   // useTick(() => {});

//   return (
//     <div className="App" style={{ paddingTop: 150 }}>
//       <Stage>
//         <Container x={100} y={100}>
//           <Sprite image={nft} x={10} y={10} width={180} height={180} />
//           <Sprite
//             image={cardTemplate}
//             width={200}
//             height={310}
//             x={0}
//             y={0}
//             filterArea={<Graphics x={0} y={0} draw={draw} />}
//           />
//         </Container>
//       </Stage>
//     </div>
//   );
// }

// export default App;
