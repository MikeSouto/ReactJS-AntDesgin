import React, {Component} from 'react';
import { Layout, Menu, Row, Col } from 'antd';

import './App.css';

import HeaderContent from './components/HeaderContent';
import Wrapper from './components/Wrapper';

const { Header, Content } = Layout;

class App extends Component {
    render() {
        return (
            <Layout>
                <Header>
                    <HeaderContent />
                </Header>
                <Content>
                    <div className="site-layout-content">
                        <Row>
                            <Col md={12} offset={3}>
                                <Wrapper />
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
        )
    }
}

export default App;
