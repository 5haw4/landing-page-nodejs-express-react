import React, { Component } from 'react'

import '../styles/components/table.scss'

export default class Table extends Component {
    render() {
        const { title, items } = this.props;
        return (
            <div className="table-holder">
                <div className="title">{title}</div>
                <table>
                    <tbody>
                        {
                            items.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        {
                                            item.map((val, x) => {
                                                return (
                                                    i == 0 ? 
                                                    (
                                                        <th key={x}><div>{val}</div></th>
                                                    ) : (
                                                        <td key={x}><div>{val}</div></td>
                                                    )
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
