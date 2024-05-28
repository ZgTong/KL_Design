import EmailDefaultSvg from '@root/public/images/contact/email_default.svg';
import EmailCircleSvg from '@root/public/images/contact/email_circle.svg';
import PhoneDefaultSvg from '@root/public/images/contact/phone_default.svg';
import PhoneCircleSvg from '@root/public/images/contact/phone_circle.svg';
import WhatsappDefaultSvg from '@root/public/images/contact/whatsapp_default.svg';
import WhatsappCircleSvg from '@root/public/images/contact/whatsapp_circle.svg';
import LinkedinDefaultSvg from '@root/public/images/contact/linkedin_default.svg';
import LinkedinCircleSvg from '@root/public/images/contact/linkedin_circle.svg';
import InstagramDefaultSvg from '@root/public/images/contact/ig_default.svg';
import InstagramCircleSvg from '@root/public/images/contact/ig_circle.svg';
const HearderMenuData = [
    {
        id: 1,
        text: 'Client Works',
        href: 'works',
        route: '/works?name=design',
    },
    {
        id: 2,
        text: 'Photography',
        href: 'photography',
        route: '/photography',
    },
    {
        id: 3,
        text: 'About Me',
        href: 'about',
        route: '/#about',
    },
    {
        id: 4,
        text: `Let's Talk`,
        href: 'contact',
        route: '/#contact',
    },
];

const LandingMenuData = [
    {
        id: 1,
        text: 'Design',
        route: '/works?name=design',
    },
    {
        id: 2,
        text: 'Branding',
        route: '/works?name=branding',
    },
    {
        id: 3,
        text: 'Website Design',
        route: '/works?name=website',
    },
    {
        id: 4,
        text: 'Photography',
        route: '/photography',
    },
];

const SelectedWorksData = [
    {
        id: 1,
        title: 'Promotion Poster Series',
        desc: 'Design / Photography',
        name: 'design',
        entryImg: '',
    },
    {
        id: 2,
        title: 'Jo & Jim Repsonsive Website',
        desc: 'Website Design',
        name: 'website',
        entryImg: '',
    },
    {
        id: 3,
        title: 'MMT Brand Guidelines',
        desc: 'Branding',
        name: 'branding',
        entryImg: '',
    },
    {
        id: 4,
        title: 'Jo & Jim Business Cards',
        desc: 'Design',
        name: 'cards',
        entryImg: '',
    },
];

const PhotographyData = [
    {
        id: 1,
        url: '/images/photography/main_1.png',
        cols: 1,
        rows: 1,
    },
    {
        id: 2,
        url: '/images/photography/main_2.png',
        cols: 2,
        rows: 1,
    },
    {
        id: 3,
        url: '/images/photography/main_3.png',
        cols: 1,
        rows: 1,
    },
    {
        id: 4,
        url: '/images/photography/main_4.png',
        cols: 1,
        rows: 1,
    },
    {
        id: 5,
        url: '/images/photography/main_5.png',
        cols: 1,
        rows: 1,
    },
];

const ContactData = [
    {
        id: 1,
        name: 'email',
        value_default: EmailDefaultSvg,
        value_circle: EmailCircleSvg,
        href: 'mailto:kphaleung@gmail.com'
    },
    {
        id: 2,
        name: 'phone',
        value_default: PhoneDefaultSvg,
        value_circle: PhoneCircleSvg,
        href: 'tel:61438972078'
    },
    {
        id: 3,
        name: 'whatsapp',
        value_default: WhatsappDefaultSvg,
        value_circle: WhatsappCircleSvg,
        href: 'https://wa.me/61438972078'
    },
    {
        id: 4,
        name: 'linkedin',
        value_default: LinkedinDefaultSvg,
        value_circle: LinkedinCircleSvg,
        href: 'https://au.linkedin.com/in/kepha-leung-467a01151'
    },
    {
        id: 5,
        name: 'instagram',
        value_default: InstagramDefaultSvg,
        value_circle: InstagramCircleSvg,
        href: 'https://www.instagram.com/0.1.1.5_user/'
    },
];

const PhotographyPageData = [
    {
        id: 1,
        title: 'Commisioned',
        entryImg: '',
        name: 'commissioned',
        href: 'commissioned',
        collection: [],
    },
    {
        id: 2,
        title: 'Lifestyle',
        entryImg: '',
        name: 'lifestyle',
        href: 'lifestyle',
        collection: [],
    },
];

export {
    HearderMenuData,
    LandingMenuData,
    SelectedWorksData,
    PhotographyData,
    ContactData,
    PhotographyPageData
};
