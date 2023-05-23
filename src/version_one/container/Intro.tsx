import React from 'react'

type Props = {}

const Intro = (props: Props) => {
    return (
        <div>

            <p>Choose your class</p>
            <section>
                <label>
                    <input type="radio" name="super_teen"/>
                    Six to Eight
                </label>

                <label>
                    <input type="radio" name="super_teen"/>
                    Nine to Twelve
                </label>

                <label>
                    <input type="radio" name="super_teen"/>
                    Thirteen to Fifteen
                </label>

                <label>
                    <input type="radio" name="super_teen"/>
                    Sixteen to Twenty
                </label>
                
            </section>
        </div>
    )
}

export default Intro