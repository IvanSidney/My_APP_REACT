import './app-info.css';

const AppInfo = ({employees, increase}) => {

    return (
        <div className="app-info">
            <h1>Accounting for employees at Yakimenko&Co</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>The award will be received: {increase}</h2>
        </div>
    )
}


export default AppInfo;