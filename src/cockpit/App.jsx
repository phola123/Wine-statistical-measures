// React Imports
import React from 'react';
import Table from "../components/Table";

// Constants imports
import {DATA} from "../constants/data";
import {calculateGamma} from "../utils/helpers";


const App = () => {

    // States
    const [flavanoids, setFlavanoidsData] = React.useState(null);
    const [gammaData, setGammaData] = React.useState(null);


    // Effects
    React.useEffect(() => {

        // Used group by alcohol to separate data by alcohol type
        // created copy of the data by spreading values of DATA array into the new array
        const flavanoidsData = Object.groupBy([...DATA], (wines) => wines.Alcohol);


        let gammaData = [...DATA].map(wines => {
            return {
                ...wines,
                Gamma: calculateGamma(wines.Ash, wines.Hue, wines.Magnesium)
            }
        });

        gammaData = Object.groupBy(gammaData, (wines) => wines.Alcohol)

        setGammaData(gammaData);
        setFlavanoidsData(flavanoidsData);
    }, [])


    return <div className='application-container'>

        {
            flavanoids ?
                <Table data={flavanoids} calculationByKey={'Flavanoids'} title={'Flavanoids'}/> : <>Loading.....</>
        }

        {
            gammaData ?
                <Table data={gammaData} calculationByKey={'Gamma'} title={'Gamma'}/> : <>Loading.....</>
        }


    </div>

}


export default App;