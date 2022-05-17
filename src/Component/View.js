import React from 'react'

const View = () => {
    var booklist={"title":"abc","Price":"200","author":"abm"}
  return (
    <div>
  <div className="container">
  <div className="row g-2">
      <div className="col col-12 col-md-12 col-sm-12 col-xxl-12 col-xl-12">
          <div className="row g-3">
              <div className="col col-md-12 col-sm-12 col-xl-12 col-xxl-12">
                  {booklist.title}
              </div>
              <div className="col col-md-12 col-sm-12 col-xl-12 col-xxl-12">
              {booklist.Price}
              </div>
              <div className="col col-md-12 col-sm-12 col-xl-12 col-xxl-12">
              {booklist.author}
              </div>
              <div classNameName="col col-md-12 col-sm-12 col-xl-12 col-xxl-12">
                  <button className="btn btn-success">Submit</button>
              </div>
          </div>
      </div>
  </div>
</div>
</div>
  )
}

export default View