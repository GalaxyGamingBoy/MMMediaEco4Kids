<script>
    import Element_NavBar from "./NavBar/Element_NavBar.svelte";
    import { isLoggedIn, activePage } from "../stores";

    export let NavBarTitle = "";
    let loginMSG = "";

    $: $isLoggedIn, loginMSGDecider();

    function loginMSGDecider() {
        if ($isLoggedIn == 1) {
            loginMSG = "Admin";
        } else {
            loginMSG = "Login";
        }
    }

    function goToHome() {
        activePage.set("home");
    }

    loginMSGDecider();
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#Home" on:click={goToHome}
            ><img
                src="https://i.ibb.co/dmbSxP5/LogoV2.png"
                alt="LogoV2"
                border="0"
                width="50"
            /></a
        >
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <Element_NavBar
                    ElementActive="true"
                    ElementTitle="Home"
                    ElementLink="#Home"
                />
                <Element_NavBar
                    ElementActive="false"
                    ElementTitle="About"
                    ElementLink="#About"
                />
                <Element_NavBar
                    ElementActive="false"
                    ElementTitle={loginMSG}
                    ElementLink="#Login"
                />
            </ul>
        </div>
    </div>
</nav>
