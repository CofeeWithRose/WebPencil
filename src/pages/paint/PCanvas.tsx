import React from 'react'
import Resizebale from '../../components/resizebale'



export default () =>{
    return <main 
        className='PCanvas'
    >
        <Resizebale
            defaultSize={{x:300, y: 300}}
        >
            <div>sadad</div>
        </Resizebale>
    </main>
}