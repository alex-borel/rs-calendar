import React from 'react';
import { TableRow, TableRowColumn } from 'react-lightning-design-system';
import RowColumnWeek from './RowColumnWeek';

export default class RowWeek extends React.Component {
    render() {
        return (
            <TableRow>
                <TableRowColumn>
                    {this.props.time}
                </TableRowColumn>
                {[0, 1, 2, 3, 4, 5, 6].map((e, i) =>
                    <RowColumnWeek key={i}
                    events={this.props.events}
                    week={this.props.week}
                    trainers={this.props.trainers}
                    day={e}
                    time={this.props.time}
                    clickFunction={this.props.clickFunction} />)}
            </TableRow>
        );
    }
}
