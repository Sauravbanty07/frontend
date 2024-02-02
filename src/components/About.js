import React from 'react'
import { useNavigate } from 'react-router-dom';

export const About = () => {
    const navigate= useNavigate();
    function clickHandler()
    {
        navigate("/support");

    }
    function backHandler()
    {
        navigate(-1);
    }
  return (
    <div>
        <div>
        About
        </div>

        <button onClick={clickHandler}>
            Go to support Page
        </button>
        <button onClick={backHandler}>
            Go Back One step
        </button>
    </div>
  )
}
