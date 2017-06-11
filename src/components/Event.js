import React from 'react';
import { Icon } from 'react-lightning-design-system';

export default class Event extends React.Component {
    renderIcon() {
        if (this.props.event.type === 'event') {
            return <Icon category="utility" icon="event" size="small" />;
        } else if (this.props.event.type === 'deadline') {
            return <Icon category="utility" icon="warning" size="small" />;
        } else if (this.props.event.type === 'webinar') {
            return <Icon category="utility" icon="questions_and_answers" size="small" />;
        } else if (this.props.event.type === 'workshop') {
            return <Icon category="utility" icon="desktop" size="small" />;
        } else if (this.props.event.type === 'lecture') {
            return <Icon category="utility" icon="announcement" size="small" />;
        } else {
            return null;
        }
    }

    render() {
        return (
            <div onClick={(e) => this.props.clickFunction(e, this.props.event)} className="eventInfo">
                {this.renderIcon()}
                <span className="eventType">{this.props.event.type + ' ' + this.props.event.title}</span>
            </div>

        );
    }
}
