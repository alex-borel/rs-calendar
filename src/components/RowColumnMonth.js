import React from 'react';
import {TableRowColumn} from 'react-lightning-design-system';
import Event from './Event';

export default class RowColumn extends React.Component {
    render() {
        return (
            <TableRowColumn>
                <span className="day">
                    {((this.props.day + this.props.week * 7 - this.props.firstday) <= this.props.days
                        && (this.props.day + this.props.week * 7 - this.props.firstday) > 0)
                        ? (this.props.day + this.props.week * 7 - this.props.firstday)
                        : null}
                </span><br />
                {this.props.events.map((e, i) => ((new Date(e.start).getMonth() === this.props.month)
                    && (new Date(e.start).getDate() === (this.props.week * 7 + this.props.day - this.props.firstday)))
                    && <Event trainers={this.props.trainers} event={e} key={i} clickFunction={this.props.clickFunction} />)}
            </TableRowColumn>
        );
    }
}
