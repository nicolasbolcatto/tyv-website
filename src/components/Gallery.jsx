import React from 'react'
import "./Gallery.css"

const Gallery = () => {

    const arrayPictures = [
        { id: 0, src: "../../assets/services/soil.png", alt: "Equipo de perforacion en tierra"},
        { id: 1, src: "../../assets/services/water.png", alt: "Equipo de perforacion en agua"},
        { id: 2, src: "../../assets/services/rock.png", alt: "Caja de roca"},
        { id: 3, src: "../../assets/services/cpt.png", alt: "Equipo CPT"}
    ]
    return(
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-interval="50">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={arrayPictures[0].src} class="d-block w-100" alt={arrayPictures[0].alt}/>
                    </div>
                    <div class="carousel-item">
                    <img src={arrayPictures[1].src} class="d-block w-100" alt={arrayPictures[1].alt}/>
                    </div>
                    <div class="carousel-item">
                    <img src={arrayPictures[2].src} class="d-block w-100" alt={arrayPictures[2].alt}/>
                    </div>
                    <div class="carousel-item">
                    <img src={arrayPictures[3].src} class="d-block w-100" alt={arrayPictures[3].alt}/>
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
