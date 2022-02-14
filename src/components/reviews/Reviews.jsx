import './reviews.scss'

export default function Reviews() {

  const data = [
    {
      id:1,
      name:'Tom Durden',
      title:'Senior Developer',
      img:'assets/r1.jpg',
      desc:'The pizza was so delicious and with so many flavor could choose that we even visited the pizza shop twice in the same day!The best pizza we ever had in (City)!!'
    },
    {
      id:2,
      name:'Alex Kalinski',
      title:'Co-Founder of XYZ',
      img:'assets/rr2.jpg',
      desc:'They offer an awesome range of fresh pizzas. I liked dining here. Staff members are always friendly, prices are reasonable and the spot is always kept clean.',
      featured:true,
    },
    {
      id:3,
      name:'Emma Williams',
      title:'CEO ABC',
      img:'assets/r3.jpg',
      desc:'I had the best pizza of my life at that time. Since then I have visited this place numerous times and my opinion about this pizza has still not changed.'
    },
  ]

  return(
      <div className="reviews" id='reviews'>
        <h1>Our Reviews</h1>
        <div className="container">
          {data.map(d=>(
            <div className={d.featured ? 'card featured' : 'card'}>
            <div className="top">
              <img src="assets/rightarrow.png" className='left' alt="" />
              <img src={d.img} className='user' alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
          ))}
        </div>
      </div>
  );
}
