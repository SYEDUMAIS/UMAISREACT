export const Courseinfo = ({courseName, Institute, ContactNo, city}) => {
    return(
        <table border="2px">
            
        <tr>
          <td>Course</td>
          <td>:</td>
          <td className="colorchange">{courseName}</td>
        </tr>
        <tr>
          <td>Institute</td>
          <td>:</td>
          <td>{Institute}</td>
        </tr>
        <tr>
          <td>Contact</td>
          <td>:</td>
          <td>{ContactNo}</td>
        </tr>
        <tr>
          <td>City</td>
          <td>:</td>
          <td>{city}</td>
        
        </tr>
      </table>
    )
}