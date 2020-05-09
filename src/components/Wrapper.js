import React, {Component} from 'react';
import { PageHeader, Paragraph, Row, Col, Typography, Table, Tag } from 'antd';

import TaskForm from './TaskForm';

const { Column } = Table;

class Wrapper extends Component
{
    constructor() {
        super();
        this.state = {
            tasks: [],
        };
        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleAddTask(task) {
        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }

    render() {
        var backTicks = `
            A,
            B,
            C,
            D,
            ${10 + 15},
            E,
            F,

        `;
        return (
            <React.Fragment>
                <Row>
                    <Typography.Title>List of tasks</Typography.Title>
                </Row>
                <Row>
                    <Col md={6}>
                        <TaskForm onAddTask={this.handleAddTask} />
                    </Col>
                    <Col md={6} offset={2}>
                        <Table dataSource={this.state.tasks}>
                            <Column title="Title" dataIndex="title" key="title" />
                            <Column
                              title="Priority"
                              dataIndex="priority"
                              key="priority"
                              render={priority => {
                                    var color = 'blue';

                                    if (priority === 'Medium') {
                                        color = 'orange';
                                    }
                                    else if (priority === 'High') {
                                        color = 'red';
                                    }
                                    return (<Tag color={color} key={priority}>{priority}</Tag>);
                                }}
                            />
                            <Column title="Description" dataIndex="description" key="description" />
                        </Table>
                    </Col>
                    <Col md={4} offset={2}>
                        <Typography.Paragraph>Using back ticks</Typography.Paragraph>
                        <Typography.Paragraph>{backTicks}</Typography.Paragraph>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Wrapper;