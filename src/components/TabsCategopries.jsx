import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import axios from 'axios'
// import { useLoaderData } from "react-router-dom";

const TabsCategopries = () => {
//   const jobs = useLoaderData()
// console.log(jobs)



  const [jobs,setJobs] = useState([])
  console.log(jobs)
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_APP_URL}/jobs`)
    .then(res=> res.json())
    .then(err=>{
      setJobs(err)
    })
  },[])

  // const [jobs, setJobs] = useState([])
  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
  //     setJobs(data)
  //   }
  //   getData()
  // }, [])
  

  // useEffect(()=>{
  //   const getData = async ()=>{
  //     const {data} = await axios(`${import.meta.env.VITE_APP_URL}/jobs}`)
  //     setJobs(data)
  //   }
  //   getData()
  // },[])

 
  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <h1 className="text-center text-2xl font-semibold text-gray-800 ">
          Browse Jobs By Categories
        </h1>
      </div>
      <Tabs>
        <div className="flex justify-center">
          <TabList>
            <Tab>Web Developer</Tab>
            <Tab>Graphic Designer</Tab>
            <Tab>Marketing Specialist</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid grid-cols-3 mt-5 justify-self-center">
            {jobs.filter((j) => j.job_title === "Web Developer")
              .map((job) => (
                <JobCard job={job} key={job._id}></JobCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 mt-5">
            {jobs
              .filter((j) => j?.job_title === "Graphic Designer")
              .map((job) => (
                <JobCard job={job} key={job._id}></JobCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 mt-5">
            {jobs
              .filter((j) => j?.job_title === "Marketing Specialist")
              .map((job) => (
                <JobCard job={job} key={job._id}></JobCard>
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>


  );
};

export default TabsCategopries;
