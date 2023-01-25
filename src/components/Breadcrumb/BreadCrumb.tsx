import { Breadcrumb } from 'antd';
import * as styles from './styles';
import React from 'react';

interface BraadcrumbProps {
    children?: String
}

const MyBreadcrumb: React.FC<BraadcrumbProps> = (props: BraadcrumbProps) => (
    <Breadcrumb style={styles.breadcrumb}>
        <Breadcrumb.Item>Diet Planner</Breadcrumb.Item>
        <Breadcrumb.Item>{props.children}</Breadcrumb.Item>
    </Breadcrumb>
);

export default MyBreadcrumb;