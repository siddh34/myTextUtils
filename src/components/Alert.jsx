import React from 'react'
import PropTypes from 'prop-types'

function Alert(props) {
    return (
        <div className={`alert alert-${(props.type)}`} role="alert">
            {props.title}
        </div>
    );
}

Alert.prototype = {title: PropTypes.title,type: PropTypes.type}

Alert.defaultProps = {title: "This is a alert",type: "primary"}

export default Alert