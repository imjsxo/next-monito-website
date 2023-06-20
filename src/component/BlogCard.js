import React from 'react';

const BlogCard = () => {

    const Listblog = [{
        image: "images/blog-1.png",
        title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
        content: "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed."
    },
    {
        image: "images/blog-2.png",
        title: "Dog Diet You Need To Know",
        content: "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance."
    },
    {
        image: "images/blog-3.png",
        title: "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
        content: "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog."
    }]

    return (
        <>
            {
                Listblog.map(blogs => {
                    return (
                        <div className='px-2 py-2 shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)] rounded-xl'>
                            <img src={blogs.image} alt="blogs" className='w-[380px]' />
                            <div className='w-[380px] mt-2 px-2 py-2'>
                                <p className='text-white bg-[#00A7E7] w-fit text-[10px] mb-2.5 py-0.5 px-2.5 rounded-2xl'>Pet knowledge</p>
                                <p className='text-base font-bold text[#00171F] mb-2'>{blogs.title}</p>
                                <div className='h-[84px]'>
                                    <p className='turncate'>{blogs.content}</p>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default BlogCard;