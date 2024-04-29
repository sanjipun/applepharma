import Sliders from "./Sliders";

export default function Hero({ sectionName }) {
  return (
    <div style={{boxSizing:"border-box"}}> 
      <Sliders sectionName={sectionName} />
    </div>
  );
}
