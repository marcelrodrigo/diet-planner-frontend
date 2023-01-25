import { Layout, Menu } from 'antd';
import styles from './MainPageStyles';

const { Header, Content } = Layout;
const menuItems = ['Alimentos', 'Cardápio'].map((label, i) => ({ key: i + 1, label }))

const MainPage = () => (
    <Layout>
        <Header style={styles.header}>
            <div style={styles.logo}></div>
            <Menu mode='horizontal' items={menuItems} theme='dark' />
        </Header>
    </Layout>
)

export default MainPage;