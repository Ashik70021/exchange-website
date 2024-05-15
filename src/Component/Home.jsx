import TopCategories from "./TopCategories";
import Banner from "./Banner";
import Categories from "./Categories";
import Tagline from "./Tagline";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tagline></Tagline>
            <Categories></Categories>
            <TopCategories></TopCategories>
        </div>
    );
};

export default Home;