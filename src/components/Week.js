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
import RowWeek from './RowWeek';
import ModalWindow from './ModalWindow';

export default class Week extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModal: false,
            isEvent: null,
            isWeek: 30,
        };
        this.handleClick = this.handleClick.bind(this);
        this.closeClick = this.closeClick.bind(this);
        this.nextWeek = this.nextWeek.bind(this);
        this.prevWeek = this.prevWeek.bind(this);
        this.nowWeek = this.nowWeek.bind(this);
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

    nowWeek() {
        this.setState({ isWeek: new Date().getWeek() });
    }

    nextWeek() {
        this.setState({
            isWeek: this.state.isWeek + 1,
        });
    }

    prevWeek() {
        this.setState({
            isWeek: this.state.isWeek - 1,
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
                    <Button type="neutral" onClick={this.prevWeek}>
                        prev
                    </Button>
                    <Button type="neutral" onClick={this.nextWeek}>
                        next
                    </Button>
                    <Button type="neutral" onClick={this.nowWeek}>
                        today
                    </Button>
                    <span className="countWeek">
                        {this.state.isWeek}/52
                    </span>
                </ButtonGroup>
                <Table bordered verticalBorders fixedLayout className="calendar week">
                    <TableHeader>
                        <TableRow>
                            {[
                                ' ',
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
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map((e, i) =>
                            <RowWeek key={i}
                            events={this.props.events}
                            trainers={this.props.trainers}
                            week={this.state.isWeek}
                            time={e}
                            clickFunction={(e, ev) => this.handleClick(e, ev)} />)}
                    </TableBody>
                </Table>
                {this.renderModal()}
            </div>
        );
    }
}
