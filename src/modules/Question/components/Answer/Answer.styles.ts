export const answerStyles = {
    fontSize: "100px",
    marginTop: "24px",
    color: 'text.secondary',

    a: {
        fontSize: '16px',
        color: 'secondary.dark'
    },
    ul: {
        marginTop: 0,
        marginBottom: '0.4em',

        li: {
            marginBottom: '8px',
            fontSize: '16px'
        }
    },


    ol: {
        marginTop: 0,
        marginBottom: '8px',
        li: {
            marginBottom: '8px',
            fontSize: '16px'
        }
    },

    ".text": {
        fontSize: "0.16em"
    },
    ".text-white": {
        color: 'white',
    },

    ".text-summary": {
        marginTop: '20px',
        paddingTop: '20px',
        fontSize: '0.16em',
        borderTop: '1px solid',
        borderTopColor: 'text.secondary'
    },
    ".section-title": {
        paddingTop: "20px",
        paddingBottom: "20px",
        fontSize: "0.18em",
        color: 'white',
    },

    ".list-item-title": {
        color: "white",
        fontWeight: 'bold'
    },
    ".text-block": {
        display: "block",
        marginTop: "16px",
        marginBottom: "16px",
        fontSize: "16px"
    },

    ".code": {
        background: '#2F3A46',
        color: "white",
        fontSize: "1em",
        padding: "0.1em 0.4em",
        borderRadius: "0.4em",
        border: "1px solid  #3B4A59"
    },
    ".code-link": {
        background: '#2F3A46',
        color: "white",
        fontSize: "1em",
        padding: "0 0.4em",
        borderRadius: "0.4em",
        border: "1px solid  #3B4A59",

        a: {
            color: "inherit",
            textDecoration: 'underline',
            transition: "0.2s",
            "&:hover": {
                opacity: 0.6
            }
        }
    }
}