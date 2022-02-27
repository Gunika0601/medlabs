import React, { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function IndexPage(props) {

 
  const [data,  setdata] = useState([])
  const [titleArry, setTitleArry] = useState([])
  const [userData ] = useLocalStorage("user")

  const result = props.data.result;
  const [user, setUser] = useState(result[0]);
  const getUsetTestBooked = async (userid) => {
    const response = await fetch(`https://medlabs-backend.herokuapp.com/gettest/${userData.userId}`)
    .then(async r => {
      const userdata= await r.json();
      return userdata.result
    })

    setdata(response)
    const data = await response.map(async(e,i)=>{
      const vals = await fetch(`https://medlabs-backend.herokuapp.com/gettesttestid/${e.testId}`)
       const valdata = await vals.json()
       if(valdata.result[i]){
         setTitleArry([...titleArry, valdata.result[i]])
       }
      return valdata
    })

    console.log(titleArry)
    
  }
  React.useEffect(() => {
    getUsetTestBooked();

  }, [user]);
  return (
    <>
      <div className="bg-gray-100 ">
        {/* Remove py-8 */}
        <div className="mx-auto container py-8">
          <div className="flex flex-wrap items-center justify-center">
            {data?.map((item, index) => (
              <div key={index} className="">
                <div className="mx-4 w-72 rounded bg-indigo-200 lg:mb-0 mb-8">
                  <div>
                    <img className="w-full h-44" src={ titleArry[index] ?  titleArry[index].testImage : 'https://i.imgur.com/Dzhqtfd.jpg'} />
                  </div>
                  <div className="">
                    <div className="flex items-center px-4 pt-4">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-bookmark"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#2c3e50"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center">
                        <h2 className="text-lg font-semibold">
                          {item.patients[0].name}
                        </h2>
                        {/* <p className="text-xs text-gray-600 pl-5">4 days ago</p> */}
                      </div>
                      <p className=" text-gray-600 mt-1">
                      age: {item.patients[0].age}
                      </p>
                      <p className=" text-gray-600 mt-1">
                      email: {item.patients[0].email}
                      </p>
              

                      <div className="flex items-center justify-between py-4">
                        <h2 className="text-indigo-700 font-semibold">
                          TestName: { titleArry[index] ?  titleArry[index].testName : "Sugar test"}

                        </h2>
                        <h3 className="text-indigo-700 text-xl font-semibold">
                          Price: ₹ {titleArry[index] ?  titleArry[index].testPrice : 400}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}