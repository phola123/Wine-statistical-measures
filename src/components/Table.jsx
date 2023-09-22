// React libs
import React from 'react';

//Helper Functions
import {calculateMean, calculateMedian, calculateMode} from "../utils/helpers";


const Table = ({title, calculationByKey, data}) => {

    const [alcoholClass, setAlcoholClass] = React.useState(null);
    const [calculatedData, setCalculatedData] = React.useState(null);


    // passed in data variable in dependency array if in any case data changes so this functionality will be called again.
    React.useEffect(() => {

        // get keys of the object for looping through data
        const alcoholClass = Object.keys(data);

        const calculatedWineData = alcoholClass.map(alcohol => {
            return {
                alcohol,
                mean: calculateMean(data[alcohol], calculationByKey),
                median: calculateMedian(data[alcohol], calculationByKey),
                mode: calculateMode(data[alcohol], calculationByKey),
            }
        })

        setAlcoholClass(alcoholClass);
        setCalculatedData(calculatedWineData);


    }, [data]);


    // using divs instead of tables for better readability
    return <div className="table">

        <h2>{title} Table</h2>

        {/*table header*/}
        <div className='table__headerRow'>
            <div className='table__headerItem'>
                Measure
            </div>

            {
                alcoholClass ? alcoholClass.map((alcohol, index) => {
                    return <div key={index} className='table__headerItem'>
                        Class {alcohol}
                    </div>
                }) : <>No classes found</>
            }

        </div>

        {/*table body*/}
        <div className='table__body'>


            {/*table row*/}
            {/*Mean*/}
            {
                calculatedData ? <div className='table__bodyRow'>
                    {/*table cell*/}
                    <div className='table__bodyItem'>{`${title} Mean`}</div>

                    {/*table cell*/}
                    {
                        calculatedData.map((value, index) => <div key={index}
                                                                  className='table__bodyItem'>{value.mean}</div>)
                    }


                </div> : <></>
            }

            {/*table row*/}
            {/*Median*/}
            {
                calculatedData ? <div className='table__bodyRow'>
                    {/*table cell*/}
                    <div className='table__bodyItem'>{`${title} Median`}</div>

                    {/*table cell*/}
                    {
                        calculatedData.map((value, index) => <div key={index}
                                                                  className='table__bodyItem'>{value.median}</div>)
                    }


                </div> : <></>
            }

            {/*table row*/}
            {/*Mode*/}
            {
                calculatedData ? <div className='table__bodyRow'>
                    {/*table cell*/}
                    <div className='table__bodyItem'>{`${title} Mode`}</div>

                    {/*table cell*/}
                    {
                        calculatedData.map((value, index) => <div key={index}
                                                                  className='table__bodyItem'>{value.mode}</div>)
                    }


                </div> : <></>
            }

        </div>


    </div>


}


export default Table;

