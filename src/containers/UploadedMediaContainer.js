import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from '../actions/index';
import UploadedMedia from '../components/UploadedMedia';

class UploadedMediaContainer extends Component {

    render() {
        return <UploadedMedia media={this.props.media.data}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(UploadedMediaContainer);
