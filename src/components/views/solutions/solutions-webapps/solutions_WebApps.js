import React, { Component } from 'react';
import GridSection, { GridElement } from 'components/shared/GridContainer';
import { ReactComponent as Art } from 'components/assets/Prism.svg'
import { ReactComponent as XD } from 'components/assets/icon-xd.svg'
import { ReactComponent as Sketch } from 'components/assets/icon-sketch.svg'
import { ReactComponent as Figma } from 'components/assets/icon-figma.svg'





class SolutionsMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <GridSection className="grid-section" gridTemplate={gridTemplateMobile}>
                <GridElement gridTemplate={gridTemplate_Art1}>
                    <Art height="auto" width="100%" />
                </GridElement>

                <GridElement gridTemplate={gridTemplate_Art2}>
                    <Art height="auto" width="100%" />
                </GridElement>

                <GridElement gridTemplate={gridTemplate_Art3}>
                    <Art />
                </GridElement>

                <GridElement gridTemplate={gridTemplate_Foot}>
                </GridElement>

                <GridElement className='tm-border-red' gridTemplate={gridTemplate_SuperTitle}>
                    <div className='bolded text-center tm-text-md'>custom</div>
                </GridElement>

                <GridElement className='tm-border-red' gridTemplate={gridTemplate_Title}>
                    <div className='bolded text-center tm-red tm-text-lg'>Web Apps</div>
                </GridElement>

                <GridElement gridTemplate={gridTemplate_Description}>
                    <div className='oswald text-center tm-text-xsm p-2'>{Description}</div>
                </GridElement>

                <GridElement className='display-grid' gridTemplate={gridTemplate_Tools}>
                </GridElement>

            </GridSection>
        );
    }
}

export default SolutionsMobile;

var gridTemplateMobile = {
    gridTemplateRows: "repeat(10, 1fr)",
    gridTemplateColumns: "repeat(15, 1fr)",
}

var gridTemplate_Art1 = {
    gridColumnStart: "3",
    gridColumnEnd: "5",
    gridRowStart: "3",
    gridRowEnd: "5",
    zIndex: "1",
    justifySelf: "center",
    alignSelf: "center",
}

var gridTemplate_Art2 = {
    gridColumnStart: "10",
    gridColumnEnd: "15",
    gridRowStart: "3",
    gridRowEnd: "10",
    zIndex: "1",
    justifySelf: "center",
    alignSelf: "center",
}

var gridTemplate_Art3 = {
    gridColumnStart: "1",
    gridColumnEnd: "5",
    gridRowStart: "5",
    gridRowEnd: "16",
    zIndex: "1",
    justifySelf: "end",
}

var gridTemplate_Foot = {
    gridColumnStart: "1",
    gridColumnEnd: "-1",
    gridRowStart: "10",
    gridRowEnd: "-1",
    zIndex: "1",

}

var gridTemplate_SuperTitle = {
    gridColumnStart: "6",
    gridColumnEnd: "11",
    gridRowStart: "2",
    gridRowEnd: "3",
    zIndex: "1",
    padding: "5px",
    alignSelf: "end",
}

var gridTemplate_Title = {
    gridColumnStart: "6",
    gridColumnEnd: "11",
    gridRowStart: "3",
    gridRowEnd: "4",
    zIndex: "1",
    borderBottom: "2px solid"
}

var gridTemplate_Description = {
    gridColumnStart: "5",
    gridColumnEnd: "12",
    gridRowStart: "4",
    gridRowEnd: "9",
    zIndex: "1",
    lineHeight: '1.8',
    paddingTop: "50px",
}

var gridTemplate_Tools = {
    gridColumnStart: "3",
    gridColumnEnd: "5",
    gridRowStart: "8",
    gridRowEnd: "9",
    zIndex: "1",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "1fr",
    gridGap: "40px",
    justifySelf: "center",
    alignSelf: "center",
}



var LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ";
var Description = 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick react native zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex.Flutter Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five swift zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips';