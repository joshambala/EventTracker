import React from 'react';
import ReactDOM from 'react-dom';

class AddEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newEvent: ''
    }

    this.updateNewEvent = this.updateNewEvent.bind(this)
    this.handleAddNewEvent = this.handleAddNewEvent.bind(this)
  }
  updateNewEvent(e) {
    this.setState({
      newEvent: e.target.value
    })
  }
  handleAddNewEvent() {
    this.props.addNewEvent(this.state.newEvent)
    this.setState({
      newEvent: ''
    })
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="name of event"
          value={this.state.newEvent}
          onChange={this.updateNewEvent}
        />
        <br />
        <button onClick={this.handleAddNewEvent}> Add Event </button>
      </div>
    )
  }
}

class AddDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newDetails: ''
    }

    this.updateNewDetails = this.updateNewDetails.bind(this)
    this.handleAddNewDetails = this.handleAddNewDetails.bind(this)
  }
  updateNewDetails(e) {
    this.setState({
      newDetails: e.target.value
    })
  }
  handleAddNewDetails() {
    this.props.addNewDetails(this.state.newDetails)
    this.setState({
      newDetails: ''
    })
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="details of the event"
          value={this.state.newDetails}
          onChange={this.updateNewDetails}
        />
        <br />
        <button onClick={this.handleAddNewDetails}> Add Details </button>
      </div>
    )
  }
}
class AddInvitee extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newInvitee: ''
    }

    this.updateNewInvitee = this.updateNewInvitee.bind(this)
    this.handleAddNew = this.handleAddNew.bind(this)
  }
  updateNewInvitee(e) {
    this.setState({
      newInvitee: e.target.value
    })
  }
  handleAddNew() {
    this.props.addNew(this.state.newInvitee)
    this.setState({
      newInvitee: ''
    })
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="name of person to invite"
          value={this.state.newInvitee}
          onChange={this.updateNewInvitee}
        />
        <br />
        <button onClick={this.handleAddNew}> Add Invitee </button>
      </div>
    )
  }
}

class ShowEvent extends React.Component {
  render() {
    return (
      <div>
        <h3>Event Name:</h3> 
        <ul> 
          {this.props.names.map((eventnames) => {
            return <li> {eventnames} </li>
          })}
        </ul>
      </div>
    )
  }
}

class ShowDetails extends React.Component {
  render() {
    return (
      <div>
        <h3>Details:</h3> 
        <ul> 
          {this.props.names.map((details) => {
            return <li> {details} </li>
          })}
        </ul>
      </div>
    )
  }
}

class ShowInvitee extends React.Component {
  render() {
    return (
      <div>
        <h3>Invitees:</h3>
        <ol>
          {this.props.names.map((invitees) => {
            return <li> {invitees} </li>
          })}
        </ol>      
      </div>
    )
  }
}

class EventContainer extends React.Component {
constructor(props) {
  super(props);

  this.state = {
      eventnames: [],
      details: [],
      invitees: []
  }

/*
  
  this.addEvent = this.addEvent.bind(this)
}
  addEvent(eventname) {
    this.setState((state) => ({
      eventnames: state.eventname.concat([eventname])
    }))
  
  this.addDetails = this.addDetails.bind(this)
}

  addDetails(detail) {
    this.setState((state) => ({
      details: state.details.concat([detail])
    })) 

*/

  this.addInvitee = this.addInvitee.bind(this)
} 
  addInvitee(invitee) {
    this.setState((state) => ({
      invitees: state.invitees.concat([invitee])
    }))
  } 
  render() {
    return (
      <div> 
        <h1> Create An Event </h1>
        <AddEvent addNewEvent={this.addEvent} />
        <AddDetails addNewDetails={this.addDetails} />
        <AddInvitee addNew={this.addInvitee} />
        <ShowEvent names={this.state.eventnames} />
        <ShowDetails names={this.state.details} />
        <ShowInvitee names={this.state.invitees} />
      </div>
      )
    }
  }

ReactDOM.render(<EventContainer />, document.getElementById('root'));