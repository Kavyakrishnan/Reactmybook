import React from 'react'
import Header from './Header'

const Searchbook = () => {
  return (
    <div>
   <Header/>
        <div className="container">
        <div className="row g-2">
            <div className="col col-12 col-md-12 col-sm-12 col-xxl-12 col-xl-12">
                <div className="row g-3">
                    <div className="col col-md-12 col-sm-12 col-xl-12 col-xxl-12">
                        <label for="" className="form-label">Booktitle</label>
                        <input type="text" className="form-control"/>
                    </div>
                    
                   
                    <div classNameName="col col-md-6 col-sm-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Searchbook