import React from 'react'
import "./Gallery.css"

const Gallery = () => {

    const arrayPictures = [
        { id: 0, src: "/assets/0.jpeg", alt: "0"},
        { id: 1, src: "/assets/1.JPG", alt: "1"},
        { id: 2, src: "/assets/2.JPG", alt: "2"},
        { id: 3, src: "/assets/3.jpeg", alt: "3"},
        { id: 4, src: "/assets/4.jpg", alt: "4"},
        { id: 5, src: "/assets/5.JPG", alt: "5"}
    ]
    return(
            <div id="carouselExampleCaptions" className="container-fluid carousel slide" data-bs-ride="carousel" data-interval="15">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div id="images" class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={arrayPictures[0].src} alt={arrayPictures[0].alt}/>
                    </div>
                    <div class="carousel-item">
                        <img src={arrayPictures[1].src} alt={arrayPictures[1].alt}/>
                    </div>
                    <div class="carousel-item">
                        <img src={arrayPictures[2].src} alt={arrayPictures[2].alt}/>
                    </div>
                    <div class="carousel-item">
                    <img src={arrayPictures[3].src} alt={arrayPictures[3].alt}/>
                    </div>
                    <div class="carousel-item">
                    <img src={arrayPictures[4].src} alt={arrayPictures[4].alt}/>
                    </div>
                    <div class="carousel-item">
                    <img src={arrayPictures[5].src} alt={arrayPictures[5].alt}/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
    )
}

export default Gallery
