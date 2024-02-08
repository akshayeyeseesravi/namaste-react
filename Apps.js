// const heading=document.createElement("h1");
// heading.innerHTML = "Hello World from Javascript";
// const root=document.getElementById("root");
// root.appendChild(heading);

// <div id=parent>
//     <div id=child>
//         <h1 id=heading></h1>
//         <h2 id="heading2"> </h2>
//     </div>

//     <div id=child2>
//         <h1 id=heading3></h1>
//         <h2 id="heading4"> </h2>
//     </div>

// </div>

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "Hello World from Nested React"
    ),
    React.createElement(
      "h2",
      { id: "heading2" },
      "Hello World from Nested React2"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h1",
      { id: "heading3" },
      "Hello World from Nested React"
    ),
    React.createElement(
      "h2",
      { id: "heading4" },
      "Hello World from Nested React2"
    ),
  ]),
]);

// const heading = React.createElement(
//     "h1",
//     { id:"heading" },
//     "Hello World from React"
//     );
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
