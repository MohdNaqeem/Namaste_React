import React from "react";
import ReactDOM from "react-dom/client";

// Logic of react

const heading = React.createElement("h1", { id: "demo" }, "Hello world from React")
const result = ReactDOM.createRoot(document.getElementById("reactroot"))
result.render(heading)

// JSX
const jsxHeading = <h1>Hello React using JSX</h1>;
const ouput = ReactDOM.createRoot(document.getElementById("jsx"))
ouput.render(jsxHeading)

// multiline of JSX
const mulitJSX = (<h1>
    It is a multiple line of JSX
</h1>
);
const root = ReactDOM.createRoot(document.getElementById("multiJSX"));
root.render(mulitJSX)

// React functional components
const HeadingComponents = () => {
    return <h1>Hello React Functional Components</h1>
}
const CompResult = ReactDOM.createRoot(document.getElementById("components"))
CompResult.render(<HeadingComponents/>)

// Components Composition 
const CompositionHeading = () => {
    <HeadingComponents/>
    return <div id="container">
       <h1> Hello React Composition Heading</h1>
       <HeadingComponents/>
    </div>
}
const CompositionResult = ReactDOM.createRoot(document.getElementById("Composition"))
CompositionResult.render(<CompositionHeading/>)