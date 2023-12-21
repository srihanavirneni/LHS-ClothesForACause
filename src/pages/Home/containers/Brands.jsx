import React from 'react';

import divinegatewayfoundation from '../../../assets/images/brands/divinegatewayfoundation.png';
import wellroot from '../../../assets/images/brands/wellroot.png';
import './Brands.css';

const Brands = () => {
    return (
        <section className="brands-section">
            <ul className="brands-section__brands-list">
                <li>
                    <img src={wellroot} alt="wellroot" />
                </li>
                <li>
                    <img
                        src={divinegatewayfoundation}
                        alt="divine gateway foundation"
                    />
                </li>
                <li>
                    <img src={wellroot} alt="wellroot" />
                </li>
                <li>
                    <img
                        src={divinegatewayfoundation}
                        alt="divine gateway foundation"
                    />
                </li>
                <li>
                    <img src={wellroot} alt="wellroot" />
                </li>
                <li>
                    <img
                        src={divinegatewayfoundation}
                        alt="divine gateway foundation"
                    />
                </li>
            </ul>
        </section>
    );
};

export default Brands;
