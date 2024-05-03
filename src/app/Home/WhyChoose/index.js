import SectionHead from "@/components/SectionHead";


export default function WhyChoose(props) {
  const {data , values} = props;
  function chunkArray(array, chunkSize) {
    let index = 0;
    const arrayLength = array?.length;
    let tempArray = [];

    for (index = 0; index < arrayLength; index += chunkSize) {
      let chunk = array.slice(index, index + chunkSize);
      tempArray.push(chunk);
    }

    return tempArray;
  }

  const chunks = chunkArray(values?.results, 3);
  // console.log(data);
  // console.log(values);
  return (
    <>
      <section className="why-choose section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionHead
                title="A WHO-GMP Certified Pharceutical Company"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="choose-left">
                <h3>Who We Are</h3>

                <p>
                  <span style={{ fontSize: "20px", fontWeight: '600' }}>Mission</span><br />
                  {data?.mission}
                </p>
                <p>
                  <span style={{ fontSize: "20px", fontWeight: '600' }}>Vision</span><br />
                  {data?.vision}
                </p>
                <div className="row">
                  <span style={{ fontSize: "19px", fontWeight: '600', marginBottom: "10px" }}>Our Values</span>
                  {chunks && chunks.map((chunk, index) => (
                    <div className="col-lg-6" key={index}>
                      <ul className="list">
                        {chunk.map((value, index) => (
                          <li key={index}>
                            <i className="fa fa-caret-right"></i>{value?.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="choose-right">
                <div className="video-image">
                  {/* <div className="promo-video">
                    <div className="waves-block">
                      <div className="waves wave-1"></div>
                      <div className="waves wave-2"></div>
                      <div className="waves wave-3"></div>
                    </div>
                  </div> */}
                  {/* <Video /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
