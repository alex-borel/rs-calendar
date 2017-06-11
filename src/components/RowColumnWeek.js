import React from 'react';
import { TableRowColumn } from 'react-lightning-design-system';
import Event from './Event'

export default class RowColumnWeek extends React.Component {
    render() {
        return (
            <TableRowColumn>
                {this.props.events.map((e, i) =>
                    ((new Date(e.start).getWeek() == this.props.week) &&
                    (new Date(e.start).getHours() == this.props.time) &&
                    (new Date(e.start).getDay() == this.props.day)) &&
                    <Event event={e} trainers={this.props.trainers} key={i} clickFunction={this.props.clickFunction} />)}
            </TableRowColumn>
        );
    }
}
