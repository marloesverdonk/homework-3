import React from 'react'
import PropTypes from 'prop-types'

export default function ModelDetails(props) {
  return (
    <div>
      {props.data.map(model =>
        <ul key={model.name}>
          <li>Name: {model.name}</li>
          <li>Manufacturer: {model.manufacturer}</li>
          <li>Year: {model.year}</li>
          <li>Origin: {model.origin}</li>
        </ul>
      )}
    </div>
  )
}

ModelDetails.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    origin: PropTypes.string.isRequired
  })).isRequired
}