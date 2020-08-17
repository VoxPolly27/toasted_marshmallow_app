import React, { Component } from 'react';

export class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static displayName = Title.name;

    static renderHeadingSuper(props) {
        let marshmallow = "M a r s h m a l l o w";
        let marshmallowArr = marshmallow.split(' ');
        let classes = "transition-letter-md transition-quick tm-red " + props.titleM;
        return (
            marshmallowArr.map(letter => <span className={classes}>{letter}</span>)
        );
    }

    static renderHeadingSub(props) {
        let toasted = "T o a s t e d";
        let toastedArr = toasted.split(' ');
        return (
            toastedArr.map(letter => <span className={props.title}>{letter}</span>)
        );
    }

    render() {
        let toasted = Title.renderHeadingSub(this.props);
        let marshmallow = Title.renderHeadingSuper(this.props);
        return (
             <div className="santiago">{toasted}{marshmallow}</div>
        );
    }
}

