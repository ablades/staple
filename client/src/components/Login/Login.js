import React from 'react';

function Login() {
    return (
        <div>
            <form method="POST" action="/login">
                <div class="row">
                    <div class="col-sm-4 col-sm-offset-4">
                        <div class="form-group">
                            <label for="post-title">Username</label>
                            <input type="text" name="username" class="form-control" id="post-title" placeholder="username" />
                        </div>
                        <div class="form-group">
                            <label for="post-url">Password</label>
                            <input type="password" name="password" class="form-control" id="post-url" placeholder="password" />
                        </div>
                        <div class='text-right'>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}