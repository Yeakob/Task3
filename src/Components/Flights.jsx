import React, { useEffect, useState } from 'react'
const Flights = ({ flightData }) => {
  const [active, setActive] = useState("One_way");
  const [formData, setFormData] = useState({
    tripType: "One_way",
    from: "",
    to: "",
    date: "",
    daysDec: 0,
    daysInc: 0,
    Schedule: "",
    age: "",
    personNumber: 0,
    extraOptions: false,
    PDT: false,
    Dummy: false,
  });

  useEffect(() => {

  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleExtraChange = (e) => {
    setFormData({
      ...formData,
      extraOptions: e.target.checked,
    });
  };
  const handleDummyChange = (e) => {
    setFormData({
      ...formData,
      Dummy: e.target.checked,
    });
  };
  const handlePDTChange = (e) => {
    setFormData({
      ...formData,
      PDT: e.target.checked,
    });
  };

  const handleSearch = () => {
    // Perform search logic here
    console.log(formData);
  };
  return (
    <div className="relative w-full rounded-md sm:rounded-lg">
      <div className='w-full h-auto flex flex-col justify-center items-center py-3'>
        <div className='w-full h-auto flex flex-row justify-center items-center text-xs font-sans font-semibold pb-4 border-b-2 border-slate-300'>
          <button
            onClick={() => {
              setActive("Round_Trip");
              setFormData({ ...formData, tripType: "Round_Trip" });
            }}
            className={`border-2 px-4 py-1 ${active === "Round_Trip" ? "bg-blue-900 text-slate-100" : ""
              } border-blue-900`}
          >
            Round Trip
          </button>
          <button
            onClick={() => {
              setActive("One_way");
              setFormData({ ...formData, tripType: "One_way" });
            }}
            className={`border-2 px-4 border-x-0 py-1 ${active === "One_way" ? "bg-blue-900 text-slate-100" : ""
              } border-blue-900`}
          >
            One Way
          </button>
          <button
            onClick={() => {
              setActive("Multi_city");
              setFormData({ ...formData, tripType: "Multi_city" });
            }}
            className={`border-2 px-4 py-1 ${active === "Multi_city" ? "bg-blue-900 text-slate-100" : ""
              } border-blue-900`}
          >
            Multi City
          </button>
        </div>
        <div className='px-2 text-slate-500 font-semibold w-full h-auto flex flex-col justify-between items-center pt-2 pb-2 border-b-2 border-slate-300'>

          <div className='w-full flex flex-row justify-between border-b-2 border-slate-300 pb-2'>
            <input
              className='text-xs py-2 w-[9rem] bg-none border-2 border-slate-300 rounded-sm px-3'
              type="text"
              placeholder='From'
              name="from"
              id=""
              value={formData.from}
              onChange={handleInputChange}
            />
            <input
              className='text-xs py-2 w-[9rem] bg-none border-2 border-slate-300 rounded-sm px-3'
              type="text"
              placeholder='To'
              name="to"
              id=""
              value={formData.to}
              onChange={handleInputChange}
            />
            <input
              className='text-xs py-[.45rem] w-[9rem] bg-none border-2 border-slate-300 rounded-sm px-3'
              type="date"
              placeholder='12-12-2024'
              name="date"
              id=""
              value={formData.date}
              onChange={handleInputChange}
            />
            <select
              className='text-xs text-slate-500 py-[.45rem] w-[6rem] bg-none border-2 border-slate-300 rounded-sm px-3'
              name="daysDec"
              id=""
              value={formData.daysDec}
              onChange={handleSelectChange}
            >
              <option value="">Day-</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <select
              className='text-xs text-slate-500 py-[.45rem] w-[6rem] bg-none border-2 border-slate-300 rounded-sm px-3'
              name="daysInc"
              id=""
              value={formData.daysInc}
              onChange={handleSelectChange}
            >
              <option value="">Day+</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <select
              className='text-xs text-slate-500 py-[.45rem] w-[8rem] bg-none border-2 border-slate-300 rounded-sm px-3'
              name="Schedule"
              id=""
              value={formData.Schedule}
              onChange={handleSelectChange}
            >
              <option value="Any_time">Any time</option>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
            </select>
            +
            <select
              className='text-xs text-slate-500 py-[.45rem] w-[7rem] bg-none border-2 border-slate-300 rounded-sm px-3'
              name="age"
              id=""
              value={formData.age}
              onChange={handleSelectChange}
            >
              <option value="ADT">ADT</option>
              <option value="CLD">CLD</option>
              <option value="INF">INF</option>
            </select>
            <select
              className='text-xs text-slate-500 py-[.45rem] w-[6rem] bg-none border-2 border-slate-300 rounded-sm px-3'
              name="personNumber"
              id=""
              value={formData.personNumber}
              onChange={handleSelectChange}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            +
          </div>



          <div className='w-full py-2 flex flex-row justify-between items-center'>

            <div>
              <input type="checkbox" onChange={handleExtraChange} name="extraOption" id="" />
              <span className='px-2'>Extra Options </span>
            </div>

            <div className='flex flex-row justify-center items-center'>
              <span className='px-3'>Environment</span>
              <div>
                <input type="checkbox" onChange={handleDummyChange} name="Dummy" id="" />
                <span className='px-2'>Dummy</span>
              </div>
              <div>
                <input type="checkbox" onChange={handlePDTChange} name="PDT" id="" />
                <span className='px-2'>PDT</span>
              </div>
            </div>

            <button className='text-xs border-none rounded-sm text-slate-50 px-4 py-2 bg-blue-800' onClick={handleSearch}>SEARCH</button>
          </div>

        </div>
      </div>



      <div className='mb-3 px-2 font-mono font-semibold text-slate-600'>Data Parsed Successfully</div>
      <table className="w-full shadow-lg rounded-lg text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-white rounded-lg dark:bg-slate-50 dark:text-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">Flight Number</th>
            <th scope="col" className="px-6 py-3">Aircraft</th>
            <th scope="col" className="px-6 py-3">Class</th>
            <th scope="col" className="px-6 py-3">Fare</th>
            <th scope="col" className="px-6 py-3">Route</th>
            <th scope="col" className="px-6 py-3">Departure</th>
            <th scope="col" className="px-6 py-3">Arrival</th>
            <th scope="col" className="px-6 py-3">Duration</th>
            <th scope="col" className="px-6 py-3">Price</th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Select</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {flightData.filter(flight => flight.itinerary[0].departure === formData.from || flight.itinerary[0].arrival === formData.to).map((flight, index) => (
            <tr className="bg-white dark:bg-slate-100 duration-200 font-semibold text-slate-700 hover:bg-gray-300 dark:hover:bg-gray-300" key={index}>
              <td className="px-6 py-4">{flight.itinerary[0].carrier + flight.itinerary[0].flight_number}</td>
              <td className="px-6 py-4">{flight.itinerary[0].aircraft}</td>
              <td className="px-6 py-4">Economy</td> {/* Assuming class is always Economy */}
              <td className="px-6 py-4">{flight.price}</td>
              <td className="px-6 py-4">{flight.itinerary[0].departure} to {flight.itinerary[1].arrival}</td>
              <td className="px-6 py-4">{flight.itinerary[0].departure_time}</td>
              <td className="px-6 py-4">{flight.itinerary[1].arrival_time}</td>
              <td className="px-6 py-4">{flight.itinerary[0].duration}</td>
              <td className="px-6 py-4">{flight.price}</td>
              <td className="px-6 py-4 text-right">
                <a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Select</a>
              </td>
            </tr>
          ))}

          {flightData.filter(flight => flight.itinerary[1].departure === formData.from || flight.itinerary[1].arrival === formData.to).map((flight, index) => (
            <tr className="bg-white dark:bg-slate-100 duration-200 font-semibold text-slate-700 hover:bg-gray-300 dark:hover:bg-gray-300" key={index}>
              <td className="px-6 py-4">{flight.itinerary[1].carrier + flight.itinerary[1].flight_number}</td>
              <td className="px-6 py-4">{flight.itinerary[1].aircraft}</td>
              <td className="px-6 py-4">Economy</td> {/* Assuming class is always Economy */}
              <td className="px-6 py-4">{flight.price}</td>
              <td className="px-6 py-4">{flight.itinerary[1].departure} to {flight.itinerary[1].arrival}</td>
              <td className="px-6 py-4">{flight.itinerary[1].departure_time}</td>
              <td className="px-6 py-4">{flight.itinerary[1].arrival_time}</td>
              <td className="px-6 py-4">{flight.itinerary[1].duration}</td>
              <td className="px-6 py-4">{flight.price}</td>
              <td className="px-6 py-4 text-right">
                <a href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Select</a>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>

  );
};


export default Flights




