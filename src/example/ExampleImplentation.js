import React, {Component} from 'react';
//Import package InputDatePicker
import InputDatePicker from 'chalo-datepicker-multi-language';
//Import style example
import './style.css';

// Implementation example
class ExampleImplentation extends Component {
    constructor(props) {    
        super(props);    
        //It gets a new date to show in InputDatePicker
        this.state = {
            date:new Date()
        };       
    }

    //It's a method to change the date in InputDatePicker
    handleChangeDate(date) {
      this.setState({date});
    }

    render () {
        return (<div className="container">
                    <InputDatePicker
                        //Translate to English
                        locale="en-US"
                        //Translate to Spanish
                        //locale="es"
                        date={this.state.date}
                        handleChange={this.handleChangeDateto}
                    />
                </div>)
    }
}

export default ExampleImplentation;