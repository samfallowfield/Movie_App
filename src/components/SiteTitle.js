import React from 'react'
import {Link} from "react-router-dom";
import '../Css/SiteTitle.css'

export default function SiteTitle() {
  return (
    <div className="SiteTitle__container">
      <h1 className= "SiteTitle__title">Flannelfields</h1>
      <Link to="/" className= "SiteTitle__homeButton navItem">Home</Link>
    </div>
  )
}
