import GridLayout from "react-grid-layout";
import React from "react";

const MyFirstGrid: React.FunctionComponent<{}> = ({ children }) => {
  // layout is an array of objects, see the demo for more complete usage
  const layout = [
    { i: "monday", x: 0, y: 0, w: 3, h: 2, minW: 1, maxW: 3 },
    { i: "tuesday", x: 3, y: 0, w: 2, h: 2, minW: 1, maxW: 3 },
    { i: "wednesday", x:6, y: 0, w: 3, h: 2, minW: 1, maxW: 3 },
    { i: "thursday", x: 9, y: 0, w: 3, h: 2, minW: 1, maxW: 3 },
    { i: "friday", x: 12, y: 0, w: 3, h: 2, minW: 1, maxW: 3 },
    { i: "saturday", x: 15, y: 0, w: 3, h: 2, minW: 1, maxW: 3 },
    { i: "sunday", x: 18, y: 0, w: 3, h: 2, minW: 1, maxW: 3 },
  ];
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={21}
      rowHeight={30}
      width={4200}
    >
      <div key="monday">monday</div>
      <div key="tuesday">tuesday</div>
      <div key="wednesday">wednesday</div>
      <div key="thursday">thursday</div>
      <div key="friday">friday</div>
      <div key="saturday">saturday</div>
      <div key="sunday">sunday</div>
    </GridLayout>
  );
};
export default MyFirstGrid;
