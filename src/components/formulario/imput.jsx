
import React from 'react'

class Imput extends React.Component {

    constructor ( props ) {
        super( props )
    }
    onFieldChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.props.onChange(fieldName, fieldValue);
    }

    onDateChange(dateValue) {
        this.props.onChange('dateCommenced', dateValue);
    }

    render ( ) {

        return(
            <div>
                <label htmlFor={this.props.fieldId}>{this.props.label}</label>
                <input 
                    id={this.props.fieldId} 
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.onFieldChange.bind(this)}
                ></input>
            </div>
        )

    }
}
export default Imput