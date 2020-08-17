import React, { Component } from 'react';

export class Page extends Component {
    static displayName = Page.name;

    render() {
        let className = "page "+ this.props.color;

        return (
            <section className={className}>
                {this.props.children}
            </section>
        );
    }
}
