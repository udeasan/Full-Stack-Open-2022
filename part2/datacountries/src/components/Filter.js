const Filter = ({countryFilter, handleFilter}) => {
    return (
        <div>
            find countries <input value={countryFilter} onChange={handleFilter}/>
        </div>
    );
}

export default Filter;