import DiscountsImg from '../../ServicesAssets/discounts.png';
import Loyalty from '../../ServicesAssets/loyalty.jpg';
import ServicesImg from '../../ServicesAssets/services.jpg';
import shoes from '../../ServicesAssets/shoes.jpg';
import categories from '../../ServicesAssets/categories.jpg';



export const Discounts = [
    {
    title: 'Forever Discounts',
    description: `Ask or Request a vendor for a Paperless pushover and earn a hefty discount over your monthly bills`,
    image: DiscountsImg,
    rating: 4,
    categories: ['Discount', 'Offer', 'Purchase'],
    }
];
export const Loyalty_Points = [
    {
    title: 'Loyalty Benefits',
    description: `Get loyalty points on each and every purchase you make or read via Paperless`,
    // image: Images[0].image,
    image: Loyalty,
    rating: 4,
    categories: ['Addons', 'Coupons', 'Loyalty'],
    }
];

export const Brands = [
    {
    title: 'Brands',
    description: `Collaborating with 50+ brands for keeping up with your shopping spree`,
    // image: Images[0].image,
    image: shoes,
    rating: 4,
    categories: ['Shopping', 'Deals', 'Sale'],
    }
];

export const Services = [
    {
    title: 'Services',
    description: `Analyse your spending habits , purchasing history and make appropriate desicions on your next purchase`,
    // image: Images[0].image,
    rating: 4,
    image: ServicesImg,

    categories: ['Analytics', 'Predictions', 'Tracking'],
    }
];

export const Categories = [
    {
    title: 'Categories',
    description: `Whether its groceries or clothing line , midnight cravings or healthy breakfasts , we got it all covered!`,
    // image: Images[0].image,
    image: categories,
    rating: 4,
    categories: ['Food', 'Electronics', 'Dailyneeds'],
    }
];