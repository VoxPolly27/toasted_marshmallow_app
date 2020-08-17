import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import './NavMenu.css';
import { Title } from 'components/shared/title/title';
import { ReactComponent as MarshMallow } from 'components/assets/MarshMallow.svg';
import { AppContext } from 'components/context';
 
export class NavMenu extends Component {

    static contextType = AppContext;


    render() {
        const { data_width } = this.context;
        var isMobile = data_width <= 780;

        if (isMobile) {
            return (
                <NavMenuMobile />
            );
        } else {
            return (
                <NavMenuDesktop />
            );
        }
    }
}





class NavMenuDesktop extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
        collapsed: true,
    };

  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

    render() {
        return (
        <Fragment>
                <header className='p-5 p-fixed d-grid' style = {
                template_header_style
            }>
                    <div className='santi transition-quick text-md'>
                            <Title titleM={'transition-letter-md'} title={'tm-inverse'} />
                    </div>     
                    <div></div>
                    {/* <div className='d-flex p-right-10 flex-row tm-primary text-xxsm bolded p-0 m-0'>
                        <Link to='/solutions'><p className='tm-red-hover transition-quick p-h-5'>Solutions</p></Link>
                        <Link to='/company'><p className='tm-red-hover transition-quick p-h-5'>Company</p></Link>
                        <Link to='/ops'><p className='tm-red-hover transition-quick p-h-5'>Ops</p></Link>
                        <Link to='/contact'><p className='tm-red-hover transition-quick p-h-5'>Contact</p></Link>
                    </div>                */}
            </header>
        </Fragment>
    );
  }
}

const template_header_style={
    top: "0px",
    left: "0px",
    maxWidth : "100%",
    width: "100%",
    gridTemplateColumns: "auto 1fr auto",
}

class NavMenuMobile extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: false,
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });

        console.log("clicked");
        let element = document.getElementById('navmenu');
        let toggler = document.getElementById('navtoggler');

        if (this.state.collapsed) {
            element.classList.add('tm-nav-menu-wrapper-active');
            toggler.classList.add('active');

        } else {
            element.classList.remove('tm-nav-menu-wrapper-active');
            toggler.classList.remove('active');
        }
    }

    render() {
        return (
            <section>
            <header>
                <div id="nav" className="navbar-expand-sm navbar-toggleable-sm transition-quick" style={{ position: "fixed", zIndex: "1"}}>
                    <div className="container-fluid">
                            <TMNavToggler onClick={this.toggleNavbar} />
                            <div id="navmenu" className='tm-nav-menu-wrapper tm-bg-light'>
                                <div className='tm-nav-menu-inner'>
                                    <Link onClick={this.toggleNavbar} to='/solutions'><p className='tm-text-md bolded'>Solutions</p></Link>
                                    <Link onClick={this.toggleNavbar} to='/company'><p className='tm-text-md bolded'>Company</p></Link>
                                    <Link onClick={this.toggleNavbar} to='/ops'><p className='tm-text-md bolded'>Ops</p></Link>
                                    <Link onClick={this.toggleNavbar} to='/contact'><p className='tm-text-md tm-red bolded'>Contact</p></Link>
                                </div>
                            </div>
                    </div>
                </div>
            </header>
            </section>
        );
    }
}


class TMNavToggler extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <svg id="navtoggler" style={{ zIndex: "20", position: "fixed" }} className="ham hamRotate ham8" viewBox="0 0 100 100" width="50" onClick={this.props.onClick}>
                <path
                    className="line top"
                    d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                <path
                    className="line middle"
                    d="m 30,50 h 40" />
                <path
                    className="line bottom"
                    d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
            </svg>
            )
    }
}

//onclick = "this.classList.toggle('active')"

                //     <Navbar id="nav" className="navbar-expand-sm navbar-toggleable-sm transition-quick nav-top"> 
                //         <div className="container-fluid">
                //             <NavbarBrand tag={Link} to="/" className="Nav-Title heading">
                //                 <Title titleM={'tm-text-md transition-letter-md transition-quick'} title={'tm-inverse transition-quick'} />
                //             </NavbarBrand>
                //     <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                //       <ul className="navbar-nav flex-grow float-right">
                //         <NavItem>
                //                         <NavLink tag={Link} className='bolded transition-quick tm-inverse tm-red-hover' to="/solutions" data-letters={'Solutions'}>Solutions</NavLink>
                //         </NavItem>
                //         <NavItem>
                //                         <NavLink tag={Link} className="bolded transition-quick tm-inverse tm-red-hover" to="/company" data-letters={'Company'}>Company</NavLink>
                //         </NavItem>
                //         <NavItem>
                //                         <NavLink tag={Link} className="bolded transition-quick tm-inverse tm-red-hover" to="/contact" data-letters={'Contact'}>Contact</NavLink>
                //                     </NavItem>
                            
                //       </ul>
                //     </Collapse>
                //   </div>
                // </Navbar>