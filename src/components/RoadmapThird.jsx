import React from 'react'
import roadmapImg from '../assets/images/png/roadmap-third.png'
import arrowIcon from '../assets/images/svg/arrow-icon.svg'
import roadmapSmallImg from '../assets/images/svg/roadmap-third-small-img.svg'

const RoadmapThird = () => {
    return (
        <div className="bg-black pt-4">
            <h1
                className="fw-semibold text-white text-center pb-lg-5 mb-0 pt-4 pt-sm-2 roadmap-main-heading"
            >
                Roadmap
            </h1>
            <div className="position-relative mx-auto d-none d-lg-block roadmap-parent">
                <div className="position-absolute top-0 description-width content-one">
                    <div className="d-flex align-items-start icon-gap">
                        <img src={arrowIcon} alt="arrow-icon" />
                        <div>
                            <h2 className="roadmap-heading fw-semibold text-white mb-0">
                                Facilisi vulputate
                            </h2>
                            <p className="text-white roadmap-para mb-0">
                                Te id magna at facilisi Tempus id sed orci augue venenatis
                                integer.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="position-absolute description-width content-two">
                    <div className="d-flex align-items-start icon-gap">
                        <img src={arrowIcon} alt="arrow-icon" />
                        <div>
                            <h2 className="roadmap-heading fw-semibold text-white mb-0">
                                Facilisi vulputate
                            </h2>
                            <p className="text-white roadmap-para mb-0">
                                Te id magna at facilisi Tempus id sed orci augue venenatis
                                integer.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="position-absolute description-width content-three">
                    <div className="d-flex align-items-start icon-gap">
                        <img src={arrowIcon} alt="arrow-icon" />
                        <div>
                            <h2 className="roadmap-heading fw-semibold text-white mb-0">
                                Facilisi vulputate
                            </h2>
                            <p className="text-white roadmap-para mb-0">
                                Te id magna at facilisi Tempus id sed orci augue venenatis
                                integer.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="position-absolute description-width content-four">
                    <div className="d-flex align-items-start icon-gap">
                        <img src={arrowIcon} alt="arrow-icon" />
                        <div>
                            <h2 className="roadmap-heading fw-semibold text-white mb-0">
                                Facilisi vulputate
                            </h2>
                            <p className="text-white roadmap-para mb-0">
                                Te id magna at facilisi Tempus id sed orci augue venenatis
                                integer.
                            </p>
                        </div>
                    </div>
                </div>
                <img
                    src={roadmapImg}
                    alt="roadmap-third"
                    className="w-100"
                />
            </div>
            <div className="d-lg-none d-flex small-roadmap">
                <img
                    className="roadmap-small-img"
                    src={roadmapSmallImg}
                    alt="roadmap-third-small-img"
                />
                <div>
                    <div className="description-width content-spacing">
                        <div className="d-flex align-items-start icon-gap">
                            <img src={arrowIcon} alt="arrow-icon" />
                            <div>
                                <h2 className="roadmap-heading font-semibold text-white mb-0">
                                    Facilisi vulputate
                                </h2>
                                <p className="text-white pt-3 roadmap-para mb-0">
                                    Te id magna at facilisi Tempus id sed orci augue venenatis
                                    integer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="description-width content-spacing">
                        <div className="d-flex align-items-start icon-gap">
                            <img src={arrowIcon} alt="arrow-icon" />
                            <div>
                                <h2 className="roadmap-heading font-semibold text-white mb-0">
                                    Facilisi vulputate
                                </h2>
                                <p className="text-white pt-3 roadmap-para mb-0">
                                    Te id magna at facilisi Tempus id sed orci augue venenatis
                                    integer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="description-width content-spacing">
                        <div className="d-flex align-items-start icon-gap">
                            <img src={arrowIcon} alt="arrow-icon" />
                            <div>
                                <h2 className="roadmap-heading font-semibold text-white mb-0">
                                    Facilisi vulputate
                                </h2>
                                <p className="text-white pt-3 roadmap-para mb-0">
                                    Te id magna at facilisi Tempus id sed orci augue venenatis
                                    integer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="description-width content-spacing">
                        <div className="d-flex align-items-start icon-gap">
                            <img src={arrowIcon} alt="arrow-icon" />
                            <div>
                                <h2 className="roadmap-heading font-semibold text-white mb-0">
                                    Facilisi vulputate
                                </h2>
                                <p className="text-white pt-3 roadmap-para mb-0">
                                    Te id magna at facilisi Tempus id sed orci augue venenatis
                                    integer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadmapThird