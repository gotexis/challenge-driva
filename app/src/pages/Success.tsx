import { Button } from 'antd';
import React from 'react';
import { useHistory } from "react-router";

export default function Success () {
    const history = useHistory();

    return <div>
        <h1>Success</h1>
        <p>You have successfully submitted the form!</p>
        <Button onClick={() => history.push('/')}>Back to Home </Button>
        <a href="http://localhost:4000/quote/">See all documents in DB </a>
    </div>
}
