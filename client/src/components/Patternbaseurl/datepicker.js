import React, { useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { DatePicker } from "react-materialize";

const PickDate = (props) => {

    // const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    return (
        <React.Fragment>
            <DatePicker
                label="Дата для тесту"
                // value={date}
                id="dateTest"
            // onChange={(newDate) => setDate(newDate.toISOString().split('T')[0])}
            />
        </React.Fragment>
    );
}

export default PickDate;