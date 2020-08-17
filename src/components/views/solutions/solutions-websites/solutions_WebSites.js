import React, { Component } from 'react';
import GridSection, { GridElement } from 'components/shared/GridContainer';
import { ReactComponent as Comet } from 'components/assets/Comet.svg'
import { ReactComponent as Cosmic } from 'components/assets/Cosmic.svg'


class SolutionsWebSites extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<GridSection className="grid-section inverted-section" gridTemplate={gridTemplateMobile}>
				<GridElement gridTemplate={gridTemplate_Cosmic}>
					<Cosmic height="auto" width="100%" />
				</GridElement>

				<GridElement gridTemplate={gridTemplate_Comet}>
					<Comet height="80%" width="auto" />
				</GridElement>

				<GridElement className='tm-border-dark' gridTemplate={gridTemplate_WebWindow}>
				</GridElement>

				<GridElement className='tm-border-dark display-grid' gridTemplate={gridTemplate_TopBar}>

					<div className='tm-bg-red' style={topBarCircle}></div>
					<div className='tm-bg-red' style={topBarCircle}></div>
					<div className='tm-bg-red' style={topBarCircle}></div>
					<div className='' ></div>
					<div className='' ></div>

						
				</GridElement>

				<GridElement gridTemplate={gridTemplate_Foot}>
				</GridElement>

				<GridElement className='tm-border-red' gridTemplate={gridTemplate_SuperTitle}>
					<div className='bolded text-left tm-text-md'>You could use a</div>
				</GridElement>

				<GridElement className='tm-border-red' gridTemplate={gridTemplate_Title}>
					<div className='bolded text-left tm-text-md'><span className='tm-red tm-text-lg'>Stellar </span>Website</div>
				</GridElement>

				<GridElement className='tm-border-red' gridTemplate={gridTemplate_Description}>
					<div className='oswald text-right tm-text-xsm'>{Description}</div>
				</GridElement>

				<GridElement className='display-grid' gridTemplate={gridTemplate_Tools}>
				</GridElement>

				<GridElement className='display-grid' gridTemplate={gridTemplate_Interact}>
					<div className='santiago tm-light tm-bg-red text-center tm-text-xsm'>I want a website!</div>
				</GridElement>

			</GridSection>
		);
	}
}

export default SolutionsWebSites;

var gridTemplateMobile = {
	gridTemplateRows: "repeat(10, 1fr)",
	gridTemplateColumns: "repeat(15, 1fr)",
}

var topBarCircle = {
	height: "20px",
	width: "20px",
	borderRadius: "50%",
	margin: '5px',
}

var gridTemplate_TopBar = {
	gridColumnStart: "4",
	gridColumnEnd: "13",
	gridRowStart: "3",
	gridRowEnd: "4",
	zIndex: "1",
	margin: "10px",
	paddingBottom: "10px",
	borderBottom: "2px solid",
	gridTemplateColumns: "auto auto auto 1fr auto",
	alignSelf: "center",
}

var gridTemplate_Cosmic = {
	gridColumnStart: "9",
	gridColumnEnd: "16",
	gridRowStart: "1",
	gridRowEnd: "11",
	zIndex: "1",
	justifySelf: "center",
	alignSelf: "center",
}

var gridTemplate_Comet = {
	gridColumnStart: "4",
	gridColumnEnd: "6",
	gridRowStart: "7",
	gridRowEnd: "9",
	zIndex: "1",
	paddingLeft: "15px",
	justifySelf: 'center',
}

var gridTemplate_WebWindow = {
	gridColumnStart: "4",
	gridColumnEnd: "13",
	gridRowStart: "3",
	gridRowEnd: "9",
	zIndex: "1",
	border: "2px solid",
	borderRadius: "1px",
}

var gridTemplate_Foot = {
	gridColumnStart: "1",
	gridColumnEnd: "-1",
	gridRowStart: "10",
	gridRowEnd: "-1",
	zIndex: "1",

}

var gridTemplate_SuperTitle = {
	gridColumnStart: "4",
	gridColumnEnd: "7",
	gridRowStart: "5",
	gridRowEnd: "6",
	zIndex: "1",
	alignSelf: "end",
	paddingLeft: "15px",
}

var gridTemplate_Title = {
	gridColumnStart: "4",
	gridColumnEnd: "7",
	gridRowStart: "6",
	gridRowEnd: "7",
	zIndex: "1",
	paddingLeft: "15px",
}

var gridTemplate_Description = {
	gridColumnStart: "7",
	gridColumnEnd: "13",
	gridRowStart: "4",
	gridRowEnd: "9",
	zIndex: "1",
	lineHeight: '1.8',
	paddingTop: "50px",
	borderLeft: '5px solid',
	paddingRight: "15px",
	paddingLeft: "15px",
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

var gridTemplate_Interact = {
	gridColumnStart: "10",
	gridColumnEnd: "13",
	gridRowStart: "8",
	gridRowEnd: "9",
	zIndex: "1",
	border: "2px solid",
	margin: "15px",
	padding: "5px",
	textAlign: "center",
	alignSelf: "center",
}



var LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ";
var Description = 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick react native zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex.Flutter Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five swift zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips';