
import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import ModelDetails from './ModelDetails'


class App extends React.Component {
  state = {}

  updateSelection = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleClick = () => {
    const model = data.find(model => model.name === this.state.name)

    this.props.dispatch({
      type: 'ADD_MODEL',
      payload: {
        name: model.name,
        manufacturer: model.manufacturer,
        year: model.year,
        origin: model.origin
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Computer Models</h1>
        </header>
        <main>
          <select onChange={this.updateSelection} >
            <option value="" key='pick a model'>-- pick a model --</option>
            {data.map(model =>
              <option value={model.name} key={model.name}> {model.name} ({model.year}) </option>)}
          </select>

          <button onClick={this.handleClick}>Add</button>

          <ModelDetails data={this.props.data}/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

const data = [
  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
]

export default connect(mapStateToProps)(App)
