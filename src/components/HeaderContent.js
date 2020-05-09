import React, {Component} from 'react';
import { Menu } from 'antd';

import '../App.css';

import { menus } from '../data.json';

class HeaderContent extends Component
{
    constructor() {
        super();
        this.state = {
            menus: menus,
        };
    }

    render() {
        const menus = this.state.menus.map((menu) => {
            return (
                <Menu.Item key={ menu.key }>{ menu.title }</Menu.Item>
            )
        });

        return (
            <React.Fragment>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>{ menus }</Menu>
            </React.Fragment>
        )
    }
}

export default HeaderContent;