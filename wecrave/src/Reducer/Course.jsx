export const Course = ({courseName, instituteName, contact, city}) => {
    return (
        <table border="4px">
            <tr>
                <td>Course Name</td>
                <td>:</td>
                <td>{courseName}</td>
            </tr>
            <tr>
                <td>Institute Name</td>
                <td>:</td>
                <td>{instituteName}</td>
            </tr>
            <tr>
                <td>Contact</td>
                <td>:</td>
                <td>{contact}</td>
            </tr>
            <tr>
                <td>City</td>
                <td>:</td>
                <td>{city}</td>
            </tr>
        </table>
    )
}