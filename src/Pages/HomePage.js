import ergonomic from '../assets/images/ergonomic.png';
import product from '../assets/images/product.png'
import product2 from '../assets/images/product2.png'
import furniture from '../assets/images/furniture.png'
import { TbTruckDelivery } from "react-icons/tb";
import { FiShoppingBag } from "react-icons/fi";
import { CgSupport } from "react-icons/cg";
import { BsArrowReturnLeft } from "react-icons/bs";
import mask1 from '../assets/images/mask1.png';
import mask2 from '../assets/images/mask2.png';
import mask3 from '../assets/images/mask3.png';
import "./general2.css";
const Home = () => {
    return (
        <>
            <div style={{ minHeight: "50vh", display: "flex", flexDirection: "row", padding: "100px", gap: "100px" }}>
                <div className='zona1' style={{ display: "flex", gap: "30px", flexDirection: "column" }}>
                    <div style={{ fontFamily: "inter", fontSize: "34px", fontWeight: "600" }}>
                        Crafted with<br />excellent<br />material.
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: "200", lineHeight: "24px", fontFamily: "inter" }}>
                        Donec mattis porta eros, aliquet<br />finibus risus interdum at. Nulla<br />vivethe as it was for us to know<br />what was to be done.
                    </div>
                    <button>Explore</button>
                </div>

                <div className='zona2' style={{ display: "flex", alignItems: "flex-start", gap: "120px" }}>
                    <img src={product} alt='Product' />
                    <img src={product2} alt='Product2' />
                    <img src={ergonomic} alt='Ergonomic' />
                </div>
            </div>

            <div style={{ minHeight: "50vh", display: "flex", justifyContent: "space-between", padding: "0 100px", gap: "10px" }}>
                <div style={{ fontSize: "34px", fontWeight: "500", display: "flex", flexDirection: "column", gap: "20px" }}>Why Choose Us<br /><div style={{ fontSize: "14px", fontFamily: "inter", }}>Donec mattis porta eros, aliquet finibus risus interdum at. Nulla<br />vivethe as it was for us to know what was to be done. then hjnejkcncjkns</div>
                    <div className="grid-container" style={{}}>
                        <div className="item" style={{ display: "flex", flexDirection: "column", gap: "5px" }}><TbTruckDelivery />
                            <div style={{ fontSize: "14px", display: "flex", justifyContent: "flex-start" }}>Fast & Free Shipping</div>
                            <div style={{ fontSize: "14px" }}>Donec mattis porta eros, aliquet<br />finibus risus interdum at. Nulla<br />vivethe as it was</div>
                        </div>
                        <div className="item" style={{ display: "flex", flexDirection: "column", gap: "5px" }}><FiShoppingBag />
                            <div style={{ fontSize: "14px", display: "flex", justifyContent: "flex-start" }}>Easy to Shop</div>
                            <div style={{ fontSize: "14px" }}>Donec mattis porta eros, aliquet <br />finibus risus interdum at. Nulla<br />vivethe as it was</div>
                        </div>
                        <div className="item" style={{ display: "flex", flexDirection: "column", gap: "5px" }}><CgSupport />
                            <div style={{ fontSize: "14px", display: "flex", justifyContent: "flex-start" }}>24/7 Support</div>
                            <div style={{ fontSize: "14px" }}>Donec mattis porta eros, aliquet<br />finibus risus interdum at. Nulla<br />vivethe as it was</div>
                        </div>
                        <div className="item" style={{ display: "flex", flexDirection: "column", gap: "5px" }}><BsArrowReturnLeft />
                            <div style={{ fontSize: "14px", display: "flex", justifyContent: "flex-start" }}>Hassle Free Returns</div>
                            <div style={{ fontSize: "14px" }}>Donec mattis porta eros, aliquet<br />finibus risus interdum at. Nulla<br />vivethe as it was</div>
                        </div>
                    </div>
                </div>
                <div style={{}}><img src={furniture} alt='Furniture' />
                </div>
            </div>

            <div style={{ padding: "0 100px", paddingTop: "100px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ fontFamily: "inherit", fontSize: "34px", fontWeight: "550" }}>Recent Blog</div>
                    <div style={{ display: "flex", alignItems: "center" }}>View All Posts</div>
                </div>

                <div style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
                    <img src={mask1} alt="Mask1" />
                    <img src={mask3} alt="Mask3" />
                    <img src={mask2} alt="Mask2" />
                </div>
            </div>

        </>
    )
}

export { Home }