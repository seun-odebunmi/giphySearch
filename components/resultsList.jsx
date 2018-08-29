import React from 'react'

const ResultsList = ({ isRequesting, error, response }) => (
  <div className="container">
    <div className="row" style={{ marginTop: '40px' }}>
      {isRequesting && (
        <p>
          <i className="fa fa-spinner fa-spin fa-4x" />
          Loading...
        </p>
      )}

      {response && (
        <div className="animated bounceIn delay-4s">
          {response.data.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div
                style={{
                  margin: '0 0 60px',
                  width: '200px',
                  height: '250px'
                }}
              >
                <img
                  src={item.images.original.url}
                  style={{ height: '200px', width: '100%' }}
                />
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
)

export default ResultsList
