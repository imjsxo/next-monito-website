import React from 'react';
import { RxDotFilled } from 'react-icons/rx'

const PetCard = () => {
    const listPet = [{
        image: "/images/Pomeranian-White.png",
        name: "MO231 - Pomeranian White",
        gender: "Male",
        age: "02 Months",
        price: "6.900.000 VND"
    },
    {
        image: "/images/poodle-yellow.png",
        name: "MO502 - Poodle Tiny Yellow",
        gender: "Female",
        age: "02 Months",
        price: "3.900.000 VND"
    },
    {
        image: "/images/poodle-sepia.png",
        name: "MO102 - Poodle Tiny Sepia",
        gender: "Male",
        age: "02 Months",
        price: "4.000.000 VND"
    },
    {
        image: "/images/malamute-grey.png",
        name: "MO512 - Alaskan Malamute Grey",
        gender: "Male",
        age: "02 Months",
        price: "8.900.000 VND"
    },
    {
        image: "/images/corgi-cream.png",
        name: "MO231 - Pembroke Corgi Cream",
        gender: "Male",
        age: "02 Months",
        price: "7.900.000 VND"
    },
    {
        image: "/images/corgi-tricolor.png",
        name: "MO502 - Pembroke Corgi Tricolor",
        gender: "Female",
        age: "02 Months",
        price: "6.900.000 VND"
    },
    {
        image: "/images/powe-cow.png",
        name: "MO231 - Pomeranian White",
        gender: "Female",
        age: "02 Months",
        price: "6.500.000 VND"
    },
    {
        image: "/images/Pomeranian-White.png",
        name: "MO512 - Poodle Tiny Dairy Cow",
        gender: "Male",
        age: "02 Months",
        price: "5.000.000 VND"
    }]

    return (
        <>
            {
                listPet.map(pet => {
                    return (
                        <div className='px-3 py-3 shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)] rounded-xl'>
                            <img src={pet.image} alt="pet"/>
                            <h3 className='mt-4 text-base font-bold text-[#00171F]'>{pet.name}</h3>
                            <div className='mt-1 flex items-center text-xs text-[#667479] font-semibold'>
                                <p>Gene: {pet.gender}</p>
                                <RxDotFilled className='mx-2'/>
                                <p>Age: {pet.age}</p>
                            </div>
                            <p className='mt-1 mb-3 text-sm font-bold'>{pet.price}</p>
                        </div>
                    )
                })
            }
        </>
    )
};

export default PetCard;