export default ( {fieldId="", name=fieldId, label="", accepts="image/png, image/jpg"} ) => {
    return(
        <div>
            <label htmlFor={fieldId}>{label}</label>
            <input 
                type="file"
                id={fieldId} 
                name={name}
                accept={accepts}
            ></input>
        </div>
    )
}