import React from 'react';
import { Button, ButtonGroup } from 'react-lightning-design-system';
import Month from './Month';
import Week from './Week';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMonth: true,
            showWeek: false,
        };
        this.changeWeek = this.changeWeek.bind(this);
        this.changeMonth = this.changeMonth.bind(this);
    }

    renderMonth() {
        if (!this.state.showMonth) return null;
        return (<Month events={this.props.events} trainers={this.props.trainers} />);
    }

    renderWeek() {
        if (!this.state.showWeek) return null;
        return (<Week events={this.props.events} trainers={this.props.trainers} />);
    }

    changeMonth() {
        this.setState({ showMonth: true, showWeek: false });
    }

    changeWeek() {
        this.setState({ showMonth: false, showWeek: true });
    }

    render() {
        return (
            <div className="wrapper">
                <ButtonGroup className="changeView">
                    <Button type="neutral" onClick={this.changeMonth}>
                        month
                    </Button>
                    <Button type="neutral" onClick={this.changeWeek}>
                        week
                    </Button>
                </ButtonGroup>
                {this.renderMonth()}
                {this.renderWeek()}
            </div>
        );
    }
}
