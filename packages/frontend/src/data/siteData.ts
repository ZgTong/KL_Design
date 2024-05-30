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
import { title } from 'process';
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
        entryImg: {
            xs: '/images/selected_works/main_1.png',
            lg: '/images/selected_works/main_lg_1.png',
        },
        details: {
            title: 'Poster Series',
            desc: 'DASSAI 39',
            date: 'August 2023',
            client: 'Shark Fin Keysborough',
            service: 'Poster Design / Photography',
            software: 'Lightroom /  Photoshop / Illustrator',
            brief: 'Continue the monthly promotion series created for Shark Fin, conduct a photoshoot and create a promotion poster for the assigned Japanese whiskey in A5 and A6 size.',
            processes: [
                {
                    title: 'Research',
                    desc: 'Understand the brand and the product',
                    img: '/images/selected_works/process_1.png',
                },
                {
                    title: 'Research',
                    desc: 'Understand the brand and the product',
                    img: '/images/selected_works/process_1.png',
                },
                {
                    title: 'Research',
                    desc: 'Understand the brand and the product',
                    img: '/images/selected_works/process_1.png',
                },
                {
                    title: 'Research',
                    desc: 'Understand the brand and the product',
                    img: '/images/selected_works/process_1.png',
                },
            ],
            execution: {
                title: 'Functional Poster',
                desc: `The Final image was taken with the Japanese Rising Sun concept in mind, creating a dramatic yet cool visual presentation to the customers.
                The poster is also functional in B1 size. The promotion poster series for Shark Fin has generated more profit than expected.`,
                photos: [
                    {
                        id: 1,
                        url: '/images/selected_works/execution_1.png',
                    },
                ]
            }
        }
    },
    {
        id: 2,
        title: 'Jo & Jim Repsonsive Website',
        desc: 'Website Design',
        name: 'website',
        entryImg: {
            xs: '/images/selected_works/main_2.png',
            lg: '/images/selected_works/main_lg_2.png',
        },
    },
    {
        id: 3,
        title: 'MMT Brand Guidelines',
        desc: 'Branding',
        name: 'branding',
        entryImg: {
            xs: '/images/selected_works/main_3.png',
            lg: '/images/selected_works/main_lg_3.png',
        },
    },
    {
        id: 4,
        title: 'Jo & Jim Business Cards',
        desc: 'Design',
        name: 'cards',
        entryImg: {
            xs: '/images/selected_works/main_4.png',
            lg: '/images/selected_works/main_lg_4.png',
        },
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
        id: 0,
        title: 'Commissioned',
        entryImg: '/images/photography/commissioned_entry.png',
        name: 'commissioned',
        href: '/photography/collections',
        collection: [
            {
                id: 1,
                url: '/images/photography/commissioned/1.png',
                cols: 2,
                rows: 1,
            },
            {
                id: 2,
                url: '/images/photography/commissioned/2.png',
                cols: 2,
                rows: 1,
            },
            {
                id: 3,
                url: '/images/photography/commissioned/3.png',
                cols: 2,
                rows: 1,
            },
            {
                id: 4,
                url: '/images/photography/commissioned/4.png',
                cols: 2,
                rows: 1,
            },
            {
                id: 5,
                url: '/images/photography/commissioned/5.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 6,
                url: '/images/photography/commissioned/6.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 7,
                url: '/images/photography/commissioned/7.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 8,
                url: '/images/photography/commissioned/8.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 9,
                url: '/images/photography/commissioned/9.png',
                cols: 2,
                rows: 1,
            },
        ],
    },
    {
        id: 1,
        title: 'Lifestyle',
        entryImg: '/images/photography/lifestyle_entry.png',
        name: 'lifestyle',
        href: '/photography/collections',
        collection: [
            {
                id: 1,
                url: '/images/photography/lifestyle/1.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 2,
                url: '/images/photography/lifestyle/2.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 3,
                url: '/images/photography/lifestyle/3.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 4,
                url: '/images/photography/lifestyle/4.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 5,
                url: '/images/photography/lifestyle/5.png',
                cols: 2,
                rows: 1,
            },
            {
                id: 6,
                url: '/images/photography/lifestyle/6.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 7,
                url: '/images/photography/lifestyle/7.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 8,
                url: '/images/photography/lifestyle/8.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 9,
                url: '/images/photography/lifestyle/9.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 10,
                url: '/images/photography/lifestyle/10.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 11,
                url: '/images/photography/lifestyle/11.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 12,
                url: '/images/photography/lifestyle/12.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 13,
                url: '/images/photography/lifestyle/13.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 14,
                url: '/images/photography/lifestyle/14.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 15,
                url: '/images/photography/lifestyle/15.png',
                cols: 1,
                rows: 1,
            },
        ],
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
