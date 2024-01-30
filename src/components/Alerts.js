import React from 'react'

function Alerts(props) {
    const capitalize = (text) => {
        const str = text.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}

export default Alerts