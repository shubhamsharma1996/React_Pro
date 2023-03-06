import { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { RestaurantList,SWIGGY_API } from "../constant";
import ShimmerUI from "./Shimmer";



const Body = () => {
    const [searchText,setSearchText] = useState('')
    const [restaurants,setRestaurants] = useState([])
    const [filteredRestaurant,setFilteredRestaurant] = useState([])
    const [Loading,setLoading] = useState(true)

    const filterFunc = (val) =>{
        setSearchText(val)
        let filterData = restaurants.filter(i=>(
            i?.data?.name?.toLocaleLowerCase().includes(val)
        ))
        setFilteredRestaurant(filterData)
    }

    const fetchFoodList = async() =>{
        const response = await fetch(SWIGGY_API)
        const data = await response.json()
        let list = data?.data?.cards[2]?.data?.data?.cards
        setRestaurants(list)
        setFilteredRestaurant(list)
        setLoading(false)
    }

    useEffect(()=>{
        fetchFoodList()
    },[])

    return (Loading ?  <ShimmerUI/> : (
        <>
        <div className="search">
                <input 
                    type="text" 
                    className="search-text" 
                    placeholder="Search for restaurant" 
                    value={searchText} 
                    onChange={e=>filterFunc(e.target.value)}
                />
               
            </div>
        <div className="restaurant-list">
            {filteredRestaurant.length> 0 ?filteredRestaurant?.map((restaurant) => {
                return (
                    <RestaurantCard {...restaurant.data} key={restaurant?.data?.id} />
                    )
                })
            
            :<h1>No Restaurant Available For Your Search</h1>}
        </div>
                </>
    ))
}

export default Body;