import { Layout, Menu } from 'antd';
import * as styles from './styles';

const menuItems = ['Alimentos', 'Cardápio'].map((label, i) => ({ key: i + 1, label }))

const Header = () => (
    <Layout.Header style={styles.header}>
        <div style={styles.logo}></div>
        <Menu mode='horizontal' items={menuItems} theme='dark' />
    </Layout.Header>
);

export default Header;