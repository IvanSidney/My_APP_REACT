import './app-filter.css'

const AppFilter = () => {
    return(
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    Oll employeers
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Going up
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Salary
            </button>
        </div>
    )
}

export default AppFilter;