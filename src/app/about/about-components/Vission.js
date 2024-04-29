
export default function Vission(props) {
  const { data } = props;
const vissionData=[
    {
      id: "item1",
      icon: "icofont-tick-mark",
      title: "Our Mission",
      desc: data?.mission,
    },
    {
      id: "item3",
      icon: "icofont-tick-mark",
      title: "Our Vision",
      desc: data?.vision,
    },
  ];

  return (
    <>
      <section className="our-vision-area ptb-100 pt-0">
        <div className="container">
          <div className="row">
            {vissionData.map((items) => (
              <div className="col-lg-6 col-md-6 col-12" key={items.id}>
                <div className="single-vision-box">
                  <div className="icon">
                    <i className={items.icon}></i>
                  </div>
                  <h3>{items.title}</h3>
                  <p>{items.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
