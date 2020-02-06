import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateChurch() {
    return (
        <div>
            <form>
                <h1 class="churchAdd">Add your church organization here please:</h1>
                <div class="church">
                    <label>
                        Church Name:
                    </label>
                    <br></br>
                    <input  type="text-box" />
                    <div class="location">
                        <label>
                            Location of organization:
                        </label>
                        <br></br>
                        <input type="text" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateChurch;