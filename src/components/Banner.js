import React from 'react'
import {Link} from 'react-router-dom'
import Health from './Health'
import Footer from './Footer'
const Banner = () => {
    return (
        <div>
     
            <div className="container col-xxl-8 px-4 py-5" id="banner-cont">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6" id="ab">
      <img src="https://i0.wp.com/blog.armoire.style/wp-content/uploads/2020/02/IMG_3469.jpg?fit=1024%2C1024&ssl=1" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" id="banner-img"/>
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold lh-1 mb-3" style={{color:'white'}}>List N Buy</h1>
      <p className="lead" style={{color:'white'}}> adsjka aksdm lasdmkadm lasmkda dlaskdjma daja dsadjnad adajnd askdna dahkjklasdn dkasndak daknd amndaoidakdhnad akdhjad adkadjadl adkjad adklajd adjaodiapomjafhbn kadfuaodadoljmklsdfmldfsjklfsd dfkklsfjmklsdfj </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <Link type="button" className="btn btn-danger  btn-lg px-4 me-md-2" to="/select" >Select Clothes</Link>
      </div>
    </div>
  </div>
</div>




<Footer />
        </div>
    )
}

export default Banner
