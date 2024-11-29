import React from 'react'

function ServiceComponent({title,description,image}) {
    return (
        <>
            <article class="postcard dark blue">
                <a class="postcard__img_link" href="#">
                    <img class="postcard__img" src={image} alt={description} />
                </a>
                <div class="postcard__text">
                    <h1 class="postcard__title blue">{title}</h1>
                    <div class="postcard__subtitle small">
                        {/* <time datetime="2020-05-25 12:00:00">
                                <i class="fas fa-calendar-alt mr-2"></i> Mon, May 25th 2020
                            </time> */}
                    </div>
                    <div class="postcard__bar"></div>
                    <div class="postcard__preview-txt">
                        {description}
                    </div>

                </div>
            </article>
        </>
    )
}

export default ServiceComponent