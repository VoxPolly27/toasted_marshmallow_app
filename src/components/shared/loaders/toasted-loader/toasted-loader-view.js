import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

import GridContainer from 'components/shared/containers/grid/grid';
import { darkTheme } from 'components/theme';

/**
 * Responsible for rendering the toasted loader
 * @augments {Component<Props, State>}
 */
class ToastedLoader extends Component {

    render() {

        var {
            data_width,
            data_height,
        } = this.props;

        let translation = `translate($50%,50%)`;


        return (
            <Fragment>
                <GridContainer style={grid_template}>
                    <svg background={darkTheme.tm_dark} className="loader tm-bg-primary" height={data_height} width={data_width}>
                        <defs>
                            <filter id="glow" filterUnits="userSpaceOnUse">
                                <feOffset input="SourceAlpha" />
                                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                <feFlood floodColor="#842E5D" />
                                <feComposite operator="in" in2="coloredBlur" />
                                <feComposite in="SourceGraphic" />
                                <femerge>
                                    <femergenode in="coloredBlur"></femergenode>
                                    <femergenode in="coloredBlur"></femergenode>
                                    <femergenode in="coloredBlur"></femergenode>
                                    <femergenode in="SourceGraphic"></femergenode>
                                </femerge>
                            </filter>
                        </defs>
                        <path pathLength="1" height={data_height} transform={translation} filter='url(#glow)' d="M168.03 55.57C168.08 66.11 165.16 75.31 160.14 82.74C159.75 83.74 159.27 84.92 158.48 86.7C157.39 88.82 156.72 90.61 156.52 91.05C155.65 93.27 155.16 95.11 155.01 95.56C154.37 97.86 154.07 99.74 153.96 100.21C152.77 106.21 152.75 111.37 152.72 117.08C152.72 134.61 168.28 151 185.95 151C190.52 150.99 192.76 151.09 198.81 147.32C205.39 142.91 206.86 134.05 206.88 126.31C206.89 118.67 204.11 111.28 199.02 105.48C199.27 105.15 199.5 104.85 199.76 104.51C215.75 111.31 229.75 121.72 241.6 134.02C257.65 153.87 265.87 176.34 265.92 201.8C265.92 271.92 208.64 328.76 138 328.76C67.35 328.76 10.08 271.91 10.08 201.79C10.08 161.22 32.64 128.25 57.91 101.26C86.7 68.23 113.73 50.97 119.42 36.17C120.06 33.88 120.37 31.99 120.47 31.53C120.88 29.18 120.99 27.28 121.05 26.8C121.17 25.12 121.16 23.77 121.17 23.43C121.17 21.05 120.95 19.16 120.93 18.68C120.69 16.31 120.28 14.45 120.21 13.98C119.74 11.64 119.14 9.83 119.03 9.37C118.79 8.69 118.58 8.16 118.53 8.03C119.04 8 119.55 7.97 120.06 7.95C146.56 7.96 168.03 29.27 168.03 55.57Z" />
                    </svg>
                </GridContainer>
            </Fragment>
        );
    }
}

export default ToastedLoader;

ToastedLoader.propTypes = {
        data_width: PropTypes.number,
        data_height : PropTypes.number
}

const grid_template = {
    gridTemplateColumns: '1',
    gridTemplateRows: 'repeat(1, 100vh)',
    width: '100vw',
    height: 'auto',
    overflow: 'hidden',
}
