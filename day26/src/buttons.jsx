function button(props){
    return( 
        <button style={{background : props.color}}>
            {props.text}
            
        </button>
    )
}

export default button