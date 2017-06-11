import React from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter, Button } from 'react-lightning-design-system';

export default class ModalWindow extends React.Component {
    render() {
        return (
            <Modal opened size="large">
                <ModalHeader title={this.props.event.type + ' ' + this.props.event.title} />
                <ModalContent>
                    <div>
                        <p>
                            <b>Description:</b>{this.props.event.description}
                        </p>
                        <p>
                            <b>Duration:</b>{Math.round(this.props.event.duration / (1000 * 60 * 60))}
                            hours
                        </p>
                        <p>
                            <b>Location:</b>{this.props.event.location}</p>
                        <p>
                            <b>Start:</b>
                            {new Date(this.props.event.start).getHours()}
                            {this.props.event.start.slice(13, 16)}
                        </p>
                        <p>
                            <b>Resources for event:</b>
                        </p>
                        <div>
                            {this.props.event.resources.map((res, i) =>
                                <div key={i}>
                                <a className="top" href={res.resource}>{res.type}
                                    :
                                </a>
                                <span>
                                    {res.description}</span>
                            </div>)
}
                        </div>
                        <div className="speakers">
                            {this.props.event.speakers.map((id) =>
                                <div key={id} className="speaker">
                                <img src={this.props.trainers.filter(t => t.id === id)[0].avatar} />
                                <p>{this.props.trainers.filter(t => t.id === id)[0].name}</p>
                            </div>)
}
                        </div>
                    </div>
                </ModalContent>
                <ModalFooter directional={false}>
                    <Button type="neutral" label="Ok" onClick={() => this.props.closeModal()} />
                </ModalFooter>
            </Modal>
        );
    }
}
