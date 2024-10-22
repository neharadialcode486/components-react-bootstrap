import React from 'react'
import FooterFiveLogo from '../assets/image/svg/cointips-logo.svg'
import FooterFiveTwitter from '../assets/image/svg/footer-5-twitter.svg'
import FooterFiveYoutube from '../assets/image/svg/footer-5-youtube.svg'

const FooterFive = () => {
    return (
        <footer class="bg-cover min-vh-100  d-flex align-items-center justify-content-center flex-column">
        <div class="bg-color-5 rounded-4 w-100">
            <div class="container px-5 py-3">
                <div class="row">
                    <div class="col-xl-4 col-lg-6 text-xl-start text-center">
                        <a href="/"><img class="mb-2" src={FooterFiveLogo} alt="logo"/></a>
                        <p class="light-gray-5 mb-0">© 2024 Cointips LLC. Tous droits réservés.</p>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-8 col-12 d-flex align-items-center mt-4">
                        <div class="d-flex flex-wrap gap-4 mx-auto">
                            <p class="light-gray-5 me-xl-2 common-hover-5 transitions">CGV</p>
                            <p class="light-gray-5 me-xl-2 common-hover-5 transitions">Politique de confidentialité</p>
                            <p class="light-gray-5 common-hover-5 transitions">Mentions légales</p>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-12 col-md-4 col-12 d-flex align-items-center ">
                        <div class="mx-auto">
                           <a href="https://www.youtube.com/" target="_blank"> <img class="pe-4" src={FooterFiveYoutube} alt=""/></a>
                            <a href="https://x.com/home?lang=en" target="_blank"><img class="" src={FooterFiveTwitter} alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default FooterFive
