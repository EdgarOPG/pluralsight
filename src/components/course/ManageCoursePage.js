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
        this.updateCourseState = this.updateCourseState.bind(this);
    }

    updateCourseState(event){
        const field  = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({course: course});
    }

    render(){
        return(
            <div>
                <CourseForm 
                    course={this.state.course} 
                    allAuthors={this.props.authors}
                    error={this.state.error}
                    onChange={this.updateCourseState}
                />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    let course ={id:'', watchHref:'', title:'', authorId:'', length:'', category: ''};
    const formatAuthorsOptions = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' '+ author.lastName
        };
    });

    return {
        course: course,
        authors: formatAuthorsOptions
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);