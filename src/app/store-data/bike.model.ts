export interface Bike {

    id: string;
    name: string;
    productCode: string;
    releaseDate: string;
    description: string;
    sex: string;
    // specifications?:
        // [
        // {
        //     "Frame": "SuperSix EVO, BallisTec Hi-MOD Carbon, Di2 Compatible,SPEED SAVE",
        //     "Fork": "SuperSix EVO, SPEED SAVE, BallisTec Hi-MOD full Carbon, 1-1/8'' to 1-1/4'' steerer, integrated crown race",
        //     "Hubs": "Chris King R45",
        //     "Spokes": "DT Swiss Aerolite",
        //     "Tires": "Schwalbe ONE Clincher, 700x25c, folding",
        //     "Crankset": "Cannondale HollowGram SiSL2 w/ OPI SpideRing SL",
        //     "Chainrings": "52/36",
        //     "Bottom Bracket": "Cannondale Alloy PressFit30",
        //     "Front Derailleur": "Shimano Dura Ace Di2, braze-on",
        //     "Rear Derailleur": "Shimano Dura-Ace Di2",
        //     "Rear Cogs": "Shimano Dura-Ace, 11-28, 11-speed",
        //     "Shifters": "Shimano Dura-Ace Di2",
        //     "Handlebars": "ENVE Carbon Smart SES, Aero Profile, 31.8mm",
        //     "Tape/Grips": "Fi'zi:k SuperLight Tacky Touch",
        //     "Stem": "Enve Carbon Road, 31.8, 6 deg.",
        //     "Brake Levers": "Shimano Dura-Ace",
        //     "Brakes": "Shimano Dura-Ace",
        //     "Saddle": "Fizik Arione 00, Carbon Rail",
        //     "Seat Post": "ENVE Carbon, Gen 2, 25.4x400mm"
        // }
        // ];
    inStock: boolean;
    price: number;
    starRating: number;
    imageUrl: string;
}


