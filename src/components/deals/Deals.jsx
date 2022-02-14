import { useState } from "react";
import "./deals.scss";

export default function Deals() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      img: "assets/combo1.jpg",
      title: "Pizza Vizza",
      desc: "Get 3 pizzas, burger, fries, salad, drinks @499/-",
    },
    {
      id: "2",
      img: "assets/combo2.jpg",
      title: "Pasta Sasta",
      desc: "Get 3 pastas, tomato, creamy, tangy, @399/-",
    },
    {
      id: "3",
      img: "assets/combo3.jpg",
      title: "Drinks Winks",
      desc: "Get 2 drinks, cranberry and raspberyy, @199/-",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="deals" id="deals">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.img} alt="" />
                  </div>
                </div>
              </div>
              <div className="right">
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
      <h1>OUR COMBO DEALS</h1>
    </div>
  );
}
