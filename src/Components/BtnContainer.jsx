import { v4 as uuid4 } from "uuid";

function BtnContainer({ comps, jobFilter }) {
  return (
    <div className="btn-container">
      {comps.map((comp) => {
        const id = uuid4();
        return (
          <button className="job-btn" key={id} onClick={() => jobFilter(comp)}>
            {comp}
          </button>
        );
      })}
    </div>
  );
}
export default BtnContainer;
