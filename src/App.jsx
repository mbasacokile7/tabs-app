import { useEffect, useState } from "react";
import JobInfo from "./Components/JobInfo";
import BtnContainer from "./Components/BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  // Create state value
  const [jobs, setJobs] = useState([]);
  // Set a loading state variable
  const [isLoading, setIsLoading] = useState(true);

  //Current Item state value (Will be used for indexing)
  const [currentItem, setCurrentItem] = useState(0);

  const companies = [];

  // Function to get the  data using the fetch-api
  async function getData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);

      // Set up a new set
      const uniqueCompanies = new Set();

      // Get the unique company names
      data.forEach((job) => {
        uniqueCompanies.add(job.company);
      });
      // Create an array for each company name
      uniqueCompanies.forEach((company) => {
        companies.push(company);
      });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  // Set up useEffect to fetch the data frpm the URL
  useEffect(() => {
    getData();
  }, []);

  //State Value for the unique companies (So that we can pass it down)
  const [comps, setComps] = useState(companies);

  // Function to toggle through the different jobs
  //==== My Method of Filtering ====//
  /*
  function jobFilter(company) {
    const newJob = jobs.filter((job) => {
      return job.company === company;
    });
    const index = jobs.length - newJob[0].order;
    setCurrentItem(index);
  }
  */

  // There is a bit of a lag when the data is loading
  // So I will add a loader
  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <section className="jobs-center">
      <BtnContainer
        comps={comps}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
