import React, { useState, useEffect } from 'react'

export default WrapComponent => {
    const withShow = props => {
        const [src, setSrc] = useState('')
        const [status, setStatus] = useState(false)

        const showImg = e => () => {
            setSrc(e)
            setStatus(true)
        }

        return (
            <>
                <WrapComponent {...props} showImg={showImg} />
                {status ?
                    <main className="show">
                        <div className="close" onClick={() => setStatus(false)}></div>
                        <div className="bt-close" onClick={() => setStatus(false)}><div className="i"></div><div className="x i"></div></div>
                        <img src={`/static/img/Products/${src}`} alt="" />
                    </main> : ''}
                <style jsx>{`
                    .show {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        top: 0;
                        left: 0;
                        position: fixed;
                        width: 100vw;
                        height: 100vh;
                        background-color: rgba(0,0,0,0.8);
                    }
                    .close {                        
                        width: 100vw;
                        height: 100vh;
                        position: absolute;
                        z-index: 10;
                        overflow: hidden;
                    }
                    .bt-close {                       
                        z-index: 11;
                        top: 0;
                        width: 100vw;
                        height: 100vh;
                    }
                    .i {
                        margin: 20px 10px;
                        position: absolute;
                        right: 0;
                        width: 25px;
                        height: 2px;
                        border-radius: 3px;
                        background-color: #fff;
                        transform: rotate(45deg);
                    }
                    .x {
                        transform: rotate(135deg);
                    }
                    .show img {
                        z-index: 11;
                        border-radius: 5px;
                    }
                    @media (max-width: 425px) {
                        .show img {
                            width: 365px;
                        } 
                    }
                `}</style>
            </>
        )
    }
    return withShow
}