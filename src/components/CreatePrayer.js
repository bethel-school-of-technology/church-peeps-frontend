import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreatePrayer() {
    return (
        <div>
            <form>
                <h1 class="prayerAdd">Please request or inject prayer here:</h1>
                <div class="prayer">
                    <label>
                        Prayer:
                    </label>
                    <br></br>
                    <input type="text-box" />
                    <div class="firstName">
                        <label>First Name:</label>
                        <input type="text" />
                    </div>
                    <div class="lastName">
                        <label>Last Name:</label>
                        <input type="text" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreatePrayer;