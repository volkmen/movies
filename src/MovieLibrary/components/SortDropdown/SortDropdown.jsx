import React from 'react';
import PropTypes from 'prop-types';
import './SortDropDown.scss';

const SortDropdown = ({ options, onSelectItem, defaultValue }) => {
    return (
        <select defaultValue={defaultValue} onChange={onSelectItem} className="movies-dropdown">
            {
                options.map(({ value, label }) => <option value={value} key={value}>{ label }</option>)
            }
        </select>
    );
};

SortDropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    }))
};

SortDropdown.defaultProps = {
    options: []
};

export default React.memo(SortDropdown);