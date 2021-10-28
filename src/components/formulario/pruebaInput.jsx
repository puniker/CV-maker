export default ( {value, onChange} ) => {

    const onFieldChange = (event) => {
        const fieldValue = event.target.value;
        onChange(fieldValue);
    }

    return (
        <>
            <input type="text" value={value} onChange={onFieldChange} />
        </>
    )
}