import React, {Component, Fragment} from 'react';
import { NavLink } from 'react-router-dom';

import './SubmenuLayout.scss';

class SubmenuLayout extends Component {
    render() {
        return (
            <Fragment>
                <div className='Submenu_layout'>
                    <NavLink className='sudmenu_link' to="/listening">
                        Listening
                    </NavLink>
                    <NavLink className='sudmenu_link' to="/reading">
                        Reading
                    </NavLink>
                    <NavLink className='sudmenu_link' to="/speaking">
                        Speaking
                    </NavLink>
                    <NavLink className='sudmenu_link' to="/writing">
                        Writing
                    </NavLink>
                    <NavLink className='sudmenu_link' to="/grammar">
                        Bonus (Vocab + Grammar)
                    </NavLink>
                    <NavLink className='sudmenu_link' to="/video">
                        Bonus (Video tips)
                    </NavLink>
                    <NavLink className='sudmenu_link' to="/speaking-writing">
                        Speaking&Writing
                    </NavLink>
                </div>
            </Fragment>
        )
    }
}

export default SubmenuLayout;