import React from "react";
import footerImg from "../../Assets/footer_1.jpg";
import IndiaLogo from "../../Assets/footerImg.png";

const Footer = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${footerImg})`,
                // opacity: "0.7",
            }}
            className="w-full h-auto bg-cover bg-center mt-4 p-4"
        >
            <div className="grid gap-8 grid-cols-2 text-white md:grid-cols-4 max-w-[1000px] mx-auto">
                <div>
                    <p className="font-bold text-2xl p-1 text-gray-100">FIND US</p>
                    <div className="text-gray-300">
                        <p>Ward no 02 Bhatera</p>
                        <p>Balaghat, Madhya Pradesh</p>
                        <p>Balaghat-481001</p>
                        <p>Phone: +91 7089890044</p>
                        <p>Email: sanketrahangdale1118@gmail.com</p>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-2xl p-1 text-gray-100">CATEGORIES</p>
                    <div className="text-gray-300">
                        <p>Best Selling Products</p>
                        <p>Epic Deals</p>
                        <p>Wall Clocks</p>
                        <p>Collectibles</p>
                        <p>Posters</p>
                        <p>Notebooks</p>
                    </div>
                </div>
                <div className="hidden md:block">
                    <p className="font-bold text-2xl p-1 text-gray-100">HELP</p>
                    <div className="text-gray-300">
                        <p>Track your order</p>
                        <p>My Account</p>
                        <p>Contact Us</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <p>FAQ</p>
                    </div>
                </div>
                <div className="hidden md:block">
                    <p className="font-bold text-2xl p-1 text-gray-100">MORE</p>
                    <div className="text-gray-300">
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Schools & Colleges</p>
                        <p>Bulk & Custom Orders</p>
                        <p>Sell Your Artwork</p>
                        <p>Refund Policy</p>
                        <p>Terms of Service</p>
                        <p>Shipping Policy</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-8">
                <h1 className="text-white font-bold text-3xl tracking-widest">
                    PRODUCTS MADE IN INDIA
                </h1>
                <div className="w-48 h-24 mt-4">
                    <img src={IndiaLogo} alt="" />
                </div>
            </div>
            <div className="mt-6">
                <p className="text-white text-md max-w-[1000px] text-center mx-auto">
                    An ambitious nation-building initiative to encourage manufacturing of goods in India. We support this initiative. Our endeavor is that most of the EPIC STUFF on our website is Made In India.
                </p>
            </div>
        </div>
    );
};

export default Footer;
