import React from "react"
import ReactDOM from "react-dom/client"



// this one is used for creating element by js 

// const heading = document.createElement("h1")

// heading.innerHTML = "Hello Shubham"

// const root = document.getElementById('root')

// root.append(heading)


// <=====================================>

// React.createElement => Obj => HTML(DOM)

// this one is used for creating element by react.js


// =====> React.creatlement take 3 arguments, first is the tag second is the object which contain attributes and third is the content =======

// const heading = React.createElement('h1', {}, 'Hello Shubham')

// ======> if we want to create multiple element we can do this by using following method ======

// const heading1 = React.createElement('h2', { id: 'simran' }, 'Hello Simran')

// const container = React.createElement('div', { className: 's&s' }, [heading, heading1])

// <=====================================/>


// <======================================>

// above way of creating react element is not good and also hectic so we can create react element using jsx which is eventualy converted by babel in the react.createElementForm

// JSX => React.createElement => Obj => HTML(DOM)

// we can call this a react element 
const heading = (
    <h1 className="shubham">
        Shubham
    </h1>
)

// this is know as React Component
const HeadingComponent = () => {
    return (
        <>
            {/* {heading} we can call elememt in a component */}
            {heading}
            <h1 className="meraki">Meraki</h1>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

// if we have to render react elememt  which is named as  heading then this is the method =======>

// root.render(heading)

// if we have to render react component  which is named as  HeadingComponent then this is the method =======>

root.render(<HeadingComponent />)