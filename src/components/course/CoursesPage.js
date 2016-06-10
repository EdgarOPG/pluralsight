import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList'; 

class CoursesPage extends React.Component {
    constructor(props, context){
        super(props,context);
    }
    

    coursRow(course, index){
        return (
            <div key={index}>
                {course.title}
            </div>
        );
    }
    
    render(){
        return (
            <div>
                <h1>Courses !!</h1>
                    <CourseList courses={this.props.courses} />       
            </div>
        );
    }
}

CoursesPage.propTypes ={
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        courses: state.courses
    };
}

//** manually connnect **//
/*function mapDispatchToProps(dispatch){
    return {
        createCourse: course=> dispatch(courseActions.createCourse(course))
    };
}*/

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);