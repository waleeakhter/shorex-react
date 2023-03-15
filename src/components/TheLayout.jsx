
import React, { useState } from 'react';
import classNames from 'classnames';
import { Helper, ErrorBoundary, TheContent, TheSidebar, TheAside, TheFooter } from '@evenlogics/whf-ra-components';
import TheHeader from './Header/Header';
import { AppProvider } from '../Context';
const TheLayout = (props) => {
   
    const classes = classNames('c-app c-default-layout');
    const [internalActive, setInternalActive] = useState(' internal-disabled');
    const [promotionActive, setPromotionActive] = useState(' promotion-disabled');

    React.useEffect(() => {
        Helper.themeActiveMode();

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser?.settings?.internal_active) {
            setInternalActive(" internal-enabled");
        }

        if (currentUser?.settings?.promotions) {
            setPromotionActive(" promotion-enabled");
        }
        // console.log('asldkfj', currentUser.settings.internal_active);
    }, [])

    return (
        <AppProvider>
            <div className={classes + internalActive + promotionActive}>
            {
                JSON.parse(localStorage.getItem('currentUser')) && <TheSidebar />
            }

            <TheAside />
            <div className="c-wrapper">
                {JSON.parse(localStorage.getItem('currentUser')) && <TheHeader />}

                <ErrorBoundary>
                    <div className="c-body">
                        <TheContent />
                    </div>
                </ErrorBoundary>
                <TheFooter />
            </div >
        </div >
        </AppProvider>
        
    );
};

export default TheLayout;
