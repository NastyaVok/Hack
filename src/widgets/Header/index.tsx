
import React from 'react';
import { Layout } from 'antd';
import { Navigation } from './ui/navigation';
import { Menu } from './ui/menu';

const { Header } = Layout;

export const HeaderWidget = () => {

      return (
        <Layout className="layout">
          <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="demo-logo" />
            <Menu />
            <Navigation />
          </Header>
        </Layout>
      );
};

