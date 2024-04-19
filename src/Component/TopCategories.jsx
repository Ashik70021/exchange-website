import image1 from '../assets/images/image 4.png'
import image2 from '../assets/images/image 6.png'
import image3 from '../assets/images/image 7.png'

const TopCategories = () => {
      return (

            <div>
                  <div className='mt-16 container mx-auto flex justify-between'>
                        <div className='ml-9 md:ml-20'>
                              <h1 className='text-2xl md:text-4xl font-bold text-[#FF4240]'>Top categories</h1>
                        </div>
                        <div className='mr-9 md:mr-20 text-lg md:text-xl'><p>View All</p></div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 mt-4 ml-8 md-ml-12">

                        <div className="m-4">
                              <img className='' src={image1} alt="" />
                        </div>
                        <div className="m-4">
                              <img className='' src={image2} alt="" />
                        </div>
                        <div className="m-4">
                              <img className='' src={image3} alt="" />
                        </div>
                        <div className="m-4">
                              <img className='' src={image1} alt="" />
                        </div>
                        <div className="m-4">
                              <img className='' src={image1} alt="" />
                        </div>
                        <div className="m-4">
                              <img className='' src={image2} alt="" />
                        </div>
                  </div>
            </div>
      );
};

export default TopCategories;