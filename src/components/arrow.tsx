import css from 'styled-jsx/css'

const style = css`
        @media (max-width: 1600px) {
            div {
                --n: 2
            }
        }

        @media (min-width: 1600px) {
            div {
                --n: 1
            }
        }

        div {
            position: relative;
            bottom: calc(100px / var(--n));
            left: 50%;
        }
        a {
            padding-top: 80px;
        }
        a > span {
            position: absolute;
            width: calc(24px / var(--n));
            height: calc(24px / var(--n));
            margin-left: calc(-12px / var(--n));
            border-left: 1px solid #fff;
            border-bottom: 1px solid #fff;
            transform: rotate(-45deg);
            animation: flow 2s infinite;
            opacity: 0;
            box-sizing: border-box;
        }  
        a > span:nth-of-type(1) {
            animation-delay: 0s;
        }
        a > span:nth-of-type(2) {
            top: calc(16px / var(--n));
            animation-delay: .15s;
        }
        a > span:nth-of-type(3) {
            top: calc(32px / var(--n));
            animation-delay: .3s;
        }
        @keyframes flow {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
        }
    `

const Arrow = () => {
    return (
        <div>
            <a><span></span><span></span><span></span></a>
            <style jsx>{style}</style>
        </div>
    )
}

export default Arrow