import React, { Component}  from 'react';
import StarRatings from 'react-star-ratings';
import {Button} from "reactstrap";

export const BACKEND_API_URL = "http://localhost:8080";

function ImageRender(image) {
    if(!image.image){
        return (
            <span>No Image</span>
        );
    }else {
        return (
            <img src={image.image} alt="logged-in-user" className="table-image" />
        );
    }

}


function BannerOrderList(i) {
    return (
        <span className="bg-primary text-white p-1 font-small-1">{i.content}</span>
    );
}
function BannerStatus(i) {
    return (
        <span className="bg-success text-white p-1 font-small-1">{i.content}</span>
    );
}
function Rating(i) {
    return (
        <StarRatings
            rating={i.value}
            starDimension="20px"
            starSpacing="5px"
        />
    );
}

function Buttons(i) {
    return (
        <div>
            <Button color="primary font-small-1 ml-1">Addons List</Button>
            <Button color="danger font-small-1 ml-1">Category List</Button>
            <Button color="success font-small-1 ml-1">MenuList List</Button>
        </div>
    );
}

export const avatarlist = [{
    id:1,
    image:'https://i.mydramalist.com/D2X5yc.jpg'
},{
    id:2,
    image:'https://i.mydramalist.com/rYo6pc.jpg'
},{
    id:3,
    image:'https://st2.depositphotos.com/1007566/12301/v/950/depositphotos_123013080-stock-illustration-avatar-man-cartoon.jpg'
},{
    id:4,
    image:'http://www.iconninja.com/files/724/464/875/member-blond-person-profile-human-user-account-man-white-avatar-people-face-male-icon.png'
},{
    id:5,
    image:'http://icons-for-free.com/free-icons/png/512/984123.png'
},{
    id:6,
    image:'http://www.clker.com/cliparts/0/Y/c/g/3/I/human-face-hi.png'
},{
    id:7,
    image:'https://media.newyorker.com/photos/590971922179605b11ad7acc/master/w_727,c_limit/100920_r20016_hr.jpg'
},{
    id:8,
    image:'http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Female-Face-FE-3-blonde-icon.png'
},{
    id:9,
    image:'https://c7.uihere.com/files/103/45/93/minecraft-avatar-drawing-video-game-youtube-avatar-thumb.jpg'
}];
export const noUser = 'https://shore-pro-tint.apptivate.it/assets/app/ionic/assets_dev/images/default_avatar.png';

export const CATEGORY_TAX = [
    {label:'7%', value:'7%'},
    {label:'19%', value:'19%'}
];

export const COUNTRY = [
    {label:'Germany', value:'Germany'},
];

export const CITY = [
    {label:'Hamburg', value:'Hamburg'},
    {label:'Bremen', value:'Bremen'},
    {label:'Berlin', value:'Berlin'}
];

export const PRODUCT = [
    {label:'ICE', value:'ICE'},
    {label:'Fruit', value:'Fruit'},
    {label:'Juice', value:'Juice'},
    {label:'Bottle', value:'Bottle'},
    {label:'Wine', value:'Wine'},
    {label:'tobacco', value:'tobacco'},
    {label:'meat', value:'meat'},
    {label:'beer', value:'beer'},
];

export const UNIT = [
    {label:'kg', value:'kg'},
    {label:'mg', value:'mg'},
    {label:'t', value:'t'}
];

export const ADDRESS_TYPE = [
    {label:'Invoice Address', value:'invoice_address'},
    {label:'Delivery Address', value:'delivery_address'},
];

export const CLIENT = [
    {label:'John Doe', value:'John Doe'},
    {label:'Alex Muster', value:'Alex Muster'},
    {label:'Eli Bi', value:'Eli Bi'},
    {label:'Wang Li', value:'Wang Li'},
    {label:'Patrick Ernst', value:'Patrick Ernst'},
    {label:'Company XX', value:'Company XX'}
];

export const STATUS = [
    {label:'Completed', value:'completed'},
    {label:'Cancelled', value:'cancelled'},
];

export const RESTAURANT = [
    {label:'Subway', value:'subway'},
    {label:'Swiggy', value:'swiggy'},
];
export const PAYMENT = [
    {label:'Cash', value:'cash'},
    {label:'Wallet', value:'wallet'},
    {label:'Credit Card', value:'credit_card'},
];
export const DELIVERYPEOPLE = [
    {label:'Mohd Eid', value:'john_smith'},
    {label:'Kevin Young', value:'kevin_yong'},
    {label:'Wang Eu', value:'wang_eu'},
    {label:'Zim Kai', value:'zim_kai'},
    {label:'Sui Ru', value:'wang_eu'},
    {label:'Xen Xi', value:'xen_xi'},
    {label:'Hulo Dy', value:'hulo_dy'},
];
export const PROMOCODE_TYPE_1 = [
    {label:'Amount', value:'amount'},
    {label:'Percent', value:'percent'},
];
export const PROMOCODE_TYPE_2 = [
    {label:'Added', value:'added'},
    {label:'Expired', value:'expired'},
];
export const STATUS_SHOP = [
    {label:'Onboarding', value:'onboarding'},
    {label:'Banned', value:'banned'},
    {label:'Active', value:'active'},
];
export const CUISINE = [
    {label:'Indian', value:'indian'},
    {label:'South Indian', value:'south_indian'},
    {label:'Western', value:'western'},
    {label:'Fish', value:'fish'},
    {label:'Satfish', value:'satfish'},
];
export const ORDERS_COLUMN = [
        {
            Header: "Orders",
            columns: [
                {
                    Header: "S.no",
                    accessor: "no",
                    maxWidth: 150
                },
                {
                    Header: "Code",
                    accessor: "code",
                    maxWidth: 200
                },
                {
                    Header: "Code Type",
                    accessor: "type",
                    maxWidth: 200
                },
                {
                    Header: "Discount",
                    accessor: "discount",
                    maxWidth: 200
                },
                {
                    Header: "Expiration",
                    accessor: "expiration",
                },
                {
                    Header: "Status",
                    accessor: "status",
                    maxWidth: 200
                },
                {
                    Header: "Actions",
                    accessor: "actions",
                    maxWidth: 200

                }
            ]
        },
];

export const ORDERS_DATA = [
    {no:1, code:'Promo Jan\t', type:'percent', discount:10, expiration:'2018-04-18 00:00:00', status:'ADDED', actions:''},
    {no:2, code:'ORDER', type:'percent', discount:20, expiration:'2018-12-28 00:00:00', status:'ADDED', actions:''},
    {no:3, code:'Navidad', type:'percent', discount:30, expiration:'2019-12-28 00:00:00', status:'ADDED', actions:''},
    {no:4, code:'ORDER', type:'percent', discount:20, expiration:'2018-12-28 00:00:00', status:'ADDED', actions:''},
    {no:5, code:'Promo', type:'percent', discount:20, expiration:'2018-05-28 00:00:00', status:'ADDED', actions:''},
    {no:6, code:'Promo Jan\t', type:'percent', discount:20, expiration:'2018-12-28 00:00:00', status:'ADDED', actions:''},
    {no:7, code:'Navidad', type:'percent', discount:25, expiration:'2018-12-28 00:00:00', status:'ADDED', actions:''},
    {no:8, code:'ORDER', type:'percent', discount:20, expiration:'2018-12-28 00:00:00', status:'ADDED', actions:''},
    {no:9, code:'Promo Jan\t', type:'percent', discount:20, expiration:'2018-12-28 00:00:00', status:'ADDED', actions:''},
    {no:10, code:'Navidad', type:'percent', discount:27, expiration:'2018-11-28 00:00:00', status:'ADDED', actions:''},
    {no:11, code:'Promo', type:'percent', discount:20, expiration:'2018-12-28 00:00:00', status:'ADDED', actions:''},
    {no:12, code:'Navidad', type:'percent', discount:20, expiration:'2018-02-28 00:00:00', status:'ADDED', actions:''},
    {no:13, code:'ORDER', type:'percent', discount:230, expiration:'2011-12-28 00:00:00', status:'ADDED', actions:''},
];








export const CLIENTS_DATA = [
    {no:1, name:'Anna Jan\t', email:'d****@demo.com', image:'https://i.mydramalist.com/eg3Ddf.jpg', detail:'+9154****', rating:1, actions:''},
    {no:2, name:'Promo Jan\t', email:'n****@demo.com', image:'https://i.mydramalist.com/rYo6pc.jpg', detail:'+9197****\t', rating:3, actions:''},
    {no:3, name:'Smith Jan\t', email:'n****@demo.com', image:'http://www.dabanzixun.com/wp-content/uploads/2017/07/yang-mi.jpg', detail:'+9154****', rating:2, actions:''},
    {no:4, name:'Promo Kal\t', email:'d****@demo.com', image:'https://image.tmdb.org/t/p/w235_and_h235_face/nweQTbIHNjZrsQsXYJ5ONmupVh.jpg', detail:'+9197****\t', rating:1, actions:''},
    {no:5, name:'Jacks Jan\t', email:'d****@demo.com', image:'https://sudardjattanusukma.files.wordpress.com/2017/10/qdjh-yang-mi-wallpaper-wallpaper-939875373.jpg', detail:'+9154****', rating:'4', actions:''},
];



export const CLIENTS_COLUMN = [{
    Header: "Users",
    columns:  [{Header: "Sl. No", accessor: "no", maxWidth: 100},
        {Header: "Image", accessor: "image", Cell: props => <ImageRender image={props.value} />, maxWidth: 70},
        {Header: "Name", accessor: "name", maxWidth: 300},
        {Header: "Email", accessor: "email", maxWidth: 300},
        {Header: "Contact Details", accessor: "detail"},
        {Header: "Rating", accessor: "rating", maxWidth: 100},
        {Header: "Action", accessor: "action", maxWidth: 100}]
}];

export const RESTAURANT_DATA = [
    {no:1, name:'Anna Jan\t', email:'d****@demo.com', address:  "Teynampet, Chennai, Tamil Nadu, India  ", image:'', detail:'+9154****', rating:1, actions:''},
    {no:2, name:'Promo Jan\t', email:'n****@demo.com', image:'https://tinypng.com/images/social/developer-api.jpg', detail:'+9197****\t', rating:3.5, actions:''},
    {no:3, name:'Smith Jan\t', email:'n****@demo.com', image:'', detail:'+9154****', rating:2.2, actions:''},
    {no:4, name:'Promo Kal\t', email:'d****@demo.com', image:'', detail:'+9197****\t', rating:1.81, actions:''},
    {no:5, name:'Jacks Jan\t', email:'d****@demo.com', image:'', detail:'+9154****', rating:3.2, actions:''},
    {no:6, name:'Meal Jan\t', email:'j****@demo.com\t', image:'', detail:'+9197****\t', rating:1, actions:''},
    {no:7, name:'John Pul\t', email:'d****@demo.com', image:'', detail:'+9154****', rating:4, actions:''},
    {no:8, name:'Promo Ma\t', email:'j****@demo.com\t', image:'', detail:'+9197****\t', rating:3.2, actions:''},
    {no:9, name:'Jack Jan\t', email:'j****@demo.com\t', image:'', detail:'+9197****\t', rating:3.7, actions:''},
    {no:10, name:'Saito Jan\t', email:'d****@demo.com', image:'', detail:'+9198****', rating:4.5, actions:''},
    {no:11, name:'Promo Jan\t', email:'n****@demo.com', image:'', detail:'+9197****\t', rating:3, actions:''},
    {no:12, name:'Oil Jan\t', email:'d****@demo.com', image:'', detail:'+9197****\t', rating:0.1, actions:''},
    {no:13, name:'Promo Pul\t', email:'j****@demo.com\t', image:'', detail:'+9197****\t', rating:2, actions:''},
    {no:14, name:'Dean Meal\t', email:'d****@demo.com', image:'', detail:'+9197****\t', rating:0.3, actions:''},
    {no:15, name:'Promo Jan\t', email:'n****@demo.com', image:'', detail:'+9198****', rating:3, actions:''},
    {no:16, name:'Ken Meal\t', email:'d****@demo.com', image:'', detail:'+9197****\t', rating:2, actions:''},
    {no:17, name:'Promo Pul\t', email:'n****@demo.com', image:'', detail:'+9198****', rating:1.8, actions:''}
];



export const RESTAURANT_COLUMN = [{
    Header: "Restaurant",
    columns:  [{Header: "Sl. No", accessor: "no", maxWidth: 100},
        {Header: "Name", accessor: "name", maxWidth: 150},
        {Header: "Email", accessor: "email", maxWidth: 150},
        {Header: "Image", accessor: "image", Cell: props => <ImageRender image={props.value} />, maxWidth: 120},
        {Header: "Address", accessor: "address"},
        {Header: "Contact Details", accessor: "detail", maxWidth: 180},
        {Header: "Rating", accessor: "rating", Cell: props => <Rating value={props.value} />, maxWidth: 150},
        {Header: "Action", accessor: "action", Cell: props => <Buttons value={props.value} />, maxWidth: 400}]
}];

export const DELIVERIES_COLUMN = [{
    Header: "Deliveries",
    columns:  [{accessor: "no", Header: "S.no", maxWidth: 50},
        {accessor: "customer_name", Header: "Customer Name", maxWidth: 160},
        {accessor: "delivery_people", Header: "Delivery People", maxWidth: 160},
        {accessor: "restaurant", Header: "Restaurant", maxWidth: 100},
        {accessor: "address", Header: "Address"},
        {accessor: "cost", Header: "Cost", maxWidth: 130},
        {accessor: "status", Header: "Status", maxWidth: 130, Cell: props => <BannerStatus content={props.value} />},
        {accessor: "order_list", Header: "Order List", maxWidth: 130, Cell: props => <BannerOrderList content={props.value} />}]
}];
export const DELIVERIES_DATA = [
    {no:1, customer_name:'david demo Jan\t', delivery_people:'percent \tNik Demo', restaurant:'Thalapakatti', address:'7 Crossfield Rd, Southend-on-Sea SS2 4LS, UK', cost:'$55', status:'COMPLETED', order_list:'Order List'},
    {no:2, customer_name:'david demo', delivery_people:'\tNik Demo percent', restaurant:'Thalapakatti', address:'7 Crossfield Rd, Southend-on-Sea SS2 4LS, UK', cost:'$75', status:'PENDING', order_list:'Order List'},
    {no:3, customer_name:'david demo', delivery_people:'percent', restaurant:'Thalapakatti', address:'Raja Muthiah Salai, Periyamet, Chennai, Tamil Nadu 600003, India', cost:'$25', status:'COMPLETED', order_list:'Order List'}
];


export const CATEGORIES_COLUMN = [{
    Header: "Products",
    columns:  [{accessor: "id", Header: "ID", maxWidth: 100},
        {accessor: "product_name", Header: "Name"},
        {accessor: "article_number", Header: "Article Number", maxWidth: 150},
        {accessor: "availability_period", Header: "Availability Period", maxWidth: 200},
        {accessor: "category", Header: "Category", maxWidth: 150},
        {accessor: "short_description", Header: "Short Description"},
        {accessor: "long_description", Header: "Long Description"}]
}];

export const PRIZE_COLUMN =[
        {
            Header: "Prizes",
            columns: [
                {
                    Header: "Product",
                    accessor: "product",
                },
                {
                    Header: "Unit",
                    accessor: "unit"
                },
                {
                    Header: "Prize",
                    accessor: "prize"
                },
                {
                    Header: "Action",
                    accessor: "action"
                }
            ]
        }
];

export const ADDRESS_COLUMN =[
    {
        Header: "Address",
        columns: [
            {
                Header: "Address",
                accessor: "Address"
            },
            {
                Header: "Type",
                accessor: "type",
                maxWidth: 350
            },
            {
                Header: "Action",
                accessor: "action",
                maxWidth: 350
            },
        ]
    }
];

export const PRICEING_COLUMN =[
    {
        Header: "Pricing",
        columns: [
            {
                Header: "Unit",
                accessor: "unit"
            },
            {
                Header: "Price",
                accessor: "price"
            },
            {
                Header: "Action",
                accessor: "action"
            }
        ]
    }
];
