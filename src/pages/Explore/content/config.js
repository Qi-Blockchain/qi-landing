import QidexIcon from 'assets/images/qidex-icon.png';
import QiStablecoinIcon from 'assets/images/qi-stablecoin-icon.png';
import HovrIcon from 'assets/images/hovr-icon.png';
import PowsomeIcon from 'assets/images/pawsome-icon.png';
import TokenCreatorIcon from 'assets/images/token-creator-icon.png';
import DocIcon from 'assets/images/doc-icon.png';

const config = [
    [
        {
            id:1,
            sectionName: 'Token swaps',
            sectionCards: [
                {
                    id: 10,
                    icon: QidexIcon,
                    heading: 'QI DEX',
                    text: 'First decentralized exchange on QI Blockchain network.',
                    new: 'New',
                    symbol: 'QIDEX',
                    appLink: 'https://qidex.site/',
                    tag: '',
                    symbolLink: 'https://mainnet.qiblockchain.online/token/0x0f2380e602dd7ea5d717d8bf78c52496f1d54a96'
                }
            ]
        },
        {
            id:2,
            sectionName: 'Payments',
            sectionCards: [
                {
                    id: 20,
                    icon: QiStablecoinIcon,
                    heading: 'QI USD',
                    text: 'Over-Collateralized Decentralized Stablecoin',
                    new: '',
                    symbol: '',
                    appLink: '',
                    tag: '',
                    soon: 'Coming Soon'
                }
            ]
        },
        {
            id:3,
            sectionName: 'Staking',
            sectionCards: [
                {
                    id: 30,
                    icon: TokenCreatorIcon,
                    heading: 'QI Staking',
                    text: 'Stake QI and earn QIDEX tokens with high APY',
                    new: '',
                    symbol: '',
                    appLink: 'https://qidex.site/#/stake',
                    tag: 'Recommendation'
                }
            ]
        },
    ],
    [
        {
            id:4,
            sectionName: 'NFT',
            sectionCards: [
                {
                    id: 40,
                    icon: HovrIcon,
                    heading: 'Hovr',
                    text: 'Own your web 3.0 domain, sell unique gaming NFTs items, create your digital avatar for your metaverse identity, create your own letter of wishes for loved ones and much more',
                    new: '',
                    symbol: '',
                    appLink: 'https://hovr.site/',
                    tag: ''
                }
            ]
        },
    ],
    [
        {
            id:5,
            sectionName: 'Play-2-Earn',
            sectionCards: [
                {
                    id: 50,
                    icon: PowsomeIcon,
                    heading: 'Pawsome',
                    text: 'Challenge friends and the online community by backing your puppy to race in the Metaverse!',
                    new: '',
                    symbol: '',
                    appLink: 'https://pawsome.host/',
                    tag: ''
                }
            ]
        },
    ],
    [
        {
            id:6,
            sectionName: 'Mobile apps',
            sectionCards: [
                {
                    id: 60,
                    icon: QiStablecoinIcon,
                    heading: 'QI Wallet',
                    text: 'Send and receive QIE, tokens and NFTs from mobile app with web3 browser and many other features.',
                    new: '',
                    symbol: '',
                    appLink: '',
                    tag: '',
                    soon: 'Coming Soon'
                }
            ]
        },
        {
            id:7,
            sectionName: 'Tools',
            sectionCards: [
                {
                    id: 70,
                    icon: TokenCreatorIcon,
                    heading: 'QIE-20 Token Creator',
                    text: 'Mint your unique token on QI here. Tokens are fully QIE20 compliant Non-Mintable Tokens. Use the QI token factory to mint your very own token at the click of a button.',
                    new: '',
                    symbol: '',
                    appLink: 'https://qidex.site/#/token-creator',
                    tag: ''
                }
            ]
        },
        {
            id:8,
            sectionName: 'Docs',
            sectionCards: [
                {
                    id: 80,
                    icon: DocIcon,
                    heading: 'QI Blockchain Docs',
                    text: 'Extensive information about QI Blockchain',
                    new: '',
                    symbol: '',
                    appLink: 'https://docs.qiblockchain.online/',
                    tag: ''
                }
            ]
        }
    ]
];

export default config;