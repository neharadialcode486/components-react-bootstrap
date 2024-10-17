const Icon = (props) => {
    const iconList = {
        plusIcon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z" fill="url(#paint0_linear_3078_61)" />
                <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z" fill="url(#paint1_linear_3078_61)" />
                <defs>
                    <linearGradient id="paint0_linear_3078_61" x1="5.25" y1="12.75" x2="12.482" y2="3.31464" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#18FF9E" />
                        <stop offset="1" stopColor="#1EA56C" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_3078_61" x1="11.25" y1="18.75" x2="13.4208" y2="18.715" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#18FF9E" />
                        <stop offset="1" stopColor="#1EA56C" />
                    </linearGradient>
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