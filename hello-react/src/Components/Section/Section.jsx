import React from 'react'
import img1 from '../../images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d7061 (1).png';
import img2 from "../../images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d7061 (2).png";
import img3 from "../../images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d7061 (3).png";
import img4 from "../../images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d7061 (4).png";
import "./Section.css"

function Section() {
  return (
    <section>
      <div>
        <img src={img1} alt="" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div>
        <img src={img2} alt="" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div>
        <img src={img3} alt="" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div>
        <img src={img4} alt="" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers</p>
      </div>
    </section>
  );
}

export default Section