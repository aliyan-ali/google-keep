import React from 'react'
import Refresh from '../Atoms/Refresh'
import View from '../Atoms/View'
import Setting from '../Atoms/Setting'
import Grid from '../Atoms/Grid'
import User from '../Atoms/User'



function Righticons() {
    return (
        <div className='Righticons'>
            <div className='icons-1'>
                <Refresh />
                <View />
                <Setting />
            </div>
            <div className='icons-2'>
                <Grid />
                <User />

            </div>
        </div>
    )
}

export default Righticons