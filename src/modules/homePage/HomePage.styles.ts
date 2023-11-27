export const sx = {
    container: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '100px',
        '@media (max-width: 768px)': {
            paddingTop: '70px',
        },
        '@media (max-width: 479px)': {
            paddingTop: '60px',
        },
        '@media (max-width: 419px)': {
            paddingTop: '50px',
        }

    },
    listItem: {
        backgroundColor: 'third.main',

        '&:hover': {
            border: '1px solid',
            borderColor: 'secondary.main',

            a: {
                color: 'secondary.main',
            }
        },

        a: {
            color: 'text.primary'
        }
    },

    title: {
        '@media (max-width: 1999px)': {
            fontSize: '45px',
        },
        '@media (max-width: 1023px)': {
            fontSize: '45px',
        },
        '@media (max-width: 768px)': {
            fontSize: '45px',
        },
        '@media (max-width: 479px)': {
            fontSize: '40px',
        },
        '@media (max-width: 419px)': {
            fontSize: '35px',
        },
        '@media (max-width: 359px)': {
            fontSize: '30px',
        },
    },
    description: {
        paddingTop: '1em',
        '@media (max-width: 1999px)': {
            fontSize: '24px',
        },
        '@media (max-width: 1023px)': {
            fontSize: '22px',
        },
        '@media (max-width: 768px)': {
            fontSize: '22px',
        },
        '@media (max-width: 479px)': {
            fontSize: '22px',
        },
        '@media (max-width: 419px)': {
            fontSize: '18px',
        },
        '@media (max-width: 359px)': {
            fontSize: '16px',
        },
    }
}