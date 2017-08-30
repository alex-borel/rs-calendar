import React from 'react';
import {
    Table,
    TableRow,
    TableHeader,
    TableHeaderColumn,
    TableBody,
    Button,
    ButtonGroup,
} from 'react-lightning-design-system';
import RowMonth from './RowMonth';
import ModalWindow from './ModalWindow';

export default class Month extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModal: false,
            isEvent: null,
            isYear: 2017,
            isMonth: 4,
        };
        this.handleClick = this.handleClick.bind(this);
        this.closeClick = this.closeClick.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.prevMonth = this.prevMonth.bind(this);
        this.nowMonth = this.nowMonth.bind(this);
    }

    handleClick(e, event) {
        if (!this.state.isModal && event) {
            this.setState({ isModal: true, isEvent: event });
        }
        if (e.target.classList.contains('slds-modal__container') || e.target.classList.contains('slds-modal')) {
            this.closeClick();
        }
    }

    closeClick() {
        this.setState({ isModal: false });
    }

    nowMonth() {
        this.setState({ isMonth: new Date().getMonth() });
    }

    nextMonth() {
        this.setState({
            isMonth: this.state.isMonth + 1,
        });
    }

    prevMonth() {
        this.setState({
            isMonth: this.state.isMonth - 1,
        });
    }

    renderModal() {
        if (!this.state.isModal) return null;
        return (<ModalWindow closeModal={() => this.closeClick()} trainers={this.props.trainers} event={this.state.isEvent} />);
    }

    render() {
        return (
            <div>
                <ButtonGroup>
                    <Button type="neutral" onClick={this.prevMonth}>
                        prev
                    </Button>
                    <Button type="neutral" onClick={this.nextMonth}>
                        next
                    </Button>
                    <Button type="neutral" onClick={this.nowMonth}>
                        today
                    </Button>
                    <span className="countWeek">
                        {new Date(this.state.isYear, this.state.isMonth).getMonthName() + ' ' + new Date(this.state.isYear, this.state.isMonth).getFullYear()}
                    </span>
                </ButtonGroup>
                <Table bordered verticalBorders fixedLayout className="calendar">
                    <TableHeader>
                        <TableRow>
                            {[
                                'SUN',
                                'MON',
                                'TUE',
                                'WED',
                                'THU',
                                'FRI',
                                'SAT',
                            ].map((e, i) =>
                            <TableHeaderColumn key={i}>
                                {e}
                            </TableHeaderColumn>)}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {[0, 1, 2, 3, 4].map((e, i) =>
                        <RowMonth key={i}
                        days={new Date(this.state.isYear, this.state.isMonth).daysInMonth()}
                        firstday={new Date(this.state.isYear, this.state.isMonth).getDay()}
                        week={e}
                        events={this.props.events}
                        trainers={this.props.trainers}
                        month={this.state.isMonth}
                        clickFunction={(e, ev) => this.handleClick(e, ev)} />)}
                    </TableBody>
                </Table>
                {this.renderModal()}
            </div>
        );
    }
}
