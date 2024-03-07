export default function EmplListItem({name, job, onClick}) {
    return (
        // my version
        // <li>
        //     <h4>{props.employee.name}</h4>
        //     <h5>{props.employee.job}</h5>
        // </li>

        // Dylan's version
        <li onClick={onClick}>
            <h4>{name}</h4>
            <h5>{job}</h5>
        </li>
    )
}