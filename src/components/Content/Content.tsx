import { Layout, theme } from 'antd';
import Breadcrumb from '../Breadcrumb/BreadCrumb';
import * as styles from './styles';

interface ContentProps {
    children?: any,
    breadcrumbLabel?: String
}

const Content: React.FC<ContentProps> = (props: ContentProps) => {
    const { 
        token: { colorBgContainer }
    } = theme.useToken();

    return (
        <Layout.Content style={styles.content}>
            <Breadcrumb>{props.breadcrumbLabel}</Breadcrumb>

            <div style={{ background: colorBgContainer }}>{props.children}</div>
        </Layout.Content>
    );
}

export default Content;