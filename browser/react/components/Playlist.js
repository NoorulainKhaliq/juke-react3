import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Playlist extends Component {
    constructor() {
        super();
        this.state = {
            inputPlaylist: ""
        },
        this.handleChange = this.handleChange.bind(this);
        this.makePlaylist = this.makePlaylist.bind(this);
    }

  handleChange(event) {
    event.preventDefault();
    this.setState({inputPlaylist: event.target.value})
  }

  makePlaylist(event){
    event.preventDefault();
    console.log(this.state.inputPlaylist)
  }

    render() {
        return (
            <div className="well">
            <form className="form-horizontal" onSubmit={event=>this.makePlaylist(event)}>
              <fieldset>
                <legend>New Playlist</legend>
                <div className="form-group">
                  <label className="col-xs-2 control-label">Name</label>
                  <div className="col-xs-10">
                    <input className="form-control" type="text" onChange={event=>this.handleChange(event)}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-10 col-xs-offset-2">
                    <button type="submit" className="btn btn-success">Create Playlist</button>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        )
    }
}
