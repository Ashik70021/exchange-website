import image from '../assets/image/24488233.jpg'
const ItemDetails = () => {
    return (
        <div className='mt-24 container mx-auto  grid grid-cols-1 md:grid-cols-2'>
            <div className=' mx-auto p-16'>
                <img className='rounded-xl' src={image} alt="" />
            </div>
            <div className='p-16 bg-[#F4F3F3] rounded-xl'>
                <div className='text-3xl font-medium space-y-14 '>
                    <h1>Products: <span className='font-normal'>Book</span></h1>
                    <h1>Name: <span className='font-normal'>The Girl Without A Name</span></h1>
                    <h1>Description: <span className='font-normal'>A young African American girl, found wandering the streets of Buffalo in a catatonic state, is brought in by police.
                    </span></h1>
                    <h1>Exchange with: <span className='font-normal'>T-shirt  or  The Friend Book</span></h1>
                    <h1>or Price: <span className='font-normal'>500 BDT</span></h1>
                    <h1>Phone Number: <span className='font-normal'>+88 01620 003700</span></h1>
                    <h1>Products: <span className='font-normal'>Mirpur-10, Dhaka 1216</span></h1>

                </div>
                <button className='mt-8 btn bg-[#FF4240] w-full text-2xl text-white font-bold'>Send Request</button>
            </div>
        </div>
    );
};

export default ItemDetails;