import React, {Component} from 'react';
import { Form, Input, Select, Button } from 'antd';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class TaskForm extends Component
{
    form = React.createRef();

    onFinish = values => {
        if (values.title !== "" && values.priority !== "") {
            this.props.onAddTask({
                title: values.title,
                description: values.description,
                priority: values.priority
            });
        }

        console.log(this.state);
    }

    render() {
        return (
            <React.Fragment>
                <Form name="control-hooks"
                    layout="vertical"
                    onFinish={this.onFinish}>
                    <Form.Item name="title" label="Title" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="description" label="Description" rules={[{ required: false }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="priority" label="Priority" rules={[{ required: true }]}>
                        <Select
                            placeholder="Select the priority"
                            allowClear
                        >
                            <Option value="Low">Low</Option>
                            <Option value="Medium">Medium</Option>
                            <Option value="High">High</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>Submit</Button>
                    </Form.Item>
                </Form>
            </React.Fragment>
        )
    }
}

export default TaskForm;