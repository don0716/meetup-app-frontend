import {Link } from "react-router-dom"
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import useFetch from "../useFetch"
import { useEffect, useState } from "react"

const Home = () => {
    const {data, loading, error} = useFetch(`https://meetup-app-backend-git-main-donovans-projects-b7659c43.vercel.app/events`)

    const [selectedEventType, setSelectedEventType] = useState("Both")
    const [searchValue, setSearchValue] = useState('')

    const filterByTagsAndTitle = data?.filter((event) => event.title === searchValue || event.eventTags.find(tags => tags === searchValue))
    console.log(filterByTagsAndTitle?.length)

    const filteredEvents = filterByTagsAndTitle?.length > 0 && filterByTagsAndTitle || (selectedEventType === "Both" ? data : data?.filter(event => event.eventType === selectedEventType))

    

    return (
        <>
         <Header isDisabled={false} onSearchChange={setSearchValue} />

         <div className="bg-light">
         <div className="container">

                <div className="d-flex justify-content-between py-2 my-2">
                <h1>Meetup Events</h1>
                <div>
                    <form >
                        <select className="form-select me-2" name="eventType" onChange={(e) => setSelectedEventType(e.target.value)}  > 
                            <option hidden >Select Event Type</option>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                            <option value="Both">Both</option>
                        </select>
                    </form>
                </div>
                </div>

                <div>
                    <div className="row">
                        {
                            loading ? (
                                <div>Loading...</div>
                            ) : error ? (
                                <div className="text-danger">Failed to Load Events. Please try Again!</div>
                            ) :
                            filteredEvents?.length > 0 ? filteredEvents?.map((event) => (
                                
                                    <div className="col-md-4 py-2 px-2" key={event._id}>

                                 <Link to={`/eventdetails/${event._id}` } style={{textDecoration: "none"}} >
                                    <div className="card border-0">
                                        

                                       <div className="position-relative">
                                        <div className="position-absolute top-0 start-0 ">
                                            <div className="card border-0 my-2 mx-2 py-1 px-2 ">{event.eventType} Event</div>
                                        </div>
                                       <img src={event.thumbnail} className="card-img-top img-fluid" alt={`${event.title} Image `} style={{ height: "200px", objectFit: "cover" }} />
                                       </div>

                                        <div className="card-body">
                                        <p className="card-text"><small className="text-body-secondary">{event.date}</small></p>
                                        <h5 className="card-title">{event.title}</h5>
                                        
                                        </div>


                                    </div>
                                    </Link >
                                </div>
                            )) : (
                                <div>No Meetup Events Found!</div>
                            )
                        }
                    </div>
                </div>

                </div>
         </div>

         <Footer />
         
        </>
    )
}

export default Home 