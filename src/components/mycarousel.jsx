import React from 'react';

function MyCarousel (props) {
    return(
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="./assets/img/walking.jpg" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="./assets/img/hiking.jpg" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="./assets/img/jogging.jpg" alt="Third slide" />
                    </div>
                </div>
            </div>
        </div>
    ); 
};

export default MyCarousel;