<script>
    import { isLoggedIn, userDetails } from "../stores";

    function verifyInfo() {
        if (
            $userDetails.username == "admin" &&
            $userDetails.password == "tmima@B22"
        ) {
            isLoggedIn.set(1);
            $userDetails.username = "";
            $userDetails.password = "";
        } else {
            isLoggedIn.set(0);
        }
    }
</script>

<h1>Login</h1>

<div class="form-group row">
    <label for="username" class="col-4 col-form-label">Username</label>
    <div class="col-8">
        <input
            id="username"
            name="username"
            placeholder="Enter your username"
            type="text"
            class="form-control"
            bind:value={$userDetails.username}
        />
    </div>
</div>
<div class="form-group row">
    <label for="password" class="col-4 col-form-label">Password</label>
    <div class="col-8">
        <input
            id="password"
            name="password"
            placeholder="Enter your password"
            type="password"
            class="form-control"
            width="100"
            bind:value={$userDetails.password}
        />
    </div>
</div>
<div class="form-group row">
    <label class="col-4" />
    <div class="col-8">
        <div class="custom-control custom-checkbox custom-control-inline">
            <input
                name="allowbox"
                id="allowbox_0"
                type="checkbox"
                class="custom-control-input"
                value="aitbc"
            />
            <label for="allowbox_0" class="custom-control-label"
                >Allow info to be checked</label
            >
        </div>
    </div>
</div>
<div class="form-group row">
    <div class="offset-4 col-8">
        <button class="btn btn-primary" on:click={verifyInfo}>Submit</button>
    </div>
</div>
