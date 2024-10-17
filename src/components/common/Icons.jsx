const Icon = (props) => {
    const iconList = {
        clockIcon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0.25C3.71875 0.25 0.25 3.71875 0.25 8C0.25 12.2812 3.71875 15.75 8 15.75C12.2812 15.75 15.75 12.2812 15.75 8C15.75 3.71875 12.2812 0.25 8 0.25ZM10.8903 10.0312L10.2653 10.8125C10.0928 11.0281 9.77812 11.0631 9.5625 10.8906C9.56219 10.8903 9.56219 10.8903 9.56219 10.8903L7.46844 9.33656C7.17188 9.09906 6.99938 8.74 6.99969 8.36063V3.49969C6.99969 3.22344 7.22344 2.99969 7.49969 2.99969H8.49969C8.77562 2.99969 8.99969 3.22344 8.99969 3.49969V7.99969L10.8122 9.32781C11.0278 9.50031 11.0625 9.81469 10.89 10.0303C10.8897 10.0303 10.8897 10.0303 10.8897 10.0306L10.8903 10.0312Z" fill="#CDCCC6" />
            </svg>
        ),
        locationIcon: (
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 7.72998e-07C3.05333 7.72998e-07 0.666664 2.38667 0.666664 5.33333C0.666664 7.67333 4 13.35 5.432 15.6827C5.552 15.876 5.76466 15.996 5.998 15.996C6.22466 15.996 6.44466 15.876 6.56466 15.676C7.99133 13.3427 11.33 7.66933 11.33 5.32267C11.3233 2.376 8.93666 -0.0106659 5.99666 -0.0106659L6 7.72998e-07ZM6 7.66667C4.70666 7.66667 3.66666 6.62 3.66666 5.33333C3.66666 4.04 4.70666 3 6 3C7.28666 3 8.33333 4.04 8.33333 5.33333C8.33333 6.62 7.28666 7.666 6 7.666V7.66667Z" fill="#CDCCC6" />
            </svg>
        ),
        rightArrowIcon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 8.50001H15.5C15.7733 8.50001 16 8.27334 16 8.00001C16 7.72001 15.7733 7.50001 15.5 7.50001H0.5C0.22 7.50001 0 7.72001 0 8.00001C0 8.27334 0.22 8.50001 0.5 8.50001Z" fill="black" />
                <path d="M8.85333 15.3533L15.8533 8.35334C16.0467 8.15334 16.0467 7.84001 15.8533 7.64001L8.85333 0.640005C8.65333 0.440005 8.34 0.440005 8.14 0.640005C7.94 0.833339 7.94 1.14667 8.14 1.34667L15.14 8.34667V7.63334L8.14 14.6333C7.94 14.8267 7.94 15.14 8.14 15.34C8.33333 15.5333 8.64667 15.5333 8.84667 15.34L8.85333 15.3533Z" fill="black" />
            </svg>
        ),
        dashboardIcon: (
            <svg className={props.svgClass} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3281_766)">
                    <path d="M0.78999 0.780001C0.59999 0.960001 0.48999 1.22 0.48999 1.48V12.49C0.48999 13.04 0.92999 13.49 1.48999 13.49H9.48999C10.04 13.49 10.49 13.04 10.49 12.49V1.49C10.49 0.930001 10.04 0.490001 9.48999 0.490001L1.48999 0.470001C1.21999 0.470001 0.96999 0.570001 0.77999 0.760001L0.78999 0.780001Z" />
                    <path d="M22.5 0.493001L14.5 0.503001C13.94 0.503001 13.5 0.943001 13.5 1.503V6.503C13.5 7.053 13.94 7.503 14.5 7.503H22.5C23.05 7.503 23.5 7.053 23.5 6.503V1.48C23.5 0.920001 23.05 0.480001 22.5 0.480001V0.493001Z" />
                    <path d="M10.2 23.21C10.38 23.02 10.49 22.76 10.49 22.5V17.5C10.49 16.94 10.04 16.5 9.48999 16.5H1.48999C0.92999 16.5 0.48999 16.94 0.48999 17.5V22.48C0.48999 23.03 0.92999 23.48 1.48999 23.48L9.48999 23.49C9.74999 23.49 9.99999 23.379 10.19 23.189L10.2 23.21Z" />
                    <path d="M22.5 10.508H14.5C13.94 10.508 13.5 10.948 13.5 11.508V22.508C13.5 23.058 13.94 23.508 14.5 23.508L22.5 23.488C23.05 23.488 23.5 23.038 23.5 22.488V11.5C23.5 10.94 23.05 10.5 22.5 10.5V10.508Z" />
                </g>
                <defs>
                    <clipPath id="clip0_3281_766">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        eventsIcon: (
            <svg className={props.svgClass} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.75 3H18.5V0.5625C18.5 0.253125 18.2469 0 17.9375 0H16.0625C15.7531 0 15.5 0.253125 15.5 0.5625V3H9.5V0.5625C9.5 0.253125 9.24687 0 8.9375 0H7.0625C6.75313 0 6.5 0.253125 6.5 0.5625V3H4.25C3.00781 3 2 4.00781 2 5.25V21.75C2 22.9922 3.00781 24 4.25 24H20.75C21.9922 24 23 22.9922 23 21.75V5.25C23 4.00781 21.9922 3 20.75 3ZM20.4688 21.75H4.53125C4.37656 21.75 4.25 21.6234 4.25 21.4688V7.5H20.75V21.4688C20.75 21.6234 20.6234 21.75 20.4688 21.75Z" />
            </svg>
        ),
        onIcon: (
            <svg className={props.svgClass} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 2H5C2.23 2 0 4.23 0 7V17C0 19.76 2.23 21.99 5 22H19C21.76 21.99 23.99 19.76 24 17V7C23.99 4.23 21.76 2 19 2ZM22 17C22 18.65 20.65 20 19 20H5C3.34 20 2 18.65 2 17V7C2 5.34 3.34 4 5 4H19C20.65 4 22 5.34 22 7V17Z" />
                <path d="M15.93 10.658L10.16 7.768V7.76C9.41 7.38 8.51 7.68 8.14 8.43C8.03 8.63 7.98 8.86 7.98 9.1V14.86C7.97 15.68 8.65 16.359 9.47 16.359C9.7 16.359 9.93 16.299 10.14 16.199L15.9 13.309C16.64 12.929 16.94 12.029 16.57 11.289C16.42 10.989 16.18 10.759 15.89 10.609L15.93 10.658Z" />
            </svg>
        ),
        programmesIcon: (
            <svg className={props.svgClass} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3281_970)">
                    <path d="M19.5 3.35649e-06H4.50001C3.39001 3.35649e-06 2.50001 0.890003 2.50001 2V22.4C2.46001 22.98 2.75901 23.53 3.25901 23.82C3.77901 24.07 4.38901 24.03 4.86901 23.69L11.714 19.26C11.874 19.15 12.084 19.15 12.254 19.26L19.1 23.69C19.74 24.18 20.68 24.06 21.17 23.41C21.39 23.11 21.5 22.74 21.47 22.38V1.98C21.47 0.870003 20.57 -0.0199966 19.47 -0.0199966L19.5 3.35649e-06ZM9.58601 13.719L6.78001 10.649H6.77901C6.38901 10.249 6.40901 9.609 6.79901 9.229C7.18901 8.839 7.82901 8.859 8.20901 9.249C8.21901 9.259 8.22901 9.269 8.23901 9.279L10.899 12.179L16.239 4.921C16.559 4.471 17.189 4.37 17.629 4.7C18.069 5.02 18.169 5.65 17.839 6.09L12.369 13.52C11.799 14.32 10.679 14.52 9.86901 13.95C9.74901 13.86 9.63901 13.77 9.54901 13.66L9.58601 13.719Z" />
                </g>
                <defs>
                    <clipPath id="clip0_3281_970">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        lngIcon: (
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3281_762)">
                    <path d="M13.601 20.2767C13.7177 20.37 13.9044 20.4167 14.0677 20.3933L28.2544 17.6867C28.8144 17.57 29.421 17.57 29.981 17.6843L44.1607 20.3677C44.464 20.4143 44.7674 20.2277 44.8374 19.901C44.8374 19.8543 44.8374 19.8077 44.8374 19.761V16.2867C44.814 12.74 41.944 9.87 38.4207 9.87H34.3374C34.0107 9.87 33.754 9.59 33.754 9.28667V1.12001C33.754 0.466672 33.2174 -0.0466614 32.5874 -0.0466614H25.5874C24.934 -0.0466614 24.4207 0.466672 24.4207 1.12001V9.28667C24.4207 9.59 24.1407 9.87 23.8374 9.87H19.7167C16.17 9.87 13.3 12.74 13.3 16.2867V19.7167C13.2767 19.88 13.37 20.0433 13.51 20.16L13.601 20.2767Z" fill="black" />
                    <path d="M31.1267 21.7V21.6767C30.9867 21.77 30.8934 21.9333 30.8934 22.12V42.7933C30.8934 43.0267 31.0334 43.2367 31.2667 43.33C32.6434 43.8433 33.7634 44.8933 34.3934 46.2233C34.9067 47.0867 35.8377 47.6467 36.841 47.6933C38.241 47.6233 39.522 46.8767 40.292 45.71C41.3187 43.9133 43.2087 42.84 45.262 42.8867C46.0087 42.8867 46.7554 43.0267 47.4787 43.3067C47.6187 43.3533 47.8054 43.3533 47.9454 43.2833C48.0854 43.19 48.202 43.05 48.2487 42.8867L52.3087 26.67C52.4487 26.04 52.0754 25.41 51.4454 25.2467C51.422 25.2233 51.3987 25.2233 51.3754 25.2233L31.472 21.42C31.2854 21.3733 31.122 21.42 30.982 21.5367L31.1267 21.7Z" fill="black" />
                    <path d="M9.84202 42.6417C9.91202 42.9217 10.2154 43.1317 10.5187 43.0617C10.8454 42.9683 11.1954 42.945 11.5454 42.945C13.552 42.9217 15.4187 43.9717 16.492 45.675C17.3087 46.8183 18.5664 47.565 19.9664 47.705C21.693 47.5183 23.2797 46.655 24.3997 45.3017C25.053 44.3917 25.963 43.6917 26.9897 43.3183C27.1997 43.225 27.363 43.015 27.363 42.7583V22.0267C27.363 21.84 27.2697 21.6767 27.153 21.56C27.013 21.4433 26.8264 21.3967 26.663 21.42L6.68969 25.2233C6.03636 25.34 5.63969 25.9467 5.75636 26.5767C5.75636 26.5767 5.75636 26.6 5.75636 26.6233L9.84202 42.6417Z" fill="black" />
                    <path d="M55.979 53.151C55.7924 51.8677 54.6257 50.9577 53.3424 51.1443C53.319 51.1443 53.319 51.1443 53.319 51.1443C49.539 51.6343 46.9257 47.6443 46.9024 47.5977C46.109 46.501 44.5924 46.2443 43.4957 47.0143C43.239 47.1777 43.029 47.3877 42.8657 47.6443C41.489 49.7677 39.1557 51.0977 36.6124 51.1443L36.61 51.142C34.3 51.072 32.2234 49.7887 31.15 47.782C30.4967 46.592 29.0034 46.172 27.8367 46.8253C27.5567 46.9653 27.3234 47.152 27.1367 47.3853C25.41 49.5553 22.8434 50.9087 20.0667 51.1187C17.5234 50.9553 15.19 49.6253 13.79 47.5253C13.02 46.4053 11.5034 46.1487 10.3834 46.9187C10.22 47.012 10.0567 47.152 9.94002 47.292C9.89336 47.3153 6.34669 51.632 2.47336 51.1187C1.19002 50.9553 0.0233571 51.842 -0.139976 53.1253C-0.30331 54.3853 0.583357 55.552 1.84336 55.7153H1.82002C2.21669 55.762 2.66002 55.7853 3.08002 55.7853C6.06669 55.6453 8.93669 54.4553 11.2024 52.4487C11.4124 52.262 11.739 52.262 11.949 52.4487C14.119 54.4787 16.9657 55.622 19.9524 55.6453C22.9857 55.5753 25.9024 54.4997 28.2357 52.5397C28.4457 52.353 28.7957 52.353 29.0057 52.563V52.5607C30.9657 54.5207 33.649 55.6173 36.449 55.594C39.3424 55.594 42.1657 54.4973 44.3357 52.5607C44.5457 52.3507 44.8724 52.3507 45.1057 52.5607C47.369 54.7773 50.5424 55.8507 53.7157 55.5007C54.9757 55.314 55.8624 54.1473 55.699 52.864L55.979 53.151Z" fill="black" />
                </g>
                <defs>
                    <clipPath id="clip0_3281_762">
                        <rect width="56" height="56" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        hydrogenIcon: (
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3281_822)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M26.7726 0.30274C27.8693 -0.372869 29.316 -0.0234161 29.9926 1.09483L29.8993 1.02494C33.236 6.47641 36.6193 12.3239 39.606 18.1481C44.0393 26.7913 46.606 33.3843 46.606 37.3215C46.606 47.5954 38.2293 55.959 27.9393 55.959C17.626 55.959 9.27264 47.5954 9.27264 37.3215C9.27264 33.4076 11.816 26.8146 16.2726 18.1714C19.2593 12.3705 22.6193 6.52301 25.9793 1.07154C26.166 0.745381 26.446 0.489115 26.7726 0.30274ZM21.8296 27.9562C22.2878 27.9562 22.6592 28.327 22.6592 28.7845V34.583H28.4666V28.7845C28.4666 28.327 28.838 27.9562 29.2962 27.9562C29.7544 27.9562 30.1258 28.327 30.1258 28.7845V42.0377C30.1258 42.4952 29.7544 42.866 29.2962 42.866C28.838 42.866 28.4666 42.4952 28.4666 42.0377V36.2396H22.6592V42.0377C22.6592 42.4952 22.2878 42.866 21.8296 42.866C21.3714 42.866 21 42.4952 21 42.0377V28.7845C21 28.327 21.3714 27.9562 21.8296 27.9562ZM34.6887 34.5822C34.0867 34.5822 33.4443 35.0578 33.4443 35.8247C33.4443 36.2822 33.0728 36.6531 32.6147 36.6531C32.1565 36.6531 31.785 36.2822 31.785 35.8247C31.785 33.9687 33.355 32.9256 34.6887 32.9256C36.0225 32.9256 37.5924 33.9687 37.5924 35.8247C37.5924 36.6641 37.2232 37.388 36.7835 37.9863C36.3456 38.582 35.7749 39.1355 35.2638 39.6263L35.1893 39.6978C34.6854 40.1814 34.2446 40.6044 33.9162 41.0235C33.8659 41.0878 33.8202 41.1495 33.7789 41.2088H36.7628C37.2209 41.2088 37.5924 41.5797 37.5924 42.0372C37.5924 42.4946 37.2209 42.8655 36.7628 42.8655H32.6147C32.1565 42.8655 31.785 42.4946 31.785 42.0372C31.785 41.2377 32.1781 40.5532 32.6094 40.0028C33.0133 39.4872 33.5351 38.987 34.0108 38.531L34.1136 38.4323C34.6395 37.9273 35.1058 37.4688 35.4458 37.0062C35.7838 36.5463 35.9331 36.1657 35.9331 35.8247C35.9331 35.0577 35.2908 34.5822 34.6887 34.5822Z" fill="black" />
                </g>
                <defs>
                    <clipPath id="clip0_3281_822">
                        <rect width="56" height="56" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
    }
    return (
        <span className={`d-flex ${props.className}`}>
            {props.iconName && iconList[props.iconName]}
        </span>
    )
}

export default Icon