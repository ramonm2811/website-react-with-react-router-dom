import React from 'react';
import { Link, useParams } from 'react-router-dom';

const News = ({ history, location, match }) => {

    //const { new_id } = match.params;
    const { new_id } = useParams();
    console.log(new_id);
    return (
        <>
            <h1>News</h1>
            <div className="list-group">
                <Link to="/news/1" className={"list-group-item list-group-item-action" + (parseInt(new_id) === 1 ? " active": "")}>
                    News 1
                </Link>
                <Link to="/news/2" className={"list-group-item list-group-item-action" + (parseInt(new_id) === 2 ? " active": "")}>
                    News 2
                </Link>
                <Link to={"/news/" + 3} className={"list-group-item list-group-item-action" + (parseInt(new_id) === 3 ? " active": "")}>
                    News 3
                </Link>
                <Link to={"/news/" + 4} className={"list-group-item list-group-item-action" + (parseInt(new_id) === 4 ? " active": "")}>
                    News 4
                </Link>
            </div>
        </>
    )
}

export default News;