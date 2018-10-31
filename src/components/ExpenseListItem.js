import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import moment from 'moment'


 export const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`}>    
            <h3>{description}</h3>
        </Link>
            <p>{`$${(amount) / 100}`} - {createdAt}</p>
    </div>
)

export default connect()(ExpenseListItem)

