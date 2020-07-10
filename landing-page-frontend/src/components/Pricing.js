import React from 'react'
import { H1, } from '@blueprintjs/core'
import PricingCard from './PricingCard'

export default function Pricing({ prices, isLoading }) {

    return (
        <div style={{textAlign: "center", margin: "5vh auto"}}>
            <H1 style={{fontStyle:"italic", color: "white", 
                textShadow: "2.5px 2.5px 5px #37474f"}}>ULLAMCORPER SIT<br/>AMET RISUS NULLAM EGET</H1>
            <br/>
            <b style={{color: "white", textShadow: "2.5px 2.5px 5px #37474f"}}>AND NOBODY HAS A CLUE ABOUT WHAT YOU'RE DOING ONLINE</b>
            <div style={{display:"flex", justifyContent: "center", marginTop: "5vh",
                flexFlow: "row wrap", alignItems: "center",
            }}>
                {
                    prices && prices.map((item, i) => <div key={i} style={{padding: "5px 10px"}}>
                            <PricingCard {...item} />
                        </div>
                    )
                }
                {
                    isLoading && ["", "", ""].map((item, i) => {
                        return <div key={i} style={{padding: "5px 10px"}}>
                            <PricingCard isLoading={isLoading} 
                            />
                        </div>
                    })
                }
            </div>
        </div>
    )
}
