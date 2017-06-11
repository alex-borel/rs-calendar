import React from 'react';
import { TableRow } from 'react-lightning-design-system';
import RowColumnMonth from './RowColumnMonth';

export default class RowMonth extends React.Component {
    render() {
        return (
            <TableRow>
                {[1, 2, 3, 4, 5, 6, 7].map((e, i) =>
                    <RowColumnMonth key={i}
                    trainers={this.props.trainers}
                    events={this.props.events}
                    days={this.props.days}
                    firstday={this.props.firstday}
                    day={e}
                    week={this.props.week}
                    month={this.props.month}
                    clickFunction={this.props.clickFunction} />)}
            </TableRow>
        );
    }
}
