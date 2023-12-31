import React from 'react'

function Description() {
  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>


  return (
    <div>
        <div className="container productDescription">
            <p className='paragraph-spacing mt-5'>
            Elevate your living space with the timeless elegance and unmatched comfort of the Fossil Corner Couch. Crafted with the utmost attention to detail, this stunning piece of furniture seamlessly blends form and function, making it the perfect addition to any modern home.
            </p>
    <p className='paragraph-spacing'><b>Key Features:</b></p>
    <ul>
        <li><i className="fa-solid fa-check fa-lg"></i> Space-Saving Design: The cleverly designed corner shape of this couch optimizes your room's layout, providing ample seating without compromising on space.</li>

        <li><i className="fa-solid fa-check fa-lg"></i> Premium Quality: Constructed with a sturdy frame and upholstered in high-quality, easy-to-clean fabric, the Fossil Corner Couch is built to last and withstand everyday use.</li>

        <li><i className="fa-solid fa-check fa-lg"></i> Luxurious Comfort: Sink into plush, cushioned seats and experience ultimate relaxation. Whether you're hosting guests or enjoying a quiet evening alone, this couch ensures a comfortable and cozy experience.</li>

        <li><i className="fa-solid fa-check fa-lg"></i> Modern Aesthetics: The Fossil Corner Couch boasts a sleek and contemporary design that complements various interior styles. Its neutral color palette effortlessly blends with your existing decor.</li>

        <li><i className="fa-solid fa-check fa-lg"></i> Versatile Arrangement: Create the seating arrangement that suits your space best. The modular design allows you to configure the couch to your liking, whether you prefer a classic L-shape or a spacious U-shape.</li>

        <li><i className="fa-solid fa-check fa-lg"></i> Sturdy Legs: The couch stands on sturdy, tapered legs that not only provide stability but also add a touch of sophistication to its overall look.</li>
    </ul>
       <p>Upgrade your living room with the 'Fossil - Corner Couch' and make a statement in style and comfort. Whether you're enjoying movie nights, hosting gatherings, or simply unwinding after a long day, this couch promises to be your favorite spot in the house.
        Transform your living space today with the Fossil Corner Couch – the epitome of modern luxury and functionality.</p>  
        </div>
        <hr className="hr" />
    </div>
  )
}

export default Description
