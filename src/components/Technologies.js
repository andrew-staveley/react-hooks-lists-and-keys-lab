import React from 'react'

function Technologies(technologies) {
    console.log(technologies)
    technologies.forEach((element) => {
        return <span key={element}>{element}</span>
    })
}


export default Technologies;