import image1 from '../assets/image/Rectangle4.png'
import image2 from '../assets/image/Rectangle26.png'
import image3 from '../assets/image/Rectangle27.png'
import image4 from '../assets/image/Rectangle28.png'
import image5 from '../assets/image/Rectangle29.png'
import image6 from '../assets/image/Rectangle30.png'
import image7 from '../assets/image/Rectangle31.png'
import image8 from '../assets/image/Rectangle7.png'
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div>
            <div className='mt-16 container mx-auto flex justify-between'>
                <div className='ml-9 md:ml-20'>
                    <h1 className='text-2xl md:text-4xl font-bold text-[#FF4240] underline underline-offset-8'>All categories</h1>
                </div>
                <div className='mr-9 md:mr-20 text-lg md:text-xl'><p>View All</p></div>
            </div>
            <div className="mt-4 lg:flex justify-around">
                <div>
                    {/* card */}
                    <div className="card lg:card-side bg-base-100 border border-[#FF4240] m-6 md:m-8">
                        <figure className="p-6 pb-0 lg:pb-6 pr-6 lg:pr-0"><img src={image1} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold text-[#131318]">Jacket for men</h2>
                            <p className="text-lg text-[#131318] opacity-60 pt-3 ">Dolor sit amet consectetur. Ut urnadiam <br /> quis sagittis. </p>
                            <p className="text-xl font-bold text-[#FF4240] ">Price - $22.00</p>
                            <div className="card-actions gap-4">
                                <Link to="/itemdetails"><button className="btn bg-[#FF4240] text-lg text-white">Make Deal</button></Link>
                                <Link to="/mycart"> <button className="btn bg-[#FF4240] text-lg text-white">Add to cart</button></Link>
                            </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card lg:card-side bg-base-100 border border-[#FF4240] m-6 md:m-8">
                        <figure className="p-6 pb-0 lg:pb-6 pr-6 lg:pr-0"><img src={image2} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold text-[#131318]">Jacket for men</h2>
                            <p className="text-lg text-[#131318] opacity-60 pt-3 ">Dolor sit amet consectetur. Ut urnadiam <br /> quis sagittis. </p>
                            <p className="text-xl font-bold text-[#FF4240] ">Price - $22.00</p>
                            <div className="card-actions gap-4">
                                <Link to="/itemdetails"><button className="btn bg-[#FF4240] text-lg text-white">Make Deal</button></Link>
                                <Link to="/mycart"> <button className="btn bg-[#FF4240] text-lg text-white">Add to cart</button></Link>
                            </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card lg:card-side bg-base-100 border border-[#FF4240] m-6 md:m-8">
                        <figure className="p-6 pb-0 lg:pb-6 pr-6 lg:pr-0"><img src={image3} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold text-[#131318]">Jacket for men</h2>
                            <p className="text-lg text-[#131318] opacity-60 pt-3 ">Dolor sit amet consectetur. Ut urnadiam <br /> quis sagittis. </p>
                            <p className="text-xl font-bold text-[#FF4240] ">Price - $22.00</p>
                            <div className="card-actions gap-4">
                                <Link to="/itemdetails"><button className="btn bg-[#FF4240] text-lg text-white">Make Deal</button></Link>
                                <Link to="/mycart"> <button className="btn bg-[#FF4240] text-lg text-white">Add to cart</button></Link>
                            </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card lg:card-side bg-base-100 border border-[#FF4240] m-6 md:m-8">
                        <figure className="p-6 pb-0 lg:pb-6 pr-6 lg:pr-0"><img src={image4} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold text-[#131318]">Jacket for men</h2>
                            <p className="text-lg text-[#131318] opacity-60 pt-3 ">Dolor sit amet consectetur. Ut urnadiam <br /> quis sagittis. </p>
                            <p className="text-xl font-bold text-[#FF4240] ">Price - $22.00</p>
                            <div className="card-actions gap-4">
                                <Link to="/itemdetails"><button className="btn bg-[#FF4240] text-lg text-white">Make Deal</button></Link>
                                <Link to="/mycart"> <button className="btn bg-[#FF4240] text-lg text-white">Add to cart</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div>
                    {/* card */}
                    <div className="card lg:card-side bg-base-100 border border-[#FF4240] m-6 md:m-8">
                        <figure className="p-6 pb-0 lg:pb-6 pr-6 lg:pr-0"><img src={image5} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold text-[#131318]">Jacket for men</h2>
                            <p className="text-lg text-[#131318] opacity-60 pt-3 ">Dolor sit amet consectetur. Ut urnadiam <br /> quis sagittis. </p>
                            <p className="text-xl font-bold text-[#FF4240] ">Price - $22.00</p>
                            <div className="card-actions gap-4">
                                <Link to="/itemdetails"><button className="btn bg-[#FF4240] text-lg text-white">Make Deal</button></Link>
                                <Link to="/mycart"> <button className="btn bg-[#FF4240] text-lg text-white">Add to cart</button></Link>
                            </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card lg:card-side bg-base-100 border border-[#FF4240] m-6 md:m-8">
                        <figure className="p-6 pb-0 lg:pb-6 pr-6 lg:pr-0"><img src={image6} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold text-[#131318]">Jacket for men</h2>
                            <p className="text-lg text-[#131318] opacity-60 pt-3 ">Dolor sit amet consectetur. Ut urnadiam <br /> quis sagittis. </p>
                            <p className="text-xl font-bold text-[#FF4240] ">Price - $22.00</p>
                            <div className="card-actions gap-4">
                                <Link to="/itemdetails"><button className="btn bg-[#FF4240] text-lg text-white">Make Deal</button></Link>
                                <Link to="/mycart"> <button className="btn bg-[#FF4240] text-lg text-white">Add to cart</button></Link>
                            </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card lg:card-side bg-base-100 border border-[#FF4240] m-6 md:m-8">
                        <figure className="p-6 pb-0 lg:pb-6 pr-6 lg:pr-0"><img src={image7} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold text-[#131318]">Jacket for men</h2>
                            <p className="text-lg text-[#131318] opacity-60 pt-3 ">Dolor sit amet consectetur. Ut urnadiam <br /> quis sagittis. </p>
                            <p className="text-xl font-bold text-[#FF4240] ">Price - $15.00</p>
                            <div className="card-actions gap-4">
                                <Link to="/itemdetails"><button className="btn bg-[#FF4240] text-lg text-white">Make Deal</button></Link>
                                <Link to="/mycart"> <button className="btn bg-[#FF4240] text-lg text-white">Add to cart</button></Link>
                            </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card lg:card-side bg-base-100 border border-[#FF4240] m-6 md:m-8">
                        <figure className="p-6 pb-0 lg:pb-6 pr-6 lg:pr-0"><img src={image8} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-bold text-[#131318]">Jacket for men</h2>
                            <p className="text-lg text-[#131318] opacity-60 pt-3 ">Dolor sit amet consectetur. Ut urnadiam <br /> quis sagittis. </p>
                            <p className="text-xl font-bold text-[#FF4240] ">Price - $22.00</p>
                            <div className="card-actions gap-4">
                                <Link to="/itemdetails"><button className="btn bg-[#FF4240] text-lg text-white">Make Deal</button></Link>
                                <Link to="/mycart"> <button className="btn bg-[#FF4240] text-lg text-white">Add to cart</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-dashed mt-16"></hr>
        </div>
    );
};

export default Categories;