let initialPath = ''
let targetPath = ''

if (typeof window !== 'undefined') {
    initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`
    targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`
}

const curve = {
    initial: {
        d: initialPath,
    },
    enter: {
        d: targetPath,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
        d: initialPath,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
}

export default curve
