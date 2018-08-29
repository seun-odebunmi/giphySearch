import React from 'react'

const SearchField = ({ keyword, inputChange, fetchGif }) => (
  <div className="row">
    <div className="col-md-12">
      <form
        className="form-horizontal"
        onSubmit={e => {
          e.preventDefault()
          return fetchGif(keyword)
        }}
      >
        <div className="form-group">
          <div className="col-md-10">
            <input
              type="text"
              name="giphy-search"
              className="form-control"
              placeholder="type your search here"
              value={keyword}
              onChange={e => inputChange(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-default pull-right">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
)

export default SearchField
