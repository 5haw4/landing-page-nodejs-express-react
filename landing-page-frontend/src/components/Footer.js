import React from 'react'

import Flexbox from './Flexbox'
import { H5, Spinner } from '@blueprintjs/core'
import Link from './Link'

export default function Footer(props) {
    const { isLoading, isMobile, browser } = props

    const links = <>
        <div style={{margin: "10px auto"}}><Link href="#">nulla porttitor</Link></div>
        <div style={{margin: "10px auto"}}><Link href="#">massa id neque</Link></div>
        <div style={{margin: "10px auto"}}><Link href="#">aliquam</Link></div>
        <div style={{margin: "10px auto"}}><Link href="#">vestibulum morbi</Link></div>
        <div style={{margin: "10px auto"}}><Link href="#">blandit cursus</Link></div>
        <div style={{margin: "10px auto"}}><Link href="#">tortor consequat</Link></div>
    </>

    return (
        <div id="footer">
            <div style={{maxWidth: "1250px", margin: "auto", position: "relative"}}>
                <Flexbox 
                    style={{padding: "2.5vh 2.5vw", justifyContent: "space-between"}}
                    leftStyle={{width: "100%", maxWidth: "850px"}}
                    leftItems={[
                        <div style={{margin:"10px 5px"}}>
                            <H5>HOME</H5>
                            {links}
                        </div>,
                        <div style={{margin:"10px 5px"}}>
                            <H5>ABOUT US</H5>
                            {links}
                        </div>,
                        <div style={{margin:"10px 5px"}}>
                            <H5>HOW AWESOME ARE WE?</H5>
                            {links}
                        </div>,
                        <div style={{margin:"10px 5px"}}>
                            <H5>F.A.Q</H5>
                            {links}
                        </div>,
                        <div style={{margin:"10px 5px"}}>
                            <H5>PRICING</H5>
                            {links}
                        </div>,
                    ]}
                    rightStyle={{margin: "auto"}}
                    rightItems={[
                        <div style={{textAlign: "center"}}>
                            <H5>Excellent</H5>
                            <img alt="Trust Pilot" src="/assets/Trustpilot_logo.svg" />
                            <p>based on 5484 reviews</p>
                        </div>
                    ]}
                />

                <div style={{textAlign: "center"}}>
                    {isLoading && <Spinner size="18" />}
                    <b>{browser && <>You're browsing on {browser.name}{browser.version && <> version {browser.version}</>}</>}
                    {
                        isMobile !== undefined && 
                        <> on a {isMobile ? "mobile device" : "non-mobile device"}</>
                    }
                    </b>
                </div>

                <Flexbox 
                    style={{height: "100%"}}
                    centerStyle={{width: "100%", maxWidth: "550px"}}
                    centerItems={[
                        `Copyright © ${new Date().getFullYear()} The Great editor Tool inc.`,
                        "|",
                        <Link href="#">Terms of Service</Link>,
                        "|",
                        <Link href="#">Privacy Policy</Link>,
                    ]}
                />
                <div style={{background: "#2D3B41", borderRadius: "50%", cursor: "pointer",
                        position: "absolute", right: "2.5vw", bottom: "10px", padding: "5px", 
                        display: "flex"}}
                    onClick={() => window.scroll({top: 0, left: 0, behavior: 'smooth'})}>
                    <img src="/assets/chevron-circle-up.svg" />
                </div>
            </div>
        </div>
    )
}