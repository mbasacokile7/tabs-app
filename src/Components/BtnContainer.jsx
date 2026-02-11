import { v4 as uuid4 } from "uuid";

function BtnContainer({ comps, currentItem, setCurrentItem }) {
  return (
    <div className="btn-container">
      {comps.map((comp, index) => {
        const id = uuid4();
        return (
          <button
            className={index === currentItem ? "job-btn active-btn" : "job-btn"}
            key={id}
            onClick={() => setCurrentItem(index)}
          >
            {comp}
          </button>
        );
      })}
    </div>
  );
}
export default BtnContainer;
