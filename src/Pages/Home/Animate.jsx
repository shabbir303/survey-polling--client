import { useEffect } from "react";
import './text.css';
import Typed from "typed.js";

const Animate = () => {
  useEffect(() => {
    const typed = new Typed(".input", {
      strings: [ "Are my customers actually satisfied?","Will my product be a success or a flop?", "Are my employees happy at work?", "Do people like attending my events?"],
      typeSpeed: 70,
      backSpeed: 60,
      loop: true,
    });

    // Cleanup the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []); // empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <span className="input text-[40px] font-[500] text-cyan-400 w-[800px] mx-auto font-mono"></span>
      
    </div>
  );
};

export default Animate;