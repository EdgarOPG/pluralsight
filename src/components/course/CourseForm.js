import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, error}) => {
    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange ={onChange}
                error={error.title} />
            <SelectInput 
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption = "Select Author"
                options = {allAuthors}
                onChange={onChange}
            />
            <TextInput
                name="category"
                label="Category"
                value={course.category}
                onChange ={onChange}
                error={error.title} />
            <TextInput
                name="length"
                label="length"
                value={course.length}
                onChange ={onChange}
                error={error.title} />
        </form>
    );
};

CourseForm.PropTypes={
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array.isRequired,
    onSave: PropTypes.func,
    onChange: PropTypes.func,
    loading: PropTypes.boolean,
    error: PropTypes.object
};

export default CourseForm;