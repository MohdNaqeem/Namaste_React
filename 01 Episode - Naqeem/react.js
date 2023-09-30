// logic for react

const reactheading = React.createElement("h1", { id: "heading" }, "Hello world from reactjs");
const reactroot = ReactDOM.createRoot(document.getElementById("reactroot"));
reactroot.render(reactheading);


// print Hello world using react for rivise

const heading2 = React.createElement("h2", { id: "heading2" }, "Hello world from reacjs for rivise");
const myroot = ReactDOM.createRoot(document.getElementById("myroots"));

myroot.render(heading2);


// Nested  elemenet

const parent = React.createElement(

  "div", { id: "parent" },
  React.createElement("div", { id: "child" },
    React.createElement("h1", {}, "I am an h1 tag"
    )));

const nestroot = ReactDOM.createRoot(document.getElementById("nestroot"))
nestroot.render(parent)

// Practice of nested element a

const test = React.createElement(
  "div", { id: "txt1" },
  React.createElement("div", { id: "txt2" },
    [React.createElement("h1", {}, "children 1"), React.createElement("h1", {}, "children 2")]
  ));

const nestpractice = ReactDOM.createRoot(document.getElementById("nestpractice"))
nestpractice.render(test)

