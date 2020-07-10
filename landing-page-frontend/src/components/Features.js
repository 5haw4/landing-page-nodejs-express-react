import React from 'react'
import Table from './Table'
import { H3 } from '@blueprintjs/core'

import Button from './Button'

export default function Features() {
    return (
        <div id="features">
            <Table 
                items={[
                    ["", "", "", "", ""],
                    ["", "", "", "", ""],
                    ["", "", "", "", ""],
                    ["", "", <img src="/assets/logo_icon_red.svg" />, <img src="/assets/logo_icon_white.svg" />, ""],
                    ["", "", 
                        <H3 style={{fontSize: "20px", color: "white", fontWeight: "normal"}}>
                            The Free Awesome Tool
                        </H3>, 
                        <H3 style={{fontSize: "20px", color: "white"}}>
                            Ultimate Awesome Tool
                        </H3>, 
                    ""],
                    ["", "Ullamcorper", <><b>Pharetra</b><br/>Pharetra</>, "Sed elementum tempus egestas", ""],
                    ["", "Lorem ipsum", "consectetur adipiscing elit", "Mauris ultrices venenatis", ""],
                    ["", "Praesent ac lectus", "ultricies dapibus", "nisi nunc", ""],
                    ["", "Ut non iaculis orci", "pharetra in vehicula et", "venenatis eu ante", ""],
                    ["", "Aenean pellentesque ", "Donec volutpat turpis orci", "fermentum augue feugiat", ""],
                    ["", "Fusce ornare imperdiet", <img src="/assets/times.svg" />, <img src="/assets/check.svg" />, ""],
                    ["", "Nam fringilla blandit", <img src="/assets/times.svg" />, <img src="/assets/check.svg" />, ""],
                    ["", "Quisque ornare", <img src="/assets/times.svg" />, <img src="/assets/check.svg" />, ""],
                    ["", "Fusce id risus", <img src="/assets/times.svg" />, <img src="/assets/check.svg" />, ""],
                    ["", "", 
                        <Button large text={<b>GET AWESOME FOR FREE</b>} />, 
                        <Button large text={<b>START FREE TRIAL</b>} />, 
                    ""],
                    ["", "", "", "", ""],
                    ["", "", "", "", ""],
                    ["", "", "", "", ""],
                    ["", "", "", "", ""],
                ]}
            />
        </div>
    )
}
