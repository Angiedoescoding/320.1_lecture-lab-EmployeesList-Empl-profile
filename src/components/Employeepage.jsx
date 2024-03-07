import Header from './Header'

const Employeepage =({ currentEmployee })=> {

    // const employee = 
    //     {name: "Julie Taylor",
    //     job: "VP",
    //     contacts: {
    //         office: "781-000-0002",
    //         mobile: "617-000-0002",
    //         sms: "617-000-0002",
    //         email: "jtaylor@fakemail.com",
    //     }}
    

    return (  

        <div className="page">
            <Header title={"Employee"}/>

        {currentEmployee && (
            <div className="employeePage">
            <h2>{ currentEmployee.name }</h2>
            <p>{ currentEmployee.job }</p>
            { currentEmployee.contacts && (
                <div className="contactInfo">
                    <p>Call Office { currentEmployee.contacts.office }</p> 
                    <p>Call Mobile { currentEmployee.contacts.mobile }</p> 
                    <p>SMS { currentEmployee.contacts.sms }</p> 
                    <p>Email { currentEmployee.contacts.email }</p> 
                </div>
            )}
            </div>
        )}
        </div>
    );
}


export default Employeepage


