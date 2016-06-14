import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            course: Object.assign({},this.props.course),
            error:{}
        };
    }

    render(){
        return(
            <div>
                <CourseForm 
                    course={this.state.course} 
                    allAuthors={[]}
                    error={this.state.error}
                />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps){
    let course ={id:'', watchHref:'', title:'', authorId:'', length:'', category: ''};
    return {
        course: course
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);