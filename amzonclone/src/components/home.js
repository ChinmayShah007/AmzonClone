import React from 'react';

function Home()
{
    return(
        <div className="hero">
            <div class="card text-bg-dark">
                <img src="/assets/bg.jpg" class="card-img" alt="Background Image" height="865px"/>
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 class="card-title display-3 fw-border mb-0">New Season Arrivals</h5>
                        <p class="card-text lead fs-2">Check out all the trends</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;