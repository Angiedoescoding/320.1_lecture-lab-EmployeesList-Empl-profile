import Header from './Header'
import Search from './Search'
import EmployeeList from './EmployeeList'

const Homepage = ({ onSelectEmployee })=> {
    return (
    <div className="page">
    <Header title={"Employee Directory"} />
    <Search />
    <EmployeeList onSelectEmployee={onSelectEmployee} />
    </div>
    )
}

export default  Homepage;