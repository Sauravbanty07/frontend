import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Labs = () => {
    const navigate= useNavigate();
    function clickHandler()
    {
        navigate("/about");

    }
    function backHandler()
    {
        navigate(-1);
    }
  return (
    <div>
        <div>
        Labs
        </div>

        <button onClick={clickHandler}>
            Go to About Page
        </button>
        <button onClick={backHandler}>
            Go Back One step
        </button>
    </div>
  )
}
