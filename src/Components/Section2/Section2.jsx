import React from 'react'
import '../../Components/Section2/Section2.css'
import logoipsum1 from'../../Assets/logoipsum1.png'
import logoipsum2 from'../../Assets/logoipsum2.png'
import logoipsum3 from'../../Assets/logoipsum3.png'
import logoipsum4 from'../../Assets/logoipsum4.png'

export const Section2 = () => {
  return (
    <div className='car'>
    <div>
        <img src={logoipsum1} alt='' />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src={logoipsum2} alt='' />
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src={logoipsum3} alt='' />
        <p className="legend">Legend 3</p>
    </div>
    <div>
        <img src={logoipsum4} alt='' />
        <p className="legend">Legend 4</p>
    </div>
    

</div>
  )
}
