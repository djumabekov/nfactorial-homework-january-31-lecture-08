import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

function Main() {
  return (
    <>
      <Header />
      <main className="main">
        <Content />
        <Content />
        <Content />
      </main>
      <Footer />
    </>
  );
}

export default Main;
