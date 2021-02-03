import React, { Component } from 'react'
import City from './City'

const SideBar = ({cities}) => {
   return cities.map(city => {
        return <City city={city.name}/>
    })
}

export default SideBar