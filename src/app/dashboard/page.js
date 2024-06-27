"use client"; // Add this directive at the top

import Link from "next/link";
import { Chart as ChartJS } from "chart.js/auto";
import {Bar, Doughnut, Line} from "react-chartjs-2";
import { useRouter } from 'next/navigation';

import sourceData from "../data/sourceData";
import revenueData from "../data/revenueData";

export default function Home() { 
   
  const router = useRouter();

  return (
    <main>
    <div>
      <div className="navbar  text-white rounded-b-full " style={{backgroundColor:'#0f172a'}}>
        <div className="flex-none">
          <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </label>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl"> <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 63 64"><path fill="#d1d5db" d="M56.089 1.104s-48.341-.015-48.326 0c-4.455 0-6.96 2.303-6.96 7.009V56.63c0 4.402 2.252 6.707 6.704 6.707h48.722c4.452 0 6.706-2.19 6.706-6.707V8.113c.001-4.592-2.254-7.009-6.846-7.009M52.34 39.112H39.263v13.077H24.214V39.112H11.137V24.064h13.077V10.987h15.049v13.077H52.34z"/></svg>Health<span style={{color:'#d1d5db'}}>.Care</span></a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </svg>
          </button>


        </div>


      </div>

      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-14 mr-14">

            {/* ///////////////////////////////////1/////////////////////////////////// */}
        <div style={{ height:'250px'}}>



      <div>
    <a href="#" className="block max-w-sm p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-800 shadow-gray-400 dark:hover:bg-gray-700 bg-red-300" style={{backgroundColor:"#f87171"}} >
      <div className="flex items-center">
        <svg class="w-[33px] h-[33px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z" clip-rule="evenodd" />
        </svg>
        <p className="ml-2 font-normal text-gray-700 dark:text-gray-400">Patient</p>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400 text-3xl text-black">666</p>
      <progress className="progress w-40"></progress>
    </a>
  </div>
        </div>

        {/* ///////////////////////////////////2/////////////////////////////////// */}
        
        <div   style={{ height:'250px'}}>
        <div>
    <a href="#" className="block max-w-sm p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 shadow-gray-400 bg-red-300 bg-yellow-200" >
      <div className="flex items-center">
        <svg class="w-[33px] h-[33px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 6.995c-2.306 0-4.534.408-6.215 1.507-1.737 1.135-2.788 2.944-2.797 5.451a4.8 4.8 0 0 0 .01.62c.015.193.047.512.138.763a2.557 2.557 0 0 0 2.579 1.677H7.31a2.685 2.685 0 0 0 2.685-2.684v-.645a.684.684 0 0 1 .684-.684h2.647a.686.686 0 0 1 .686.687v.645c0 .712.284 1.395.787 1.898.478.478 1.101.787 1.847.787h1.647a2.555 2.555 0 0 0 2.575-1.674c.09-.25.123-.57.137-.763.015-.2.022-.433.01-.617-.002-2.508-1.049-4.32-2.785-5.458-1.68-1.1-3.907-1.51-6.213-1.51Z" />
        </svg>
        <p className="ml-2 font-normal text-gray-700 dark:text-gray-400">Appointments</p>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400 text-3xl text-black">236</p>
      <progress className="progress w-40"></progress>
    </a>
  </div>
        </div>

        {/* ///////////////////////////////////3/////////////////////////////////// */}
        <div style={{ height:'250px'}}>
        <div>
    <a href="#" className="block max-w-sm p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 shadow-gray-400  bg-lime-300" style={{backgroundColor:'#2dd4bf'}} >
      <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 64 64"><path fill="#000000" d="M33.82 15.553v-1.259h1.645v-.796c0-1.416 1.237-2.561 2.768-2.561c1.528 0 2.765 1.145 2.765 2.561v.796h1.609v1.259zM54.198 47.38a5.872 5.872 0 1 1-11.745 0a5.872 5.872 0 1 1 11.745 0m-3.063 0a2.808 2.808 0 0 0-5.617 0a2.809 2.809 0 1 0 5.617 0m-30.566-.056a5.873 5.873 0 0 1-5.875 5.873a5.875 5.875 0 0 1 0-11.748a5.877 5.877 0 0 1 5.875 5.875m-3.053.005a2.808 2.808 0 0 0-2.81-2.808a2.81 2.81 0 1 0 2.81 2.808"/><path fill="#000000" d="M58.188 30.675c1.755.342 2.805 1.099 3.597 5.43l1.253 7.815c.451 2.543-.986 3.471-2.778 3.471h-4.304c0-4.214-3.414-7.642-7.628-7.642s-7.632 3.428-7.632 7.642H22.303c0-4.214-3.416-7.642-7.63-7.642c-4.216 0-7.631 3.428-7.631 7.642H3.476c-1.256 0-2.234-.951-2.234-2.178V19.515c0-1.4 1.105-2.525 2.46-2.525H49.88c1.755 0 3.038.871 3.672 2.398l4.636 11.288zM42.795 19.609v10.675h12.343l-4.33-10.675zm-11.042 9.305v-6.55h-6.55v6.55h-6.551v6.551h6.551v6.549h6.55v-6.549h6.55v-6.551z"/></svg>
        <p className="ml-2 font-normal text-gray-700 dark:text-gray-400">Treatment</p>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400 text-3xl text-black">806</p>
      <progress className="progress w-40"></progress>
    </a>
  </div>
        </div>
        {/* ///////////////////////////////////4/////////////////////////////////// */}
        <div    style={{ height:'250px' ,}} className="mt-4">
        <div class="w-full max-w-md p-4 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700" style={{backgroundColor:'#d1d5db', color:"wheat"}}>
    <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-black" >Doctors</h5>
        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fHww" alt="Neil image" wid/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white" >
                            Neil Sims
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400"  >
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"  >
                        $320
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fHww" alt="Bonnie image"/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4"  style={{color:'white'}}>
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white"  >
                            Bonnie Green
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400" >
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"  >
                        $3467
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" alt="Michael image"/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4 " >
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white"  >
                            Michael Gough
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400"  >
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"  >
                        $67
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" alt="Lana image"/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4"  >
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white" >
                            Lana Byrd
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400"  >
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white" >
                        $367
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" alt="Thomas image"/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white"  >
                            Thomes Lean
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400"  >
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $2367
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVkaWNhbCUyMGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" alt="Thomas image"/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4"  style={{color:'white'}}>
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white"  >
                            Thomes Lean
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400"  >
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"  >
                        $2367
                    </div>
                </div>
            </li>
            <li class="pt-3 pb-0 sm:pt-4">
                <div class="flex items-center ">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVkaWNhbCUyMGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" alt="Thomas image"/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4"  style={{color:'white'}}>
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white"  >
                            Thomes Lean
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400"  >
                            email@windster.com
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"  >
                        $2367
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>
        </div>
        {/* ///////////////////////////////////5/////////////////////////////////// */}
        <div style={{ height:'250px'}}><Bar 
        data={{
            labels: sourceData.map((data)=>data.label),
            datasets:[
                {
                    label:"Patient count",
                    data: sourceData.map((data)=> data.value),
                    backgroundColor:[
                        "#F65058FF",
                        "#003049",
                        "#87bba2",
                    ],
                    borderRadius:5,

                },
            ],
        }}

/></div>
        {/* ///////////////////////////////////6/////////////////////////////////// */}
        <div  style={{height:'250px' }}>

        <Doughnut
  data={{
    labels: sourceData.map((data) => data.label),
    datasets: [
      {
        label: "count",
        data: sourceData.map((data) => data.value),
        backgroundColor: [
          "#F65058FF",
          "#003049",
          "#87bba2",
        ],
        borderColor: [
          "#F65058FF",
          "#003049",
          "#87bba2",
        ],
        borderRadius: 5,
      },
    ],
  }}
  width={50}  // Adjust these values as needed
  height={50} // Adjust these values as needed
  options={{
    maintainAspectRatio: false,
  }}
/>

        </div>
        {/* ///////////////////////////////////7/////////////////////////////////// */}
        <div style={{ height:'250px'}}>
        <Line 
  data={{
    labels: revenueData.map((data) => data.label),
    datasets: [
      {
        label: "Revenue",
        data: revenueData.map((data) => data.revenue),
        backgroundColor:"#F65058FF",
        borderColor: "#003049",
        fill: false,
        borderWidth: 1,
      },
      {
        label: "Cost",
        data: revenueData.map((data) => data.cost),
        backgroundColor:   "#003049",
        borderColor:"#003049",
        fill: false,
        borderWidth: 1,
      },
    ],
  }}
  options={{
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  }}
/>

        </div>
        {/* ///////////////////////////////////8/////////////////////////////////// */}
        <div style={{ height:'250px'}}>
          



        </div>
     
       
      </div>


        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 min-h-full text-base-content text-white " style={{backgroundColor:'#0f172a'}}>
            {/* Sidebar content here */}
            <li><a> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 63 64"><path fill="currentColor" d="M56.089 1.104s-48.341-.015-48.326 0c-4.455 0-6.96 2.303-6.96 7.009V56.63c0 4.402 2.252 6.707 6.704 6.707h48.722c4.452 0 6.706-2.19 6.706-6.707V8.113c.001-4.592-2.254-7.009-6.846-7.009M52.34 39.112H39.263v13.077H24.214V39.112H11.137V24.064h13.077V10.987h15.049v13.077H52.34z"/></svg><button onClick={()=>router.push("/doctor")} style={{ width:'50px'}}>Doctor</button></a></li>
            <li><a> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64"><path fill="currentColor" d="M41.326 19.251a1.038 1.038 0 0 0-1.032 1.801c.497.282 1.13.11 1.416-.387a1.037 1.037 0 0 0-.383-1.414zm-2.845-1.056c.496.284 1.13.11 1.412-.387a1.031 1.031 0 0 0-.38-1.414a1.039 1.039 0 0 0-1.419.385c-.28.495-.11 1.13.387 1.416m3.678 0a1.04 1.04 0 0 0 1.416-.387a1.036 1.036 0 1 0-1.8-1.027a1.037 1.037 0 0 0 .385 1.414zm-1.914-2.934a1.039 1.039 0 1 0 1.027-1.801a1.039 1.039 0 0 0-1.026 1.801zm-2.922 9.255a1.04 1.04 0 0 0-.372 1.416a1.04 1.04 0 0 0 1.796-1.043a1.038 1.038 0 0 0-1.424-.373"/><path fill="currentColor" d="M55.65.359H8.866C4.282.359.552 4.088.552 8.673v46.783c0 4.587 3.729 8.316 8.314 8.316h46.783c4.584 0 8.315-3.729 8.315-8.316V8.673c0-4.585-3.731-8.314-8.315-8.314zm-16.09 7.51a1.045 1.045 0 0 1 1.421-.377a1.036 1.036 0 1 1-1.046 1.792a1.035 1.035 0 0 1-.375-1.416zm2.864 4.22a5.158 5.158 0 1 1-.001 10.31a5.158 5.158 0 0 1 .001-10.31m-4.345 9.604a1.042 1.042 0 0 1-1.237.789a1.034 1.034 0 0 1-.788-1.235a1.035 1.035 0 0 1 1.235-.789c.557.126.912.674.79 1.235M36.374 9.707a1.04 1.04 0 0 1 1.419-.375a1.036 1.036 0 1 1-1.047 1.79a1.037 1.037 0 0 1-.371-1.416zm-.602 3.395a1.038 1.038 0 0 1 2.026.444a1.037 1.037 0 0 1-2.026-.444m.058 3.18c.559.124.912.673.789 1.235a1.038 1.038 0 0 1-2.026-.446a1.038 1.038 0 0 1 1.237-.789m-1.225 7.004a1.035 1.035 0 1 1-1.043-1.79a1.036 1.036 0 1 1 1.042 1.791zM33.19 11.545c.287-.492.92-.659 1.416-.37c.497.289.666.919.377 1.414a1.038 1.038 0 0 1-1.419.377a1.042 1.042 0 0 1-.373-1.421zm-.454 4.847c.497.284.666.915.384 1.416a1.036 1.036 0 0 1-1.802-1.027a1.043 1.043 0 0 1 1.419-.388zM30.2 13.143a1.037 1.037 0 0 1 1.463.067a1.034 1.034 0 0 1-.065 1.462a1.038 1.038 0 0 1-1.466-.067a1.034 1.034 0 0 1 .067-1.462zm-.067 6.709a1.036 1.036 0 1 1 1.532 1.399a1.036 1.036 0 0 1-1.531-1.399zm-13.104-7.313a5.152 5.152 0 0 1 6.805 2.594a5.144 5.144 0 0 1-2.594 6.799a5.151 5.151 0 0 1-6.807-2.593a5.14 5.14 0 0 1 2.596-6.8m11.52 12.23l-3.924 11.516c-.328.838-1.149 1.405-2.102 1.405a2.179 2.179 0 0 1-1.932-1.142l-1.73-3.108l-2.422 7.201v14.512H7.632V37.421c0-.498.139-1.449.354-1.984l2.943-8.808a4.844 4.844 0 0 1 8.683-1.059l2.436 4.363l2.248-6.611a2.246 2.246 0 1 1 4.252 1.446zm-.313-5.161a1.038 1.038 0 0 1-1.047-1.792a1.045 1.045 0 0 1 1.422.373a1.038 1.038 0 0 1-.375 1.419m.375-3.339a1.041 1.041 0 0 1-1.422.373a1.039 1.039 0 0 1 1.047-1.791c.497.292.663.924.375 1.417zm27.255 30.228c0 1.249-.986 2.266-2.234 2.266a2.262 2.262 0 0 1-2.252-2.266V32.083h-1.887v23.071h-6.067v-6.251h-1.928v6.251h-6.063V32.083h-1.868v14.414a2.263 2.263 0 0 1-2.259 2.266c-1.245 0-2.224-1.017-2.224-2.266V30.509c0-3.647 3.255-6.606 6.903-6.606h13.24c3.647 0 6.64 2.959 6.639 6.606z"/><path fill="currentColor" d="M40.514 26.353a1.039 1.039 0 0 0-.375 1.419a1.038 1.038 0 1 0 .375-1.42z"/></svg><button onClick={()=>router.push("/patient")} style={{ width:'50px'}}> Patient</button></a></li>
            <li><a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64"><path fill="currentColor" d="M55.629.365H8.627C4.021.365.275 4.113.275 8.719v46.995c0 4.607 3.747 8.356 8.352 8.356h47.002c4.605 0 8.353-3.748 8.353-8.356V8.719c0-4.606-3.747-8.354-8.353-8.354M45.511 17.253a5.796 5.796 0 1 1 0 11.592a5.796 5.796 0 0 1 0-11.592M9.204 11.605v10.512H7.632a.538.538 0 0 1-.54-.539V8.014c0-.459.342-.833.812-.833h6.951c.469 0 .812.372.812.831v.797h10.746c.3 0 .54.241.54.537v3.05H17.78v-.798c0-.459-.343-.831-.814-.831h-6.949c-.47 0-.814.379-.814.839zm2.653 17.415a.537.537 0 0 1-.54-.538V14.918c0-.459.342-.833.812-.833h6.949c.47 0 .814.373.814.831v.797h10.746c.299 0 .54.241.54.537v12.233a.537.537 0 0 1-.54.537zm25.704 28.371v-17.61h-.79l-3.596 5.366c-.586.798-1.775 1.186-2.722 1.186h-8.444a2.54 2.54 0 0 1-2.541-2.538c0-1.399 1.139-2.503 2.541-2.503h7.68l5.328-8.056c1.277-1.948 3.772-2.89 5.782-2.89l10.438-.006a5.81 5.81 0 0 1 5.814 5.809l.012 21.243z"/><path fill="currentColor" d="M22.848 17.561h-3.201v3.199h-3.2v3.201h3.2v3.2h3.201v-3.2h3.2V20.76h-3.2z"/></svg><button onClick={()=>router.push("/appointment")} >Appointments</button></a></li>
          </ul>
        </div>




      </div>


    </div>
    </main>
  );
}
