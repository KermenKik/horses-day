import { useEffect, useState } from 'react';
import cubicScrollTo from "cubic-scroll-to";

import './Welcome.scss';

export const Welcome = () => {
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    setInitial(false);
    if (window.pageYOffset === 0) {
      setTimeout(() => {
        const option = {
          // cubic: [0.75, 0.16, 0.27, 0.88],
          totalTime: 2000,
        };
        const cubic = new cubicScrollTo(option);
        const viewHeight = document.documentElement.clientHeight;
        cubic.scrollTo(0, viewHeight);
      }, 4000);
    }
  }, [])

  return (
    <section className="Welcome">
      <h1 className='Welcome__title'>I-go-go Tigidik-Tigidik Chuh-Chuh Day</h1>
      <img className={initial ? 'ship initial' : 'ship'} src="Ship.png" alt="ship" />
      <img className={initial ? 'horse initial' : 'horse'} src="Horse.png" alt="horse" />
    </section>
  )
}

