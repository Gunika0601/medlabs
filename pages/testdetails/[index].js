import React from 'react'

import TestDetailsTable from "../../components/TestDetailsTable/Table"
import useLocalStorage from "../../hooks/useLocalStorage";
const BrownPanwadi = () => {
    const [bookedTests, setBookedTest] = React.useState();

    const [labData] = useLocalStorage("user")
    const getBookedTests = async () => {
        if (labData) {
            const res = await fetch(`https://medlabs-backend.herokuapp.com/gettestforlab/${labData.labId}`)
            const data = await res.json();
            if(data){
                setBookedTest(data.result);
                // console.log(data);
            }
        }
    
    }
    

    React.useEffect(() => {
        getBookedTests()
    }, [])

    return (
        <div>
            <TestDetailsTable data={bookedTests} />
        </div>
    )
}

export default BrownPanwadi;