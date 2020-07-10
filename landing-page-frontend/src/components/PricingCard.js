import React from 'react'

import { Card, H1, H4, Tag, H3 } from '@blueprintjs/core'

import Flexbox from './Flexbox'
import Button from './Button'

export default function PricingCard(props) {
    const { isLoading, length, mainPrice = "", crossedPrice = "", billed = {}, showFreeItemOne, showFreeItemTwo,
        isMoneyBack, percentageDiscount = "" } = props
    const { price, timeframe } = billed
    return (
        <Card  className={isLoading && "bp3-skeleton"} 
            style={{padding: "0", minWidth: "250px", minHeight: "325px"}}>
            {
                showFreeItemTwo && 
                <div style={{textAlign:"left", position: "relative", marginBottom: "-35px"}}>
                    <img src="/assets/2monthfree_bg.svg" style={{maxWidth: "50%", minWidth: "125px"}} />
                    <div style={{ position: "absolute", left: "10px", top: "32.5px", 
                        transform: "rotateZ(-42.5deg)", textAlign: "center" }}>
                        <H4 style={{color: "white"}}>
                            +2 months<p style={{fontSize: "22px", lineHeight: "25px", 
                                color: "white", fontWeight: "bold"}}>FREE</p>
                        </H4>
                    </div>
                </div>
            }
            <div style={{padding: showFreeItemTwo ? "0 0 1.5vh" : "5vh 0"}}>
                {showFreeItemOne && 
                    <Tag style={{margin: "0 auto 10px"}} intent="danger" round large>+ FREE TOASTER!</Tag>}
                <p>{length}</p>
                {percentageDiscount && <H3 style={{margin: 0}}>{percentageDiscount}% OFF !</H3>}
                {crossedPrice && <H3 style={{textDecoration: "line-through 2.5px #f74e5a", margin: 0}}>{crossedPrice}$</H3>}
                <div>
                    <Flexbox 
                        style={{justifyContent: "center"}}
                        leftStyle={{paddingRight: 0}}
                        leftItems={[
                            <H1 style={{fontSize: "76px", fontWeight: "700", 
                                letterSpacing: "-5px", margin: 0}}>
                                <p style={{fontSize: "36px", lineHeight: "40px", display: "inline", fontWeight: "700"}}>$</p>{mainPrice.split(".")[0]}
                            </H1>]}
                        rightStyle={{margin: 0, paddingTop: 0, paddingBottom: 0}}
                        rightItems={[
                            <div>
                                <H1 style={{fontWeight: "700", textAlign: "start", fontSize: "48px"}}>{mainPrice.split(".")[1]}</H1>
                                <H4 style={{fontWeight: "500"}}>/MONTH</H4>
                            </div>
                        ]}
                    />
                </div>
                <p style={{marginTop: "10px"}}>Billed {price}$ every {timeframe}</p>
                <Button style={{marginTop: "1.5vh"}} text="GET AWESOME NOW" />
                {isMoneyBack && <p style={{marginTop: "25px"}}><b>3.5-day money back guarantee</b></p>}
            </div>
        </Card>
    )
}
