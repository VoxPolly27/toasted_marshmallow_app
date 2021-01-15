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
                <div className='d-flex svg-md' style={style_icons_template}>
                    <Mailto className={class_float_button} email="info.wolff@toastedmarshmallow.co,tudor.wolff@toastedmarshmallow.co,steve.purkis@toastedmarshmallow.co" subject="A prospective collaboration opportunity" body="Hey guys! I need a team of people who can make some fancy software for me. . .">
                    <span className='tm-light'>
                        {Icons.Contact}  
                    </span>
                    </Mailto>

                    <a className={class_float_button} href='https://www.linkedin.com/company/toasted-marshmallow'>
                        <span className='tm-light'>
                            {Icons.LinkedIn}
                        </span>
                    </a>

                    <a className={class_float_button} href='https://github.com/VoxPolly27/toasted_marshmallow_app'>
                        <span className='tm-light'>
                                {Icons.Git}
                        </span>
                    </a>

                    <a className={class_float_button} href='https://twitter.com/toasted_M'>
                        <span className='tm-light'>
                            {Icons.Twitter}
                        </span>
                    </a>
                    
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


function Mailto({ email, subject, body, className, ...props }) {
  return (
    <a className={className} href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{props.children}</a>
  );
}