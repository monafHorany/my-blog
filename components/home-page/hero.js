import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="" alt="An Image Showing Monaf Horany" width={} height={} />
      </div>
      <h1>Hi, I'm Monaf</h1>
      <p>
        Iblog about web development - especially frontend framework like Angular
        or React
      </p>
    </section>
  );
}

export default Hero;
