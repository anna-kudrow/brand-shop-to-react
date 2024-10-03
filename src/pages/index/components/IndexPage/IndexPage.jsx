import { Bottom } from '../Bottom/Bottom';
import { Categories } from '../Categories/Categories';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Intro } from '../Intro/Intro';
import { Offers } from '../Offers/Offers';
import ProductsList from '../ProductsList/ProductsList';
import { Subscribe } from '../Subscribe/Subscribe';

export const IndexPage = () => {
  return (
    <>
        <Header/>
        <Intro/>
        <Categories/>
        <ProductsList/>
        <Offers/>
        <Subscribe/>
        <Bottom/>
        <Footer/>
    </>
  )
}
