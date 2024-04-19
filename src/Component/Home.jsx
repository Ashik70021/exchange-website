import Banner from "./Banner";
import Categories from "./Categories";
import Tagline from "./Tagline";
import TopCategories from "./TopCategories";

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