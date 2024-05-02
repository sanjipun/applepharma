
export default function Mission(props) {
    const { values } = props;
    return (
        <>
            <section className="our-mission-area ptb-100 pt-0">
                <div className="container-fluid p-0">
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="our-mission-content">
                                <span className="sub-title">Our Values</span>
                                <h2>For Better Health , For Better Life</h2>
                                <ul className="list">
                                    {values.results && values.results.map((items) => (
                                        <li key={items.id}>
                                            <div style={{ display: "flex", alignItems: 'center' }}>
                                                <i className="fa fa-caret-right"></i>
                                                <span>{items.title}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="our-mission-image"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
