import React from 'react';
import moment from 'moment';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '0 v 0 kk'
    };
  }
  render() {
    return (
      <div className='container'>
        <form>
        <div className='form-group'>
          <label htmlFor='birthday'>Syntymäaika</label>
          <input type='date'
            className='form-control'
            id='birthday'
            placeholder='dd.mm.yyyy'
            onChange={this.calculate.bind(this)} />
        </div>
        <div className='form-group'>
          <label htmlFor='age'>Ikä</label>
          <input type='text'
            readOnly
            className='form-control'
            id='age'
            value={this.state.age} />
        </div>
        </form>
      </div>
    );
  }

  calculate(e) {
    let birthDate = moment(e.target.value);
    let duration = moment.duration(moment().diff(birthDate));
    let years = duration.years();
    let months = Math.floor((duration.asYears() % 1) * 12);
    this.setState({age: `${years} v ${months} kk`});
  }
}
