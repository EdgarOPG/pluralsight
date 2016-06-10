import React, {PropTypes} from 'react';

const CourseListRow =({course}) => {
        return(
            <tr>
                <td>{course.title}</td>
                <td>{course.watchHref}</td>
                <td>{course.authorId}</td>
                <td>{course.length}</td>
                <td>{course.category}</td>
            </tr>
        );
};

CourseListRow.PropTypes = {
    course: PropTypes.array.isRequired
};

export default CourseListRow;