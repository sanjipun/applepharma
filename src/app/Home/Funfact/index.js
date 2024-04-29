import FunfactCard from "@/components/FunfactCard";

export default function Funfact(props) {
  const {companyStatus} = props;
  return (
    <>
      <div id="fun-facts" className="fun-facts section overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <FunfactCard
                icon="icofont-vehicle-delivery-van"
                number={companyStatus?.distributor}
                desc="Distributors"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <FunfactCard
                icon="icofont icofont-user-alt-3"
                number={companyStatus?.staff}
                desc="Employees"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <FunfactCard
                icon="icofont-pills"
                number={companyStatus?.products}
                desc="Products"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <FunfactCard
                icon="icofont icofont-table"
                number={companyStatus?.year_of_establish}
                desc="Years of Experience"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
