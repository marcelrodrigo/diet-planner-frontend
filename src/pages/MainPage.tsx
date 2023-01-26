import { Layout } from 'antd';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Content from '../components/Content';

const MainPage = () => {
    return (
        <Layout>
            <Header />
            <Content>
                Hello
            </Content>
            <Footer />
        </Layout>
    );
}

export default MainPage;