import React from 'react'
import {BsChevronBarLeft,BsChevronBarRight } from "react-icons/bs";
import './chevron.css'

const Chevron = () => {
  return (
    <div className="chevrons">
    <BsChevronBarLeft className="chevron"/>
    <BsChevronBarRight className="chevron"/>
</div>
  )
}

export default Chevron