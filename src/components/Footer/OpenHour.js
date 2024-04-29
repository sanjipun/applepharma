export default function OpenHour() {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="single-footer">
          <h2>Reach Us</h2>
          <div className="contact-footer">
            <p style={{fontWeight:'600', fontSize:"16px", marginBottom:"8px"}}>Head Office</p>
            <a href="tel:+97715242817"><i className="icofont-iphone"></i><span>+977 15242817</span></a>
            <a href="mailto:apple.intpharma@gmail.com"><i className="icofont-email"></i><span>apple.intpharma@gmail.com</span></a>
            <p><i className="icofont-location-pin"></i><span>Sankhamul Kathmandu, Nepal</span></p>
            <p><i className="icofont-clock-time"></i><span> 10am - 5:30pm, Saturday Closed</span></p>

          </div>
          <div className="contact-footer" style={{marginTop:"16px"}}>
            <p style={{fontWeight:'600', fontSize:"16px", marginBottom:"8px"}}>Factory Site</p>
            <a href="tel:+97715242817"><i className="icofont-iphone"></i><span>+977 71563170</span></a>
            {/* <a href="mailto:apple.intpharma@gmail.com"><i className="icofont-email"></i><span>apple.intpharma@gmail.com</span></a> */}
            <p><i className="icofont-location-pin"></i><span>Tilottama-6 Rupandehi, Nepal</span></p>
            <p><i className="icofont-clock-time"></i><span> 8am - 4pm, Saturday Closed</span></p>

          </div>
      
        </div>
      </div>
    </>
  );
}
