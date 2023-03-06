import React from "react"
import ReactDOM from "react-dom/client"
import Heading from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"




const AppLayout = () => {
    return (
        <>
            <Heading />
            <Body />
            <Footer />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout />)


/* 
Architecture of our project

    -Heading
     -title
     -navbar(right side)
    -Body
     -search bar
     -list of resturatants
        -resturants details(in card)
    -Footer    

*/