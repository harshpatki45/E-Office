import React from 'react';
import indoreImage from '../Assets/downloadindore.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Department = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <div
      className="h-screen w-full bg-cover bg-center brightness-75"
      style={{
        backgroundImage: `url(${indoreImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        marginTop: 150,
      }}
    >
        <div className="w-3/4 m-auto mt-24">
        <div className="mt-50">
            <Slider {...settings}>
            {data.map((d) => (
                <div className="bg-white h-[480px] text-black rounded-xl">
                    <div className=" h-56 rounded-t-xl flex justify-center items-center">
                        <img src={d.img} alt="" className="h-44 w-64 object-cover" />
                    </div>

                    <div className="flex flex-col justify-center items-center gap-4 p-4">
                        <p className="text-xl font-bold font-sans">{d.dept}</p>
                        <p className="text-sm font-semibold font-sans">{d.review}</p>
                    </div>

                </div>
            ))}
            </Slider>

        </div>

        </div>
      
    </div>
  );
}

const data = [

    {
        dept: `Planning and IT Department`,
        img: require('../Assets/Department/image7.png'),
        review: `Planning Department focuses on the physical and strategic development of the city, ensuring orderly growth and sustainable development. Meanwhile, the IT Department leverages technology to enhance municipal services, improve efficiency, and support smart city initiatives, thereby contributing to making Indore a more livable and citizen-friendly city.`
    },
    {
        dept: `Public Works and Garden Department`,
        img: require('../Assets/Department/image6.png'),
        review: `Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance`
    },

    {
        dept: `Water Works and Sewage Department`,
        img: require('../Assets/Department/image4.png'),
        review: ` Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance.`
    },

    {
        dept: `Revenue Department`,
        img: require('../Assets/Department/image12.png'),
        review: `Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. `
    },

    {
        dept: `Cleanliness and Solid Waste Management Department`,
        img: require('../Assets/Department/image1.png'),
        review: `Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. `
    },

    {
        dept: `General Administration Department `,
        img: require('../Assets/Department/image13.png'),
        review: `Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. `
    },

    {
        dept: `Finance & Accounting Department `,
        img: require('../Assets/Department/image14.png'),
        review: ` Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. `
    },

    {
        dept: `Electrical & Engineering Department`,
        img: require('../Assets/Department/image1.png'),
        review: ` Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. `
    },

    {
        dept: `Urban Poverty Alleviation Department `,
        img: require('../Assets/Department/image15.png'),
        review: `Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. `
    },

    {
        dept: `Traffic & Transportation Department`,
        img: require('../Assets/Department/image16.png'),
        review: `Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. Focuses on city planning, urban development, and technological advancements for better governance. `
    }
]

export default Department;