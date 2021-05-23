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
      <img src="https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" id="banner-img"/>
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold lh-1 mb-3">THE DAILY NUTRITION</h1>
      <p className="lead">At The Daily Nurtion, we understand that "healthy" actually means
                            something different to everyone. So we've worked tirelessly to ensure that this site offers
          options no matter what your taste, cooking experience, or dietary preferences are.</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <Link type="button" className="btn btn-danger  btn-lg px-4 me-md-2" to="/select" >Select Meals</Link>
      </div>
    </div>
  </div>
</div>

<Health />


<Footer />
        </div>
    )
}

export default Banner
