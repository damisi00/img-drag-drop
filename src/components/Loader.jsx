

const Loader = () => {
  return (
    <>
        <div className="loader">

        
            <svg version="1.1" id="L2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 100 100" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                <circle fill="none" stroke="#fff" strokeWidth="4" strokeMiterlimit="10" cx="50" cy="50" r="48"/>
                <line fill="none" strokeLinecap="round" stroke="#fff" strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="85" y2="50.5">
                <animateTransform 
                    attributeName="transform" 
                    dur="2s"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite" />
                </line>
                <line fill="none" strokeLinecap="round" stroke="#fff" strokeWidth="4" strokeMiterlimit="10" x1="50" y1="50" x2="49.5" y2="74">
                <animateTransform 
                    attributeName="transform" 
                    dur="15s"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite" />
                </line>
            </svg>

        </div> 
        {/* <svg version="1.1" id="L6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
            <rect fill="none" stroke="#fff" stroke-width="4" x="25" y="25" width="50" height="50">
            <animateTransform
                attributeName="transform"
                dur="0.5s"
                from="0 50 50"
                to="180 50 50"
                type="rotate"
                id="strokeBox"
                attributeType="XML"
                begin="rectBox.end"/>
            </rect>
            <rect x="27" y="27" fill="#fff" width="46" height="50">
            <animate
                attributeName="height"
                dur="1.3s"
                attributeType="XML"
                from="50" 
                to="0"
                id="rectBox" 
                fill="freeze"
                begin="0s;strokeBox.end"/>
            </rect>
        </svg> */}
    </>
  )
}

export default Loader