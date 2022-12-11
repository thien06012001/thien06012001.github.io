import React from 'react'
import { NormalWeight, UnderWeight, OverWeight, Obese } from '../../typings'
import NormalWeights from '../NormalWeight'
import UnderWeights from '../UnderWeight'
import OverWeights from '../OverWeight'
import Obeses from '../Obese'
type Props = {
  obeses: Obese[]
}

function ProductFeed_Meat({ obeses}: Props) {
  return (
    <div className='grid grid-cols-3 m-auto relative'>
        {obeses.map((obese) => (
            obese.categories === 'Meat' ?  <Obeses key={obese._id} obese={obese} /> : <></>
        ))} 
    </div>
  )
}

export default ProductFeed_Meat