import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from 'components/context';
import Icons from 'components/icons';
import LargeButton from 'components/shared/buttons/large-button/LargeButton';


/**
 * Responsible for rendering floating buttons
 * Some Description of the component
 * @augments {Component<Props, State>}
 */
class FloatingButtons extends Component {
    static contextType = AppContext;

    render() {
        return (
            <Fragment>
                <div className='d-flex' style={style_icons_template}>
                    <span className={class_float_button}>
                    <Mailto email="info@toastedmarshmallow.co" subject="A prospective collaboration opportunity" body="Hey guys! I need a team of people who can make some fancy software for me. . .">
                        {Icons.Contact}  
                    </Mailto>
                    </span>
                    <span className={class_float_button}>
                        <a href='https://www.linkedin.com/company/toasted-marshmallow'>{Icons.LinkedIn}</a>
                    </span>
                    <span className={class_float_button}><a href='https://github.com/VoxPolly27/toasted_marshmallow_app'>{Icons.Git}</a></span>
                    <span className={class_float_button}>{Icons.Twitter}</span>
                    <span onClick={this.context.callback_handle_theme_update} className={class_float_button}>{Icons.Theme}</span>
                </div>

            </Fragment>
        );
    }
}

export default FloatingButtons;

FloatingButtons.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
}

const class_float_button = 'p-10 box-hover transition-quick m-h-2 tm-bg-primary cursor-pointer tm-bg-red-hover place-items-center';

const style_icons_template = {
    position: 'fixed',
    bottom: '0',
    right: '1vw',
}


function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{props.children}</a>
  );
}