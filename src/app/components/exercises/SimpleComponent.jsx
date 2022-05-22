import React from "react";
import PropTypes from "prop-types";
const SimpleComponent = ({ title, func }) => {
    return (
        <>
            <button className="btn btn-primary mx-2" onClick={func}>
                {title}
            </button>
        </>
    );
};
SimpleComponent.propTypes = {
    title: PropTypes.string,
    func: PropTypes.func
};
export default SimpleComponent;
