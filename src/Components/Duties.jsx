import { FaAngleDoubleRight } from "react-icons/fa";

/* Using UUID
use the uuid package to have unique ids for each of the duties or any component
or element that is rendered through iterating
*/
import { v4 as uuid4 } from "uuid";

function Duties({ duties }) {
  return (
    <div>
      {duties.map((duty, index) => {
        const id = uuid4();
        return (
          <div className="job-desc" key={id}>
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Duties;
