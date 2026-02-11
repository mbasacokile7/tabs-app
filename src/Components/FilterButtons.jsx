function FilterButtons({ comps }) {
  console.log(comps);
  return (
    <div className="btn-container">
      {comps.map((comp, index) => {
        return (
          <button className="job-btn" key={index}>
            {comp}
          </button>
        );
      })}
    </div>
  );
}
export default FilterButtons;
