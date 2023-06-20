import React from 'react';
import { RxDotFilled } from 'react-icons/rx'

const Productcard = () => {
    const ListProduct = [{
        image: "/images/salmon-food.png",
        name: "Reflex Plus Adult Cat Food Salmon",
        category: "Dog Food",
        size: "385gm",
        price: "140.000 VND"
    },
    {
        image: "/images/adult-salmon-food.png",
        category: "Cat Food",
        name: "Reflex Plus Adult Cat Food Salmon",
        size: "1.5 kg",
        price: "165.000 VND"
    },
    {
        image: "/images/rope-ball.png",
        name: "Cat scratching ball toy kitten sisal rope ball",
        category: "Toy",
        size: "20 cm",
        price: "1.100.000 VND"
    },
    {
        image: "/images/warm-nest.png",
        name: "Cute Pet Cat Warm Nest",
        category: "Toy",
        size: "60 cm",
        price: "410.000 VND"
    },
    {
        image: "/images/salmon-oil.png",
        name: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
        category: "Dog Food",
        size: "385 gm",
        price: "350.000 VND"
    },
    {
        image: "/images/fashion-pet.png",
        name: "Costumes Fashion Pet Clother Cowboy Rider",
        category: "Costume",
        size: "1.5 kg",
        price: "500.000 VND"
    },
    {
        image: "/images/headband.png",
        name: "Costumes Chicken Drumsti ck Headband",
        category: "Costume",
        size: "38 cm",
        price: "400.000 VND"
    },
    {
        image: "/images/plush-pet-toy.png",
        name: "Plush Pet Toy",
        category: "Toy",
        size: "35 cm",
        price: "250.000 VND"
    }]
    return (
        <>
            {
                ListProduct.map(product => {
                    return (
                        <div className='px-3 py-3 shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)] rounded-xl mt-7'>
                            <img src={product.image} alt="image" className='w-[264px]'/>
                            <div className='px-2 py-2 w-[264px]'>
                                <p className='text-base text-[#00171F] font-bold'>{product.name}</p>
                                <div className='flex text-xs text-[#667479] my-2'>
                                    <p>product: <strong>{product.category}</strong></p>
                                    <RxDotFilled className='mx-2' />
                                    <p>Size: <strong>{product.size}</strong></p>
                                </div>
                                <p className='text-base text-[#00171F] font-bold '>{product.price}</p>
                                <div className='flex bg-[#FCEED5] px-2.5 py-2 items-center'>
                                    <img src="/images/gift-icon.png" alt="" />
                                    <RxDotFilled className='mx-2'/>
                                    <p className='text-sm font-bold'>Free Toy & Free Shaker</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Productcard;