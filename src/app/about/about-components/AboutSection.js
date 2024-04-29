export default function AboutSection(props) {
  const { data } = props;
  function createMarkup(data) {
    return {__html: data};
  }
  return (
    <>
      <section className="about-area section">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-6 col-md-12 p-0">
              <div className="about-image"></div>
            </div>
            <div className="col-lg-6 col-md-12 p-0">
              <div className="about-content">
                <span>About Us</span>
                <h2>{data?.title}</h2>
                  {data.description && <div dangerouslySetInnerHTML={createMarkup(data.description)}></div>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
