import {MathJaxContext, MathJax as Math} from "better-react-mathjax";

export const MathJax = () => {
    return (
        <MathJaxContext>
            <Math>{"\\(\\frac{10}{4x} \\approx 2^{12}\\)"}</Math>
        </MathJaxContext>
    )
}