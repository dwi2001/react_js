import React from "react";

const About = () => {

    const data = [
        {
            nomor: 1
        },
        {
            nomor: 2

        },
        {
            nomor: 3

        },
        {
            nomor: 4
        },
        {
            nomor: 4
        }
    ]

    const list = data.map((data) => {
        console.log(data, 'masukkkkkk');
        return (
            <li>
                {data}
            </li>
        )

    })

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>About</h1>
            <div>
                <button style={{ width: 100, backgroundColor: 'red' }}>
                    test
                </button>
                <ul>
                    {list}
                </ul>
            </div>
        </div>
    )
}

export default About;