import React, {useState} from 'react'

function Bmicalculation() {


    const [height, setHeight] =useState(null);
    const [weight, setWeight] =useState(null);
    const [result, setResult] =useState(null);

    const [status, setStatus] =useState('');

    function calculate()
    {
        
        if (weight === null && height === null)
        {
            return result
        }
        else
        {
        
        let bodymassindex = Number(weight / (height / 100) ** 2).toFixed(2);
        setResult(bodymassindex);

        let outputval = display(bodymassindex)
        setStatus(outputval)
        }
    }

    function display(bodymassindex)
    {
        if(bodymassindex === null)
        {
            reun
        
        if(bodymassindex<18.5)
        {
            return "Underweight"
        } 
        else if(bodymassindex >= 18.59 && bodymassindex < 24.99)
        {
            return "Normal"
        } 
        else if(bodymassindex >= 25 && bodymassindex < 29.99)
        {
            return "Overweight"
        } 
        else return "Obese"
      
    }

    return (
        
        <div className="m-20">

            <h1>BMI-Calculator</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">Enter Height in cm</label>
            <input className="shadow appearance-none border rounded w-100px py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Height" type="text" placeholder="Height" value={height} onChange={event => setHeight(event.target.value)}/>
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">Enter Weight in KG</label>
            <input className="shadow appearance-none border rounded w-100px py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Weight" type="text" placeholder="Weight" value={weight} onChange={event => setWeight(event.target.value)}/>
            </div>
            
            <div className="flex items-center justify-center">
            <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={calculate}>
                Calculate
            </button>
            </div>
            <div className='mb-4'>
            <p>Your BMI score is:</p> <h4>{result}</h4> 
            <p>You are currently:</p> <h4>{status}</h4> 
            </div>
            
        </form>
        </div>
        
    )
}

export default Bmicalculation
