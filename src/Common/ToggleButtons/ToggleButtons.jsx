import React from 'react'
import "./ToggleButtons.scss"
const ToggleButtons = ({ changeView }) => {
    return (
        <div className="btn-group viewToggleButtons">
            <div className="form-group mb-0">
                <input name="viewChange" type="radio" className="position-absolute invisible" id="listView"
                    defaultChecked={true} onChange={() => changeView('list')} />
                <label htmlFor="listView">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28">
                        <g id="Group_9581" data-name="Group 9581" transform="translate(0)">
                            <rect id="Rectangle_512" data-name="Rectangle 512" width="7" height="7" transform="translate(0)" />
                            <rect id="Rectangle_516" data-name="Rectangle 516" width="7" height="6" transform="translate(0 11)" />
                            <rect id="Rectangle_518" data-name="Rectangle 518" width="7" height="7" transform="translate(0 21)" />
                            <rect id="Rectangle_513" data-name="Rectangle 513" width="18" height="7" transform="translate(11)" />
                            <rect id="Rectangle_517" data-name="Rectangle 517" width="18" height="6" transform="translate(11 11)" />
                            <rect id="Rectangle_519" data-name="Rectangle 519" width="18" height="7" transform="translate(11 21)" />
                        </g>
                    </svg>
                </label>
            </div>
            <div className="form-group mb-0">
                <input name="viewChange" type="radio" className="position-absolute invisible"
                    id="girdView" onChange={() => changeView('grid')} />
                <label htmlFor="girdView">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                        <g id="Group_9580" data-name="Group 9580" transform="translate(0)">
                            <rect id="Rectangle_512" data-name="Rectangle 512" width="12" height="12" transform="translate(0)" />
                            <rect id="Rectangle_515" data-name="Rectangle 515" width="12" height="12" transform="translate(0 16)" />
                            <rect id="Rectangle_513" data-name="Rectangle 513" width="12" height="12" transform="translate(16)" />
                            <rect id="Rectangle_514" data-name="Rectangle 514" width="12" height="12" transform="translate(16 16)" />
                        </g>
                    </svg>
                </label>
            </div>
        </div>
    )
}

export default ToggleButtons