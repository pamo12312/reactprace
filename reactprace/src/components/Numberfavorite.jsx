import { Likes } from "./Like.jsx";
import { useState } from 'react'
import StarRating from "./Fav.jsx";
const coursesData = [
    {
        "name": "in name",
        "speaker": "Dr. Smith",



    },
    {
        "name": "in naame",
        "location": "browse movies",



    },

];

const Course = ({ course }) => {
    const {name,location} = course;
    const [count, setCount] = useState(0)
    const [counts, setCounts] = useState(0)
    const [favs, setFavs] = useState(0)
    const handleLike = () => {
        setNumberOfLikes(numberOfLikes + 1);
    };

    const handleDislike = () => {
        setNumberOfLikes(numberOfLikes - 1);
    };

        return (

            <div className="cardd">

                <div className="courses-card">
                    <div className="new">
                        <h2>{name}</h2>

                    </div>

                    <p className="location">Location: {location}</p>
                    <button className={"but"} onClick={() => setCount((count) => count + 1)}>
                       Vote up {count}
                    </button>
                    <button className={"but"} onClick={() => setCounts((counts) => counts + 1)}>
                       Vote down {counts}
                    </button>
                    <button className={"but"} onClick={() => setFavs((favs) => favs + 1)}>
                        Favorite {favs}
                    </button>
                    <StarRating/>
                </div>
            </div>
        );

}
export const CourseList = () => {

    return (
        <div>

            <div className="courses-container">
                {coursesData.map((course, index) => (
                    <Course key={index} course={course}/>
                ))}
            </div>

        </div>

    );
};