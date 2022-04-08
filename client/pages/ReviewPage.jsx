import React, { useState, useEffect } from 'react';
import ReviewCard from "../components/ReviewCard.jsx";

const ReviewPage = () => {
    const [username, setUsername] = useState("");
    const [content, setContent] = useState("");
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews();
    }, []);

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);
    const handleReviewSubmit = async (e) => {
        e.preventDefault();

        const newUser = {
            name: username
        };

        const newUserRes = await fetch("http://localhost:3000/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        });

        const newUserFromDB = await newUserRes.json();

        const newReview = {
            userid: newUserFromDB.insertId,
            content: content,
            // location: ""
        };

        const newReviewRes = await fetch("http://localhost:3000/api/reviews", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newReview)
        }) // POST request

        console.log(await newReviewRes.json());
        fetchReviews()
    };

    const fetchReviews = () => {
        fetch("http://localhost:3000/api/reviews") // GET request
            .then(res => res.json())
            .then(reviews => setReviews(reviews.reverse()))
            .catch(err => console.log(err));
    };

    return (
        <>
            <div className="container text-body text-center">
                <div className="row">
                    <div className="col-12 p-0">
                        <nav>
                            <img
                                className="banner"
                                src="./assets/banner.jpg"
                                alt="logo for awesome site yay"
                            />
                            <h1>Review Landfills</h1>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <form>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control mb-1"
                                placeholder="Username"
                                aria-label="Username"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                            <textarea
                                className="form-control mb-2"
                                aria-label="With textarea"
                                placeholder="(500 characters max)"
                                value={content}
                                onChange={handleContentChange}
                                cols="30"
                                rows="10"
                            ></textarea>
                            <button className="btn btn-dark" onClick={handleReviewSubmit}>
                                Review It!
                            </button>
                        </div>
                    </form>
                    <div className=" Reviews mb-4">
                        {reviews.map((review) => (
                            <ReviewCard
                                key={review.id}
                                id={review.id}
                                username={review.name}
                                content={review.content}
                                created={review._created}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReviewPage;