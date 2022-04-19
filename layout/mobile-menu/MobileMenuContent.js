import React from 'react';

import MobileMenu from '../../components/mobile/mobile-menu/MobileMenu';
import MobileSearch from '../../components/mobile/mobile-search/MobileSearch';


function MobileMenuContent() {
    return (
        <div className="mobile_menu_content">
            <div className="mobile_menu">
                <MobileSearch />
                <MobileMenu />
            </div>
        </div>
    );
}

export default MobileMenuContent;
