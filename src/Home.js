import React from 'react';
import "./Home.css";
import Product from "./Product";
import SimpleImageSlider from "react-simple-image-slider";
const images = [
    { url: "https://m.media-amazon.com/images/I/91aNt0dLrLL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/81qpH-bw3sL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/81OCE7mUqhL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/81y7KFpW2oL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/81fUVEgWAeL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/81269so71LL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/I/81ps2f268cL._SX3000_.jpg" },
  ];

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <SimpleImageSlider width={1200} height={550} images={images} showNavs={true} slideDuration={1.0} autoPlay={true}/>
            {/* <img className='home__image' src="" alt="background_img" /> */}
        </div>
        <div className="home__row">
            <Product id="12312321" title="Tom Jones" price={29.99} image="https://m.media-amazon.com/images/I/81TpixVc54S._AC_UY327_FMwebp_QL65_.jpg" rating={5}/>
            <Product title="Ikigai: The Japanese secret to a long and happy life" price={32.99} image="https://m.media-amazon.com/images/I/814L+vq01mL._AC_UY218_.jpg" rating={5}/>
        </div>

        <div className="home__row">
            <Product id="12312322" title="How to Talk to Anyone" price={12.99} image="https://m.media-amazon.com/images/I/61MLInWDeJL._AC_UL320_.jpg" rating={4}/>
            <Product id="12312323" title="FINE ART OF SMALL TALK" price={51.99} image="https://m.media-amazon.com/images/I/41+kBJJydOL._AC_UL320_.jpg" rating={5}/>
            <Product id="12312324" title="Atomic Habits: the life-changing" price={27.99} image="https://m.media-amazon.com/images/I/51-nXsSRfZL.jpg" rating={3}/>
        </div>

        <div className="home__row">
            <Product id="12312325" title="The Subtle Art of Not Giving a F*ck" price={42.99} image="https://m.media-amazon.com/images/I/51mN3bY0JjL.jpg" rating={5}/>
        </div>

        <div className="ad__image">
            <img className='ad__banner' src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Jan_23/Jan_ART/2300x646_GW-editorial._CB615648357_.jpg" alt="" />
        </div>

        <div className="home__row">
            <Product id="12312301" title="Redmi 10A" price={42.99} image="https://m.media-amazon.com/images/I/41WpD4fqT4L._AC_SY400_.jpg" rating={0}/>
            <Product id="12312302" title="Buy Redmi A1| Dual Camera Phone" price={42.99} image="https://m.media-amazon.com/images/I/41JM3Ra+tiL._AC_SY400_.jpg" rating={0}/>
            <Product id="12312303" title="Samsung Galaxy M32 Prime| Starting From 9,899" price={42.99} image="https://m.media-amazon.com/images/I/41jna+YGP+L._AC_SY400_.jpg" rating={0}/>
            <Product id="12312304" title="iQOO Neo 6 5G | Starting 24999" price={42.99} image="https://m.media-amazon.com/images/I/51DLLa8HNWL._AC_SY400_.jpg" rating={0}/>

        </div>

        <div className="ad__image">
            <img className='ad__banner' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Nireeksh/JanART23/Desk_section_header-1.jpg" alt="" />
            <img className='inside__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Nireeksh/JanART23/PEA/Sneakpeek-deals_Samsung-32.jpg" alt="" />
            <img className='inside__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/LA/Jan23/latv/event/440X460_06_1.jpg" alt="" />
            <img className='inside__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Sabeer/BAU_JAN/JAN_ART/TV_Page/9449_LATV.jpg" alt="" />
            <img className='inside__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Nireeksh/JanART23/Day0/Sneakpeek-deals_Sony-55.jpg" alt="" />
            <img className='inside__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/LA/Jan23/latv/event/440X460_03_1.jpg" alt="" />
            <img className='inside__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Nireeksh/JanART23/PEA/Sneakpeek-deals_Samsung-43.jpg" alt="" />
            <img className='inside__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/LA/Jan23/latv/event/440X460_02.jpg" alt="" />
            <img className='inside__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/LA/Jan23/latv/t2/440X460_01.jpg" alt="" />
            <img className='inside__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Nireeksh/JanART23/Day0/Sneakpeek-deals_VU-55.jpg" alt="" />
            <img className='inside__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/LA/Jan23/latv/event/440X460_08.jpg" alt="" />
            <img className='inside__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Nireeksh/JanART23/D1/Sneakpeek-deals_Redmi-43.jpg" alt="" />
            



        </div>
    </div>
  )
}

export default Home