const animation = {
    modalIn: (element) => {
        element.animate([
            {
                filter: 'opacity(0)',
                scale: '1 0.1',
                left: '52%'

            },
            {
                filter: 'opacity(10%)',
                scale: '1.2 0.1'
            },
            {
                filter: 'opacity(40%)',
                scale: '1 1.1',
                left: '50%'

            },
            {
                filter: 'opacity(100%) blur(0.6px)',
                scale: '1.01 0.98'
            },
            {
                filter: 'blur(0)',
                scale: 1,
            },
        ], {
            duration: 500
        });
    },
    modalOut: (element) => {
        element.animate([
            {
                filter: 'opacity(100%) blur(0.6px)',
                scale: 1
            },
            {
                filter: 'blur(0.7px)',
                scale: '1.2 1.25'
            },
            {
                filter: 'opacity(100%) blur(0px)',
                scale: '1.4 1.3',
                left: '53.5%'
            },
            {
                filter: 'opacity(20%)',
                scale: '1 0.8'
            },
            {
                filter: 'opacity(5%) blur(0)',
                left: '46%',
                scale: 0
            }

        ], {
            duration: 315,
        });
    },
    collapseIn: (element) => {
        element.animate([
            {
                filter: 'opacity(0%)',
                transform: 'translateY(-120%) scale(0.5, 0.4)'
            },
            {
                filter: 'opacity(25%)',
                transform: 'translateY(-3%) scale(1, 1.05)'
            },
            {
                filter: 'opacity(100%)',
                transform: 'translateY(0%) scale(1, 0.98)'
            },
            {
                transform: 'translateY(0%) scale(1)'
            }
        ], {
            duration: 500,
        });
    },
    collapseOut: (element) => {
        element.animate([
            {
                filter: 'opacity(100%)',
                transform: 'translateY(0) scale(1)'
            },
            {
                filter: 'opacity(25%)',
                transform: 'translateY(30%) scale(0.5, 0.4)'
            },
            {
                filter: 'opacity(20%)',
                transform: 'translateY(-75%) scale(0)'
            }
        ], {
            duration: 300,
        });
    },
}


export default animation;