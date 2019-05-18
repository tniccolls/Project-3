import React from 'react';
import "./style.css"

function PostDisplay()
{
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div class="card">
                        <div className="card-body">
                            <h5 className="card-title">Post Title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Author/User Name</h6>
                            <p className="card-text">Body Text</p>
                            <a href="#" class="card-link">Add Comment</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostDisplay;