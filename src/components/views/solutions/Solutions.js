import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from 'components/layout-elements/footer/footer';
import { ReactComponent as Apps } from 'components/assets/icon-apps.svg';
import { ReactComponent as Software } from 'components/assets/icon-software.svg';
import { ReactComponent as Web} from 'components/assets/icon-web.svg';
import { ReactComponent as Mobile } from 'components/assets/icon-mobile.svg';
import { ReactComponent as Ui } from 'components/assets/icon-ui.svg';
import { ReactComponent as Fun } from 'components/assets/Icon feather-smile.svg';
import { ReactComponent as Iot } from 'components/assets/icon-iot.svg';
import { ReactComponent as Cloud } from 'components/assets/icon-cloud.svg';




export class Solutions extends Component {
    static displayName = Solutions.name;

    state = {}
    render() {
        return (
            <Fragment>
                <section className="feature-section inverted-section p-bottom-10">
                    <div className="flex-container">
                        <div className='feature-hero-title'>
                            <p className="bolded tm-text-lg text-left">Solutions</p>
                            <p className="bolded tm-text-md tm-red text-left">And some of the stuff we're interested in doing.</p>
                        </div>
                    </div>
                </section>
                <section className="feature-section display-grid">
                    <div className="display-grid tm-solutions-grid" style={solutionsGrid.desktop}>
                        <CardsCollection />
                    </div>
                </section>
                <Footer />
            </Fragment>
            
        );
    }
}


var solutionsGrid = {
    desktop: {
        gridTemplateRows: "1fr 1fr 1fr",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: '10px',
    },
    mobile: {
        gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        gridGap: '10px',
        gridTemplateColumns: "1fr",
    },
    solutionsGridItem: {
        gridTemplateRows: "1fr 2fr 1fr",
        gridTemplateColumns: "1fr 4fr",
    }
}


//Should iterate over the cards object and return

class CardsCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        var SolutionsCardPropsArray = Object.entries(SolutionsCards);
        console.log(SolutionsCardPropsArray);
        var SolutionsCardsArray = [];

        SolutionsCardPropsArray.forEach((SolutionCardItem) => {
            SolutionsCardsArray.push(<Card icon={SolutionCardItem[1].icon} styleObject={solutionsGrid.solutionsGridItem} title={SolutionCardItem[1].title} description={SolutionCardItem[1].description} link={SolutionCardItem[1].url} />);
        }) 


        return (SolutionsCardsArray);

    }
}



////Card needs:
////Icon
////Title
////Textbody
////Linkto

class Card extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <div className='tm-solutions-grid-element display-grid' style={this.props.styleObject}>
                    <div>{this.props.icon}</div>
                    <p className=' tm-text-md bauhaus title'>{this.props.title}</p>
                    <div/>
                    <p className='mont tm-text-xsm'>{this.props.description}</p>
                    <div />
                    <Link to={this.props.link}><p className='oswald tm-text-sm tm-red text-right align-self-center'>more</p></Link>
                </div>
            </Fragment>
        );
    }
}

//Create Cards object

var SolutionsCards = {
    solution1: {
        icon: <Apps/>,
        title: 'Apps',
        description: "We're all about progressive web apps that change over time just like your vision.",
        url: 'solutions/webapps',
    },
    solution2: {
        icon: <Software/>,
        title: 'Software',
        description: "Specialized software? That's our specialty.",
        url: 'link/to/page',
    },
    solution3: {
        icon: <Web/>,
        title: 'Web',
        description: "It's 2020 - if you haven't already got a website what's stopping you?",
        url: 'solutions/websites',
    },
    solution4: {
        icon: <Mobile/>,
        title: 'Mobile',
        description: "We know how most people browse the web and what tech they use. You have to be mobile friendly if you want to fit in.",
        url: 'solutions/mobile',
    },
    solution5: {
        icon: <Ui />,
        title: 'UI/UX',
        description: "We only make interfaces and experiences that we know we'd enjoy. And we, like you, are humans.",
        url: 'solutions/uiux',
    },
    solution6: {
        icon: <Fun/>,
        title: 'Fun',
        description: 'Some of the stuff we created while messing about. Doodles if you will.',
        url: 'link/to/page',
    },
    solution7: {
        icon: <Iot/>,
        title: 'IoT',
        description: 'Internet of things and things on the internet. This stuff is only going to be more prevalent in the futre.',
        url: 'link/to/page',
    },
    solution8: {
        icon: <Cloud/>,
        title: 'Cloud',
        description: 'Yes, we do do stuff on the cloud (hehe - we said "dodo").',
        url: 'link/to/page',
    },
}


