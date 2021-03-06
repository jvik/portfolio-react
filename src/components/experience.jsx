import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import PropTypes from 'prop-types';

class Experience extends Component {
	render() {
		return (
			<Grid>
				<Cell col={2}>
					<p>
						{this.props.startYear} - {this.props.endYear}
					</p>
				</Cell>

				<Cell col={10}>
					<h4 style={{ marginTop: '0px', marginBottom: '2px' }}>{this.props.workplaceName}</h4>
					<h5 style={{ marginTop: '0px', paddingTop: '0px' }}>{this.props.workplaceTitle}</h5>
					<p>{this.props.workplaceDescription}</p>
				</Cell>
			</Grid>
		);
	}
}

Experience.propTypes = {
	startYear: PropTypes.number,
	endYear: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	workplaceName: PropTypes.string,
	workplaceTitle: PropTypes.string,
	workplaceDescription: PropTypes.string,
};

export default Experience;
