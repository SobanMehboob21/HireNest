import { useEffect, useState, useRef } from "react";
import Good_img from "../assets/img_good.webp";
import bannar from "../assets/banner.webp";
import "../styles/Details.css";

type CounterProps = {
  target: number;
  suffix?: string;
};

function Counter({ target, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  // 1. Detect when the element enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once it's visible to prevent restarting on scroll up
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Starts when 10% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. Start the timer only when isVisible is true
  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const duration = 4000;
    const frameRate = 100;
    const totalFrames = duration / frameRate;
    const step = Math.ceil(target / totalFrames);

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return (
    <div className="total" ref={counterRef}>
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export const Details = () => {
  return (
    <div className="details">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="Good_img">
              <img src={Good_img} alt="Good Life" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="detail_content">
              <div className="headingg">
                Good Life Begins With A Good Company
              </div>
              <div className="desc">
                Ultricies purus dolor viverra mi laoreet at cursus justo.
                Ultrices purus diam egestas amet faucibus tempor blandit.
              </div>
              <div className="buttons">
                <button className="d_btn">Search Job</button>
                <a href="#learn">Learn More</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="total_numbers">
              <Counter target={12} suffix="k+" />
              <div className="total_heading">Clients worldwide</div>
              <div className="total_decs">
                At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="total_numbers">
              <Counter target={20} suffix="k+" />
              <div className="total_heading">Active resume</div>
              <div className="total_decs">
                At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="total_numbers">
              <Counter target={18} suffix="K+" />
              <div className="total_heading">Compnies</div>
              <div className="total_decs">
                At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="bannar">
              <img src={bannar} />
              <div className="bannar_content">
                <div className="headingg">
                  Create A Better Future For Yourself
                </div>
                <div className="desc">
                  At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
                  Blandit a massa elementum id scelerisque rhoncus
                </div>
                <button className="d_btn">Search Job</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
