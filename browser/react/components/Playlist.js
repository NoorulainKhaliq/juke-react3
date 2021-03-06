import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Playlist extends Component {
    constructor(props) {
      console.log(props)
        super(props);
        this.state = {
            inputPlaylist: "",
            dirtyInput: false
        },
        this.handleChange = this.handleChange.bind(this);
        this.handlSubmit = this.handleSubmit.bind(this);
    }

  handleChange(event) {
    event.preventDefault();
    this.setState({dirtyInput: true})
    this.setState({inputPlaylist: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    // console.log(this.state.inputPlaylist)
    this.setState({inputPlaylist: ""})
    this.setState({dirtyInput: false})
    // axios.post('/api/playlists', {name: this.state.inputPlaylist})
    // .then(res => res.data)
    // .then(result => {
    //   console.log(result) // response json from the server!
    // });
  }

    render() {
        return (
            <div className="well">
            <form
            className="form-horizontal"
            onSubmit={event=>this.handleSubmit(event)}>

              <fieldset>
                <legend>New Playlist</legend>
                <div className="form-group">
                  <label className="col-xs-2 control-label">Name</label>
                  <div className="col-xs-10">

                  <input
                    className="form-control"
                    type="text"
                    value={this.state.inputPlaylist}
                    onChange={event=>this.handleChange(event)}/>

                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-10 col-xs-offset-2">

                    <button
                    disabled={!this.state.inputPlaylist || this.state.inputPlaylist.length > 16}
                    type="submit"
                    className="btn btn-success">Create Playlist
                    </button>

                  </div>
                </div>
              </fieldset>
            </form>
            {(this.state.dirtyInput && (!this.state.inputPlaylist || this.state.inputPlaylist.length > 16)) ? (<div className="alert alert-warning">Please enter a name</div>) : <div></div>}
          </div>
        )
    }
}
