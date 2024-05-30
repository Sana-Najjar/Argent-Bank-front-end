import React from 'react';
import {Banner} from '../../components/Banner/Banner.jsx';
import {Item} from '../../components/Item/Item.jsx';
import FeaturesItemData from '../../data/FeaturesItemData.json'
import iconChat from '../../assets/img/icon-chat.webp';
import iconMoney from '../../assets/img/icon-money.webp';
import iconSecurity from '../../assets/img/icon-security.webp';
import '../../pages/Home/Home.scss';

/* Home page */
export function Home () {
    const imageData = {
        "icon-chat.webp": iconChat,
        "icon-money.webp": iconMoney,
        "icon-security.webp": iconSecurity
    }

    return (
        <div className='homepage'>
            <main>
                {/* Returns banner*/}
                <Banner />
                <section className="features">
                    {/* Return items from json file with map */}
                    {FeaturesItemData.map((data) => (
                        /* Return item component */
                        < Item 
                            key={data.id}
                            image={imageData[data.image]}
                            descriptionImage={data.descriptionImage}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </section>
            </main>
        </div>
    )
}

export default Home