import EmplListItem from "./EmplListItem";

export default function EmployeeList({ onSelectEmployee }) {

    const employees = [
        { name: 'James King', job: 'Prez',
        contacts: {
            office: "781-000-0001",
            mobile: "617-000-0001",
            sms: "617-000-0001",
            email: "jking@fakemail.com",
        }},
        { name: 'Julie Taylor', job: 'VP',
        contacts: {
            office: "781-000-0002",
            mobile: "617-000-0002",
            sms: "617-000-0002",
            email: "jtaylor@fakemail.com",
        }},
        { name: 'Eugene Lee', job: 'CFO',
        contacts: {
            office: "781-000-0003",
            mobile: "617-000-0003",
            sms: "617-000-0003",
            email: "elee@fakemail.com",
        }},
        { name: 'John Williams', job: 'VP of Engineering',
        contacts: {
            office: "781-000-0004",
            mobile: "617-000-0004",
            sms: "617-000-0004",
            email: "jwill@fakemail.com",
        }},
        { name: 'Ray Monroe', job: 'VP of Sales',
        contacts: {
            office: "781-000-0005",
            mobile: "617-000-0005",
            sms: "617-000-0005",
            email: "rmonroe@fakemail.com",
        }},
        { name: 'Paul Jones', job: 'QA Manager',
        contacts: {
            office: "781-000-0006",
            mobile: "617-000-0006",
            sms: "617-000-0006",
            email: "pjones@fakemail.com",
        }},
    ];

    const handleEmployeeClick = (employee) => {
        onSelectEmployee(employee);
    };

    const populatedList = employees.map((el) => {
        return <EmplListItem name={el.name} job={el.job} onClick={() => handleEmployeeClick(el)} />;
    });

        return <ul>{ populatedList }</ul>
    }


    //Create functionality between Employee list and Employee Page