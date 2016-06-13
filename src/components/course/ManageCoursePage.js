import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component{
    constructor(props,context){
        super(props,context);
    }

    render(){
        return(
            <div>
                <h2>manage course {this.props.params.id}</h2>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);