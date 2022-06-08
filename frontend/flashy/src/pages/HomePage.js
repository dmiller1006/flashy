import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './HomePage.css'
import * as lindsvg from "https://cdn.jsdelivr.net/npm/lindsvg/dist/lindsvg.esm.min.js";

// lightning codepen
// https://codepen.io/amphiluke/pen/JjGKGmr


const HomePage = () => {
  function render() {
    // L-system parameters
    let lsParams = {
      axiom: "FYX",
      rules: {
        F: "FFFXFX-[FFFXFXY]",
        X: "Y+F+XF",
        Y: "[F+F+F]"
      },
      alpha: 170 * Math.PI / 180,
      theta: 22 * Math.PI / 180,
      iterations: 4,
      step: 1
    };

    // Output SVG parameters
    let svgParams = {
      width: 615,
      height: 755,
      pathAttributes: {
        stroke: "#dedeff",
        "stroke-width": ["4", "2", "1"],
        opacity: ["1", "0.6", "0.5", "0.2"],
        style: "filter: url(#glow)"
      }
    };
    // Get ready-to-render L-system’s SVG code as a string...
    let svgCode = lindsvg.getMultiPathSVGCode(lsParams, svgParams);
    document.body.insertAdjacentHTML("beforeend", `<div id="sky">${svgCode}</div>`);
  }

  let img = new Image();
  img.src = "https://images.unsplash.com/flagged/photo-1562222610-146443386cc4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ";
  if (img.complete) {
    render();
  } else {
    img.addEventListener("load", render);
  }



  return (
    <div className="wrapper">
      <NavBar />
      <h1>welcome to flashy</h1>
      <h3>create flash cards, in a flash</h3>
      <svg width="90vh" height="90vh" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feDropShadow dx="0" dy="0" stdDeviation="3.5" flood-color="skyblue" />
          </filter>
        </defs>
      </svg>
      <div style={{ position: 'absolute', width: '100%', bottom: '0' }}>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage