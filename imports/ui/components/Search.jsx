import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { selectCompany } from '../actions';

function Search() {
  const dispatch = useDispatch();

  const names = useSelector(state => state.companies.names);

  const [inputOnFocus, setInputOnFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef(null);
  return (
    <div className="navbar-item">
      <div className="level">
        <div className="level-right">
          <div className="level-item">
            <div className="field">
              <div className="dropdown is-active">
                <div className="dropdown-trigger">
                  <div className="control has-icons-left is-15rem-wide">
                    <input
                      ref={inputRef}
                      type="text"
                      className="input"
                      placeholder="Look for a company?"
                      onChange={e => setInputValue(e.target.value)}
                      onFocus={() => setInputOnFocus(true)}
                      onBlur={() => setInputOnFocus(false)}
                    />
                    <span className="icon is-left">
                      <FontAwesomeIcon icon={faSearch} />
                    </span>
                  </div>
                </div>
                <div
                  className={`dropdown-menu is-15rem-wide ${
                    inputOnFocus ? '' : 'is-display-none-important'
                  }`}
                >
                  <div className="dropdown-content">
                    {names
                      .filter(name => name.includes(inputValue.toUpperCase()))
                      .map((name, idx) => (
                        <div key={idx} className="dropdown-item">
                          <a
                            onMouseDown={() => {
                              inputRef.current.value = '';
                              setInputValue('');
                              dispatch(selectCompany(name));
                            }}
                          >
                            {name}
                          </a>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Search.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string)
};

export default Search;
