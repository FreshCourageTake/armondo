import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from "../actions/index";

class UploadMedia extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.props.fetchMedia(1);
    }

    handleChange(event) {
        this.setState({file: event.target.files[0]});
    };

    async handleSubmit(event) {
        event.preventDefault();

        try {
            var res = await this.props.uploadMedia(this.state.file)
        } catch(e) {
            console.log(e);
        }

        this.setState({file: null});
        this.refs.uploadFileInput.value = '';
    };

    render() {
        return (
            <div>
                <h1>Upload your media here</h1>
                <form>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={this.handleChange}
                        ref="uploadFileInput"
                    />
                    <button
                        type="submit"
                        onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        media: state.media
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadMedia);
