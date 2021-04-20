import fetch from 'isomorphic-unfetch';

export type Product = {
    id: string;
    type: string,
    attributes: {
        identification: {
            productId: string;
        },
        brand: {
            name: string;
        },
        name: string;
        price: {
            currencyCode: string;
            current: number;
        },
        images: {
            identifier: string,
            tags: string[]
        }[]
    }
};

export async function getProduct(productID: string): Promise<Product> {

    return {
        "id" : "1600517823",
        "type" : "selling-product",
        "attributes" : {
          "identification" : {
            "productId" : "1600517823"
          },
          "brand" : {
            "name" : "Apple"
          },
          "name" : "iPhone 12 Pro Max, 128Gb - Pacific Blue",
          "price" : {
            "currencyCode" : "GBP",
            "current" : 1099
          },
          "images" : [ {
            "identifier" : "QVYVN_SQ1_0000000020_BLUE_SLf",
            "tags" : [ ]
          }, {
            "identifier" : "QVYVN_SQ2_0000000020_BLUE_SLb",
            "tags" : [ ]
          }, {
            "identifier" : "QVYVN_SQ3_0000000020_BLUE_SLa",
            "tags" : [ ]
          }, {
            "identifier" : "QVYVN_SQ4_0000000020_BLUE_SLd",
            "tags" : [ ]
          }, {
            "identifier" : "QVYVN_SQ5_0000000020_BLUE_SLd1",
            "tags" : [ ]
          }, {
            "identifier" : "QVYVN_SQ6_0000000020_BLUE_SLd2",
            "tags" : [ ]
          }, {
            "identifier" : "QVYVN_SQ7_0000000020_BLUE_SLd3",
            "tags" : [ ]
          } ]
        }
      };

    // return fetch(`https://www.very.co.uk/api/selling-product/selling-products/${productID}?source=atg`)
    //     .then(x => {
    //         console.log('status', x.status);
    //         return x.json();
    //     });

    // return {
    //     sku,
    //     title: 'iPhone 12 Pro Max, 128Gb - Pacific Blue',
    //     price: {
    //         text: '£1099'
    //     },
    //     brand: {
    //         text: 'Apple',
    //         id: 'apple'
    //     },
    //     description: {
    //         html: `<span itemprop="description">
    //         <h2>iPhone 12 Pro Max. Hello 5G.</h2><strong>Get a free one-year Apple TV+ subscription when you buy this Apple device. One subscription per Family Sharing group. Offer good for 3 months after device activation. Offer must be claimed in the Apple TV app within 3 months after first setting up your new device. To see the offer appear, you will need to sign in with your Apple ID on your new device. Plan automatically renews until cancelled. Restrictions and other terms apply.</strong><br><br>iPhone 12 Pro Max. 5G to download huge files on the go and stream HDR video. Larger 6.7-inch Super Retina XDR display. Ceramic Shield with 4x better drop performance. Incredible low-light photography with the best Pro camera system on an iPhone, and 5x optical zoom range. Cinemagrade Dolby Vision video recording, editing and playback. Night mode portraits and next-level AR experiences with the LiDAR scanner. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging. For infinitely spectacular possibilities.<br><br><ul><li>6.7-inch Super Retina XDR display</li><li>Ceramic Shield, tougher than any smartphone glass</li><li>5G for superfast downloads and high-quality streaming</li><li>A14 Bionic chip, the fastest chip ever in a smartphone</li><li>Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording</li><li>LiDAR scanner for improved AR experiences and Night mode portraits</li><li>12MP TrueDepth front camera with Night mode and 4K Dolby Vision HDR recording</li><li>Industry-leading IP68 water resistance</li><li>Supports MagSafe accessories for easy attach and faster wireless charging</li><li>iOS 14 with redesigned widgets on the Home screen, all-new App Library, App Clips and more</li></ul><br>Additional information:<ul><li>Depth: 40 MM</li><li>Height: 190 MM</li><li>Network: Sim Free</li><li>Sim Type: Nano</li><li>Width: 110 MM</li></ul>Data plan required. 5G is available in selected markets and through selected network providers. The display has rounded corners. When measured as a rectangle, the screen is 6.68 inches diagonally. Claim based on iPhone 12 Pro Max Ceramic Shield front compared with previous-generation iPhone. iPhone 12 Pro Max is splash, water and dust resistant with a rating of IP68 under IEC standard 60529. Resistance might decrease as a result of normal wear.&nbsp;Liquid damage not covered under warranty.
    //         </span>`
    //     },
    //     specs: {
    //         html: `<table><tbody><tr><td>Product Description</td><td>Apple iPhone 12 Pro Max - pacific blue - 5G - 128 GB - CDMA / GSM - smartphone</td></tr><tr><td>Product Type</td><td>Smartphone 5G</td></tr><tr><td>Manufacturer Model Number</td><td>A2411</td></tr><tr><td>Display</td><td>OLED display - 2778 x 1284 pixels - 6.7" - 458 ppi - Super Retina XDR Display - HDR - fingerprint-resistant oleophobic coating, Ceramic Shield</td></tr><tr><td>Processor</td><td>Apple A14 Bionic (6-core)</td></tr><tr><td>Memory</td><td>128 GB</td></tr><tr><td>Operating System</td><td>iOS 14</td></tr><tr><td>Rear Camera</td><td>12 Megapixel - wide-angle lens - 5x optical zoom - 26 mm - f/1.6 - focus: automatic</td></tr><tr><td>Second Rear Camera</td><td>12 Megapixel - ultra wide-angle lens 13 mm - f/2.4</td></tr><tr><td>Third Rear Camera</td><td>12 Megapixel - telephoto lens - f/2.2</td></tr><tr><td>Front Camera</td><td>12 Megapixel ƒ/2.2</td></tr><tr><td>Service Provider</td><td>Not specified</td></tr><tr><td>SIM Card Type</td><td>(4FF), e-SIM</td></tr><tr><td>SIM Card Qty</td><td>Dual-SIM</td></tr><tr><td>Wireless Interface</td><td>NFC, Bluetooth, Wi-Fi 6, UWB</td></tr><tr><td>Security Devices</td><td>Face ID</td></tr><tr><td>Connectors</td><td>Lightning</td></tr><tr><td>Wireless Charging Standards</td><td>Qi</td></tr><tr><td>Protection</td><td>Dustproof, splashproof, waterproof</td></tr><tr><td>Colour</td><td>Pacific blue</td></tr><tr><td>Dimensions (WxDxH)</td><td>78.1 mm x 7.4 mm x 160.8 mm</td></tr><tr><td>Weight</td><td>226 g</td></tr><tr><td>SAR</td><td>0.99 W/kg (body), 0.99 W/kg (head), 3.85 W/kg (limb)</td></tr><tr><td>Manufacturer Warranty</td><td>1-year warranty</td></tr></tbody></table>`
    //     },
    //     media: {
    //         main: 'https://media.very.co.uk/i/very/QVYVN_SQ1_0000000020_BLUE_SLf',
    //         alts: [
    //             'https://media.very.co.uk/i/very/QVYVN_SQ2_0000000020_BLUE_SLb',
    //             'https://media.very.co.uk/i/very/QVYVN_SQ3_0000000020_BLUE_SLa',
    //             'https://media.very.co.uk/i/very/QVYVN_SQ4_0000000020_BLUE_SLd',
    //             'https://media.very.co.uk/i/very/QVYVN_SQ5_0000000020_BLUE_SLd1'
    //         ]
    //     }
    // }
}