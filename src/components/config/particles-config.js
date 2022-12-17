const particlesConfig = {
    autoPlay:true,
    fullScreen:{
        enable:true,
        zIndex:-1
    },
    background: {
        color: {
            value: "#1f70d9",
        },
    },
    particles: {
        color: {
            value: "#DCD3E2",
        },
        links: {
            color: "#DCD3E2",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            directions: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
        },
        size: {
            value: {
                min: 0.1,
                max: 6
            }
        },
    },

}

export default particlesConfig