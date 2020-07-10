import React from 'react'

import { Menu, MenuItem, Popover, Button } from '@blueprintjs/core'

import Flexbox from './Flexbox'
import Link from './Link'

import '../styles/components/subNavBar.scss'

export default function SubNavBar({ locale, isLoading }) {
    return (
        <div id="sub-nav-bar">
            <Flexbox 
                style={{alignItems: "flex-start"}}
                leftItems={[
                    <Link href="#">
                        <img src="/assets/logo.svg" alt="Logo" />
                    </Link>,
                ]}
                rightStyle={{paddingTop: "15px"}}
                rightItems={[
                    <Link href="#">HOME</Link>,
                    <Link href="#">ABOUT US</Link>,
                    <Link href="#">HOW AWESOME ARE WE?</Link>,
                    <Popover interactionKind="hover" position="bottom-left" enforceFocus content={  
                        <Menu>
                            <MenuItem text="Option 1" />
                            <MenuItem text="Option 2" />
                            <MenuItem text="Option 3" />
                            <MenuItem text="Option 4" />
                            <MenuItem text="Option 5" />
                        </Menu>
                    }>
                        <Link href="#">F.A.Q</Link>
                    </Popover>,
                    <Link href="#">PRICING</Link>,
                    <div>
                        <Popover position="bottom" interactionKind="hover" content={
                            <Menu><MenuItem text={locale || "English"} /></Menu>
                        }>
                            <Button minimal loading={isLoading}
                                icon={<img src="/assets/globe-americas.svg" />} 
                                text={locale || "English"}
                                rightIcon={<img src="/assets/chevron-down.svg" />}
                            />
                        </Popover>
                    </div>
                ]}
            />
        </div>
    )
}
