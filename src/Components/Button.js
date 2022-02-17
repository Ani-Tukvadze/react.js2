export default function Button({customClass, text, customStyle, onClick}) {
    return (
        <button 
            onClick={onClick}
            className={`btn ${customClass ? customClass : ""}`} 
            style={customStyle}
        >
            {text}
        </button>
   )
}

