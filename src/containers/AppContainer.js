import React from 'react'
import Certificaciones from '../components/Certificaciones'
import Component1 from '../components/Component1'
import Estudios from '../components/Estudios'
import Experiencia from '../components/Experiencia'
import Habilidades from '../components/Habilidades'

const AppContainer = () =>{

    return (
      <div>
        <Component1 />
        <Estudios />
        <Experiencia />
        <Certificaciones />
        <Habilidades />
      </div>
    )
 
}

export default AppContainer